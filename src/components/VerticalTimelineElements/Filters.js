import {Box, Fab} from "@mui/material";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EducationIcon from "@material-ui/icons/School";
import {educationColor, prizeColor, projectColor, workColor} from "../Constants/colors";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import WorkIcon from "@material-ui/icons/Work";

export function FloatingFilters({switchProjects, switchEducations, switchPrizes, showProjects, showEducations, showPrizes, showWorks, switchWorks}) {
    return (
        <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >   <Fab color="primary" aria-label="Works" style={{background: showWorks ? workColor.primary: workColor.dimmed, color: '#fff'}} onClick={switchWorks}>
        <WorkIcon />
      </Fab>
      <Fab color="primary" aria-label="Prized Projects" style={{background: showPrizes ? prizeColor.primary: prizeColor.dimmed, color: '#fff'}} onClick={switchPrizes}>
        <EmojiEventsIcon />
      </Fab>
      <Fab aria-label="Projects" style={{background: showProjects? projectColor.primary : projectColor.dimmed, color: '#fff'}} onClick={switchProjects} >
        <DashboardIcon />
      </Fab>
      <Fab aria-label="Education" style={{background: showEducations? educationColor.primary : educationColor.dimmed, color: '#fff'}} onClick={switchEducations}>
        <EducationIcon />
      </Fab>
    </Box>
    )
}