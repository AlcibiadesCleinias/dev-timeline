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

  // Check if theme is dark currently.
  const isDarkTheme = theme.palette.mode === 'dark';

  // Clever labels.
  const isAllEnabled = showWorks && showEducations && showPrizes && showProjects;
  let workLabel = "Work Experience";
  let prizeLabel = "Honor & Award";
  let projectLabel = "Project";
  let educationLabel = "Education";
  if (isAllEnabled) {
    workLabel = "Show " + workLabel + " only";
    prizeLabel = "Show " + prizeLabel + " only";
    projectLabel = "Show " + projectLabel + " only";
    educationLabel = "Show " + educationLabel + " only";
  } else {
    workLabel = !showWorks ? "Show " + workLabel : "Hide " + workLabel;
    prizeLabel = !showPrizes ? "Show " + prizeLabel : "Hide " + prizeLabel;
    projectLabel = !showProjects ? "Show " + projectLabel : "Hide " + projectLabel;
    educationLabel = !showEducations ? "Show " + educationLabel : "Hide " + educationLabel;
  }

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
      <Tooltip title={workLabel} placement="left">
        <Fab
          {...(isDarkTheme ? {color: "success"} : {})}

          aria-label={workLabel}
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

      <Tooltip title={prizeLabel} placement="left">
        <Fab
          {...(isDarkTheme ? {color: "warning"} : {})}

          aria-label={prizeLabel}
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

      <Tooltip title={projectLabel} placement="left">
        <Fab
          {...(isDarkTheme ? {color: "info"} : {})}

          aria-label={projectLabel}
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

      <Tooltip title={educationLabel} placement="left">
        <Fab
          {...(isDarkTheme ? {color: "error"} : {})}

          aria-label={educationLabel}
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
