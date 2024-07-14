"""Get changed files and ask AI to improve the code in files if possible."""
import openai
import os


GET_ALL_CHANGED_FILES = "git show --pretty="" --name-only"  # + commit hash
EXTENSIONS_TO_ANALYZE = [".js", ".ts", ".md"]

def get_changed_files(commit_hash):
    changed_files = os.popen(GET_ALL_CHANGED_FILES + " " + commit_hash).read().split("\n")
    return changed_files


def filter_files(paths):
    return [path for path in paths if any(path.endswith(ext) for ext in EXTENSIONS_TO_ANALYZE)]


def gather_code(filenames: list[str]):
    """Gather code in 1 files in format: 
        PATH: filepath\n\n code\n\nPATH: filepath\n\n code\n\n..."""
    code = ""
    for filename in filenames:
        with open(filename, 'r') as f:
            code += f"PATH: {filename}\n\n" + f.read() + "\n\n"
    return code


def get_ai_suggestions(code, openai):
    completion = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a senior developer. You are asked to provide code improvements."},
            {"role": "system", "content": f"""The following code has been submitted via a pull request. It uses the pattern: 
            <PATH: filepath\n\n code\n\nPATH: filepath\n\n code\n\n...>.
            Analyze the code and provide specific improvements for each PATH. Your suggestions should be concise, 
            focused on enhancing the code directly related to the given PATH, and reference the relevant parts of the code where applicable. 
            Ensure your feedback is clear, human-readable, and highlights key details and features effectively.
            Here is the submitted code:\n\n{code}"""},
        ]
    )
    return completion.choices[0].message.content


def main():
    commit_hash = os.getenv('GITHUB_SHA', "671681ecfc18c87a7f7aaeba5f5d835f8edf411c")

    changed_files = get_changed_files(commit_hash)
    changed_files = filter_files(changed_files)
    code = gather_code(changed_files)

    openai.api_key = os.getenv('OPENAI_API_KEY')
    ai_suggestions = get_ai_suggestions(code, openai)

if __name__ == "__main__":
    main()