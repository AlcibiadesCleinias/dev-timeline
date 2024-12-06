import { Box, Fab, ThemeProvider, Tooltip } from "@mui/material";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EducationIcon from "@material-ui/icons/School";
import {
  educationColor,
  educationColorDimmed,
  prizeColor,
  prizeColorDimmed,
  projectColor,
  projectColorDimmed,
  workColor,
  workColorDimmed,
} from "../Constants/colors";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import WorkIcon from "@material-ui/icons/Work";
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

  const iconStyle = { color: '#ffffff' };

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
          color="success"
          aria-label="Works"
          size={filter_button_size}
          sx={{ bgcolor: showWorks ? undefined : workColorDimmed }}
          onClick={switchWorks}
          onTouchEnd={(e) => {
            e.preventDefault();
            switchWorks();
            e.target.blur();
          }}
        >
          <WorkIconComponent />
        </Fab>
      </Tooltip>

      <Tooltip title="Awarded Projects" placement="left">
        <Fab
          color="warning"
          aria-label="Prized Projects"
          size={filter_button_size}
          sx={{ bgcolor: showPrizes ? undefined : prizeColorDimmed }}
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
          color="info"
          aria-label="Projects"
          size={filter_button_size}
          sx={{ bgcolor: showProjects ? undefined : projectColorDimmed }}
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
          color="error"
          aria-label="Education"
          size={filter_button_size}
          sx={{ bgcolor: showEducations ? undefined : educationColorDimmed }}
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
