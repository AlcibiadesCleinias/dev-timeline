import './App.css';
import './main.css';
import TimelineView from "./views/TimelineView";
import GithubCorner from "react-github-corner";
import {THEME} from "./components/Constants/themes";
import {ThemeProvider} from "@mui/material";

function App() {
  return (
      <ThemeProvider theme={THEME}>
        <GithubCorner
          href="https://github.com/alcibiadescleinias"
          bannerColor="#fff"
          octoColor="#000"
          width={80}
          height={80}
          direction="right"
        />
        <TimelineView/>
      </ThemeProvider>
  );
}

export default App;
