import { Box, Fab, ThemeProvider } from "@mui/material";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EducationIcon from "@material-ui/icons/School";
import {
  educationColor,
  prizeColor,
  projectColor,
  workColor,
} from "../Constants/colors";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import WorkIcon from "@material-ui/icons/Work";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

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
      {" "}
      <Fab
        color="success"
        aria-label="Works"
        size={filter_button_size}
        sx={{ bgcolor: showWorks ? undefined : workColor.dimmed }}
        onClick={switchWorks}
        onTouchEnd={(e) => {
          e.preventDefault();
          switchWorks();
          e.target.blur();
        }}
      >
        <WorkIcon />
      </Fab>
      <Fab
        color="warning"
        aria-label="Prized Projects"
        size={filter_button_size}
        sx={{ bgcolor: showPrizes ? undefined : prizeColor.dimmed }}
        onClick={switchPrizes}
        onTouchEnd={(e) => {
          e.preventDefault();
          switchPrizes();
          e.target.blur();
        }}
      >
        <EmojiEventsIcon />
      </Fab>
      <Fab
        color="info"
        aria-label="Projects"
        size={filter_button_size}
        sx={{ bgcolor: showProjects ? undefined : projectColor.dimmed }}
        onClick={switchProjects}
        onTouchEnd={(e) => {
          e.preventDefault();
          switchProjects();
          e.target.blur();
        }}
      >
        <DashboardIcon />
      </Fab>
      <Fab
        color="error"
        aria-label="Education"
        size={filter_button_size}
        sx={{ bgcolor: showEducations ? undefined : educationColor.dimmed }}
        onClick={switchEducations}
        onTouchEnd={(e) => {
          e.preventDefault();
          switchEducations();
          e.target.blur();
        }}
      >
        <EducationIcon />
      </Fab>
    </Box>
  );
}
