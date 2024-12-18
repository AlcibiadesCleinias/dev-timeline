import { Box, Fab, Tooltip } from "@mui/material";
import {
  educationColorDimmed,
  prizeColorDimmed,
  projectColorDimmed,
  workColorDimmed,
} from "../Constants/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { 
  EducationIconComponent, 
  PrizeIconComponent, 
  ProjectIconComponent, 
  WorkIconComponent 
} from "../Icons/icons";

const FILTER_CONFIG = {
  work: {
    label: "Work Experience",
    color: "success",
    bgcolor: '#2e7d32',
    dimmedColor: workColorDimmed,
    IconComponent: WorkIconComponent,
  },
  prize: {
    label: "Honor & Award",
    color: "warning",
    bgcolor: '#FFD700',
    dimmedColor: prizeColorDimmed,
    IconComponent: PrizeIconComponent,
  },
  project: {
    label: "Project",
    color: "info",
    bgcolor: '#0288d1',
    dimmedColor: projectColorDimmed,
    IconComponent: ProjectIconComponent,
  },
  education: {
    label: "Education",
    color: "error",
    bgcolor: '#d32f2f',
    dimmedColor: educationColorDimmed,
    IconComponent: EducationIconComponent,
  },
};

function FilterButton({ 
  type, 
  isShown, 
  onSwitch, 
  size, 
  isDarkTheme, 
  isAllEnabled 
}) {
  const config = FILTER_CONFIG[type];
  
  let label = config.label;
  if (isAllEnabled) {
    label = `Show ${label} only`;
  } else {
    label = !isShown ? `Show ${label}` : `Hide ${label}`;
  }

  // To handle sitation where blurring the button is not working.
  const handleTouchEnd = (e) => {
    e.preventDefault();
    onSwitch();
    if (e.target instanceof HTMLElement) {
      e.target.blur();
    }
  };

  return (
    <Tooltip title={label} placement="left">
      <Fab
        {...(isDarkTheme ? {color: config.color} : {})}
        aria-label={label}
        size={size}
        sx={{ 
          bgcolor: isDarkTheme 
            ? (isShown ? undefined : config.dimmedColor) 
            : (isShown ? config.bgcolor : config.dimmedColor),
          '&:hover': {
            bgcolor: config.bgcolor,
          },
        }}
        onClick={onSwitch}
        onTouchEnd={handleTouchEnd}
        data-umami-event="Filter Toggle"
        data-umami-event-type={type}
        data-umami-event-action={isShown ? 'hide' : 'show'}
      >
        <config.IconComponent />
      </Fab>
    </Tooltip>
  );
}

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
  const isDarkTheme = theme.palette.mode === 'dark';
  const isAllEnabled = showWorks && showEducations && showPrizes && showProjects;

  const filterProps = [
    { type: 'work', isShown: showWorks, onSwitch: switchWorks },
    { type: 'prize', isShown: showPrizes, onSwitch: switchPrizes },
    { type: 'project', isShown: showProjects, onSwitch: switchProjects },
    { type: 'education', isShown: showEducations, onSwitch: switchEducations },
  ];

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
      {filterProps.map((props) => (
        <FilterButton
          key={props.type}
          {...props}
          size={filter_button_size}
          isDarkTheme={isDarkTheme}
          isAllEnabled={isAllEnabled}
        />
      ))}
    </Box>
  );
}
