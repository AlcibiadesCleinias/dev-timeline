import React from 'react';
import "./App.css";
import "./main.css";
import TimelineView from "./views/TimelineView";
import GithubCorner from "react-github-corner";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { Box } from '@mui/material';

function AppContent() {
  const { activeTheme } = useTheme();
  
  // Set CSS variable for timeline line color based on theme
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--timeline-line-color',
      activeTheme.palette.mode === 'dark' ? '#424242' : '#ccc'
    );
  }, [activeTheme]);

  return (
    <MuiThemeProvider theme={activeTheme}>
      <CssBaseline /> {/* This normalizes styles and applies theme background */}
      <Box 
        sx={{ 
          bgcolor: 'background.default',
          color: 'text.primary',
          minHeight: '100vh',
          minWidth: '100vw',
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowX: 'hidden'
        }}
      >
        <GithubCorner
          href="https://github.com/alcibiadescleinias"
          bannerColor={activeTheme.palette.background.paper}
          octoColor={activeTheme.palette.text.primary}
          size={80}
          direction="right"
        />
        <TimelineView />
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <ThemeToggle />
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
