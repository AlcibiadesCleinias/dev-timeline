import React from 'react';
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Stack } from "@mui/material";
import { ExternalLinkButton, StackIcons } from "./Buttons";
import { prizeColor } from "../Constants/colors";
import { prettifyDescription, prettifyWithDuration } from "./utils";
import { useTheme } from '@mui/material/styles';
import { PrizeIconComponent, ProjectIconComponent } from "../Icons/icons";

function ProjectTimelineElement(props) {
  const {
    title,
    subtitle,
    description,
    start,
    end,
    publicUrl,
    moreInfoUrl,
    stack,
    additionalTags,
    isAwarded,
  } = props;
  
  const theme = useTheme();
  const date = prettifyWithDuration(start, end);
  
  let additionalTagsHtml = null;
  if (additionalTags) {
    additionalTagsHtml = (
      <p>
        {additionalTags.map((tag, index) => (
          `#${tag} `
        ))}
      </p>
    );
  }

  let buttonsHtml = null;
  if (publicUrl || moreInfoUrl) {
    buttonsHtml = (
      <Stack spacing={2} direction="row">
        {publicUrl && (
          <ExternalLinkButton 
            url={publicUrl} 
            urlMeta={`${title} - Public URL`}
          >
            View
          </ExternalLinkButton>
        )}
        {moreInfoUrl && (
          <ExternalLinkButton 
            url={moreInfoUrl} 
            urlMeta={`${title} - More Info`}
          >
            More Info
          </ExternalLinkButton>
        )}
      </Stack>
    );
  }

  const stackHtml = stack ? <StackIcons stack={stack} /> : null;
  
  const iconStyle = isAwarded
    ? { background: prizeColor, color: "#fff" }
    : { background: theme.palette.info.main, color: "#fff" };

  const contentStyle = {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderTop: isAwarded ? `3px solid ${prizeColor}` : `3px solid ${theme.palette.info.main}`,
  };

  return (
    <VerticalTimelineElement
      className={isAwarded ? "vertical-timeline-element--prize" : "vertical-timeline-element--project"}
      date={date}
      iconStyle={iconStyle}
      icon={isAwarded ? <PrizeIconComponent /> : <ProjectIconComponent />}
      contentStyle={contentStyle}
    >
      {stackHtml}
      <br />
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{prettifyDescription(description)}</p>
      {additionalTagsHtml}
      <br />
      {buttonsHtml}
    </VerticalTimelineElement>
  );
}

export default ProjectTimelineElement;
