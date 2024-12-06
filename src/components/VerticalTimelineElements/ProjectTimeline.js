import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Stack } from "@mui/material";

import { ExternalLinkButton, StackIcons } from "./Buttons";
import { prizeColor } from "../Constants/colors";
import { prettifyDescription } from "./utils";
import { useTheme } from '@mui/material/styles';
import { PrizeIconComponent, ProjectIconComponent } from "../Icons/icons";

function ProjectTimelineElement(props) {
  const {
    title,
    subtitle,
    description,
    date,
    publicUrl,
    moreInfoUrl,
    stack,
    additionalTags,
    isAwarded,
  } = props;

  const theme = useTheme();

  let buttonsHtml = null;
  if (publicUrl || moreInfoUrl) {
    buttonsHtml = (
      <Stack spacing={2} direction="row">
        {publicUrl ? (
          <ExternalLinkButton url={publicUrl}>View</ExternalLinkButton>
        ) : null}
        {moreInfoUrl ? (
          <ExternalLinkButton url={moreInfoUrl}>More Info</ExternalLinkButton>
        ) : null}
      </Stack>
    );
  }
  let stackHtml = null;
  if (stack) {
    stackHtml = <StackIcons stack={stack} />;
  }
  return (
    <VerticalTimelineElement
      className={
        isAwarded
          ? "vertical-timeline-element--prize"
          : "vertical-timeline-element--project"
      }
      date={date}
      iconStyle={
        isAwarded
          ? { background: prizeColor, color: "#fff" }
          : { background: theme.palette.info.main, color: "#fff" }
      }
      icon={isAwarded ? <PrizeIconComponent /> : <ProjectIconComponent />}
      contentStyle={{
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderTop: isAwarded ? `3px solid ${prizeColor}` : `3px solid ${theme.palette.info.main}`,
      }}
    >
      {stackHtml}
      <br />
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{prettifyDescription(description)}</p>
      <p>
        {additionalTags.map((tag) => {
          return `#${tag} `;
        })}
      </p>
      <br />
      {buttonsHtml}
    </VerticalTimelineElement>
  );
}

export default ProjectTimelineElement;
