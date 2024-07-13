import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {Stack} from "@mui/material";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

import {ExternalLinkButton, StackIcons} from "./buttons";
import {prizeColor} from "../Constants/colors";
import {prettifyDescription} from "./utils";
import {THEME} from "../Constants/themes";


function ProjectTimelineElement(props) {
    const { title, subtitle, description, date, publicUrl, moreInfoUrl, stack, additionalTags, isAwarded} = props;

    let buttonsHtml = null;
    if (publicUrl || moreInfoUrl) {
      buttonsHtml = (
        <Stack spacing={2} direction="row">
            {publicUrl ? <ExternalLinkButton url={publicUrl}>View</ExternalLinkButton> : null}
            {moreInfoUrl ? <ExternalLinkButton url={moreInfoUrl}>More Info</ExternalLinkButton> : null}
        </Stack>
      );
    }
    let stackHtml = null;
    if (stack) {
        stackHtml = (
            <StackIcons stack={stack}/>
        )
    }
    return (
        <VerticalTimelineElement
              className={isAwarded ? "vertical-timeline-element--prize" : "vertical-timeline-element--project"}
              date={date}
              iconStyle={
            isAwarded ?
                {background: prizeColor.primary, color: '#fff'} :
                {background: THEME.palette.info.main, color: '#fff'}}
              icon={isAwarded ? <EmojiEventsIcon/> : <DashboardIcon/>}
          >
            {stackHtml}
            <br/>

            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <p>
                {prettifyDescription(description)}
            </p>
            <p>
                {additionalTags.map((tag) => {return `#${tag} `})}
            </p>
            <br/>
            {buttonsHtml}
          </VerticalTimelineElement>
    )
}

export default ProjectTimelineElement;