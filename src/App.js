import './App.css';
import './main.css';
import TimelineView from "./views/TimelineView";
import GithubCorner from "react-github-corner";

function App() {
  return (
      <div>
        <GithubCorner
          href="https://github.com/alcibiadescleinias"
          bannerColor="#fff"
          octoColor="#000"
          width={80}
          height={80}
          direction="right"
        />
        <TimelineView/>
      </div>
  );
}

export default App;
