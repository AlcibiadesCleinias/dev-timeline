import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <ButtonGroup variant="contained" aria-label="theme toggle button group">
      <Button
        onClick={() => setThemeMode('light')}
        startIcon={<LightModeIcon />}
        variant={themeMode === 'light' ? 'contained' : 'outlined'}
      >
        Light
      </Button>
      <Button
        onClick={() => setThemeMode('dark')}
        startIcon={<DarkModeIcon />}
        variant={themeMode === 'dark' ? 'contained' : 'outlined'}
      >
        Dark
      </Button>
      <Button
        onClick={() => setThemeMode('system')}
        startIcon={<SettingsBrightnessIcon />}
        variant={themeMode === 'system' ? 'contained' : 'outlined'}
      >
        System
      </Button>
    </ButtonGroup>
  );
};

export default ThemeToggle; 