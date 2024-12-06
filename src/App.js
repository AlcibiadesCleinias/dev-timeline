import React from 'react';
import "./App.css";
import "./main.css";
import TimelineView from "./views/TimelineView";
import GithubCorner from "react-github-corner";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { Box } from '@mui/material';

function AppContent() {
  const { activeTheme } = useTheme();
  
  // Set CSS variables for theme-dependent colors by injecting them into the document's style.
  React.useEffect(() => {
    const isDark = activeTheme.palette.mode === 'dark';
    document.documentElement.style.setProperty(
      '--timeline-line-color',
      '#fff'
    );
    document.documentElement.style.setProperty(
      '--timeline-border-color',
      isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
    );
    document.documentElement.style.setProperty(
      '--timeline-date-color',
      isDark ? '#fff' : '#333'
    );
    document.documentElement.style.setProperty(
      '--stack-item-bg',
      isDark ? '#2d2d2d' : '#f9f5e9'
    );
    document.documentElement.style.setProperty(
      '--stack-item-color',
      isDark ? '#fff' : '#000'
    );
    document.documentElement.style.setProperty(
      '--timeline-box-shadow',
      isDark ? 'none' : '0 3px 6px rgba(0, 0, 0, 0.16)'
    );
  }, [activeTheme]);

  return (
    <MuiThemeProvider theme={activeTheme}>
      <CssBaseline />
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
