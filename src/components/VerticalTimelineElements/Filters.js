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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


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
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
        style={{ background: showWorks ? null : workColor.dimmed }}
        onClick={switchWorks}
      >
        <WorkIcon />
      </Fab>
      <Fab
        color="warning"
        aria-label="Prized Projects"
        size={filter_button_size}
        style={{ background: showPrizes ? null : prizeColor.dimmed }}
        onClick={switchPrizes}
      >
        <EmojiEventsIcon />
      </Fab>
      <Fab
        color="info"
        aria-label="Projects"
        size={filter_button_size}
        style={{ background: showProjects ? null : projectColor.dimmed }}
        onClick={switchProjects}
      >
        <DashboardIcon />
      </Fab>
      <Fab
        color="error"
        aria-label="Education"
        size={filter_button_size}
        style={{ background: showEducations ? null : educationColor.dimmed }}
        onClick={switchEducations}
      >
        <EducationIcon />
      </Fab>
    </Box>
  );
}
