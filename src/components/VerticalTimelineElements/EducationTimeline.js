import React from 'react';
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '@mui/material/styles';
import { Stack } from "@mui/material";

import { EducationIconComponent, PrizeIconComponent } from "../Icons/icons";
import { prettifyDate } from "./utils";
import { prizeColor } from "../Constants/colors";
import { ExternalLinkButton } from "./Buttons";

function EducationTimelineElement(props) {
  const { 
    title, 
    subtitle, 
    description, 
    publicUrl, 
    start, 
    end, 
    isAwarded, 
    moreInfoUrl 
  } = props;
  
  const date = prettifyDate(start, end);
  const theme = useTheme();

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

  const iconStyle = isAwarded
    ? { background: prizeColor, color: "#fff" }
    : { background: theme.palette.error.main, color: "#fff" };

  const contentStyle = {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderTop: isAwarded ? `3px solid ${prizeColor}` : `3px solid ${theme.palette.error.main}`,
  };

  return (
    <VerticalTimelineElement
      className={isAwarded ? "vertical-timeline-element--prize" : "vertical-timeline-element--education"}
      date={date}
      iconStyle={iconStyle}
      icon={isAwarded ? <PrizeIconComponent /> : <EducationIconComponent />}
      contentStyle={contentStyle}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
      <br />
      {buttonsHtml}
    </VerticalTimelineElement>
  );
}

export default EducationTimelineElement;
