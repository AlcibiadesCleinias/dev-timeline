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
        style={{ background: showWorks ? null : workColor.dimmed }}
        onClick={switchWorks}
      >
        <WorkIcon />
      </Fab>
      <Fab
        color="warning"
        aria-label="Prized Projects"
        style={{ background: showPrizes ? null : prizeColor.dimmed }}
        onClick={switchPrizes}
      >
        <EmojiEventsIcon />
      </Fab>
      <Fab
        color="info"
        aria-label="Projects"
        style={{ background: showProjects ? null : projectColor.dimmed }}
        onClick={switchProjects}
      >
        <DashboardIcon />
      </Fab>
      <Fab
        color="error"
        aria-label="Education"
        style={{ background: showEducations ? null : educationColor.dimmed }}
        onClick={switchEducations}
      >
        <EducationIcon />
      </Fab>
    </Box>
  );
}
