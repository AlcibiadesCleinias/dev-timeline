import { Box, Fab, ThemeProvider, Tooltip } from "@mui/material";
import {
  educationColorDimmed,
  prizeColorDimmed,
  projectColorDimmed,
  workColorDimmed,
} from "../Constants/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { EducationIconComponent, PrizeIconComponent, ProjectIconComponent, WorkIconComponent } from "../Icons/icons";

export function FloatingFilters({
  switchProjects,
  switchEducations,
  switchPrizes,
  showProjects,
  showEducations,
  showPrizes,
  showWorks,
  switchWorks,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const filter_button_size = matches ? "large" : "small";

  // check if theme is dark currently
  const isDarkTheme = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Tooltip title="Work Experience" placement="left">
        <Fab
          {...(isDarkTheme ? {color: "success"} : {})}

          aria-label="Works"
          size={filter_button_size}
          sx={{ 
            bgcolor: isDarkTheme ? (showWorks ? undefined : workColorDimmed) : (showWorks ? '#2e7d32' : workColorDimmed),
            '&:hover': {
              bgcolor: '#2e7d32',
            },
          }}
          onClick={switchWorks}
          onTouchEnd={(e) => {
            e.preventDefault();
            switchWorks();
            e.target.blur();
          }}
        >
          <WorkIconComponent/>
        </Fab>
      </Tooltip>

      <Tooltip title="Awarded Projects" placement="left">
        <Fab
          {...(isDarkTheme ? {color: "warning"} : {})}

          aria-label="Prized Projects"
          size={filter_button_size}
          sx={{ 
            bgcolor: isDarkTheme ? (showPrizes ? undefined : prizeColorDimmed) : (showPrizes ? '#FFD700' : prizeColorDimmed),
            '&:hover': {
              bgcolor: '#FFD700',
            },
          }}
          onClick={switchPrizes}
          onTouchEnd={(e) => {
            e.preventDefault();
            switchPrizes();
            e.target.blur();
          }}
        >
          <PrizeIconComponent />
        </Fab>
      </Tooltip>

      <Tooltip title="Projects" placement="left">
        <Fab
          {...(isDarkTheme ? {color: "info"} : {})}

          aria-label="Projects"
          size={filter_button_size}
          sx={{ 
            bgcolor: isDarkTheme ? (showProjects ? undefined : projectColorDimmed) : (showProjects ? '#0288d1' : projectColorDimmed),
            '&:hover': {
              bgcolor: '#0288d1',
            },
          }}
          onClick={switchProjects}
          onTouchEnd={(e) => {
            e.preventDefault();
            switchProjects();
            e.target.blur();
          }}
        >
          <ProjectIconComponent />
        </Fab>
      </Tooltip>

      <Tooltip title="Education" placement="left">
        <Fab
          {...(isDarkTheme ? {color: "error"} : {})}

          aria-label="Education"
          size={filter_button_size}
          sx={{ 
            bgcolor: isDarkTheme ? (showEducations ? undefined : educationColorDimmed) : (showEducations ? '#d32f2f' : educationColorDimmed),
            '&:hover': {
              bgcolor: '#d32f2f',
            },
          }}
          onClick={switchEducations}
          onTouchEnd={(e) => {
            e.preventDefault();
            switchEducations();
            e.target.blur();
          }}
        >
          <EducationIconComponent />
        </Fab>
      </Tooltip>
    </Box>
  );
}
