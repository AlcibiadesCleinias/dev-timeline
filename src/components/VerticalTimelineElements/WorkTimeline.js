import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from 'react';

import { Stack } from "@mui/material";
import { useTheme } from '@mui/material/styles';

import { ExternalLinkButton, StackIcons } from "./Buttons";
import { WorkIconComponent } from "../Icons/icons";
import { prettifyWithDuration } from "./utils";
import { StyledHashTag } from "../StyledLinks/StyledHashTag";

function WorkTimelineElement(props) {
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
  } = props;
  let date = prettifyWithDuration(start, end);

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
  const formattedContent = description.split("\n").map((line, index) => (
    <div key={index}>
      {line}
      <br />
    </div>
  ));
  let additionalTagsHtml = null;
  if (additionalTags) {
    additionalTagsHtml = (
      <p>
        {additionalTags.map((tag, index) => (
          <StyledHashTag key={index}>
            #{tag}{' '}
          </StyledHashTag>
        ))}
      </p>
    );
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: theme.palette.success.main, color: "#fff" }}
      icon={<WorkIconComponent />}
      contentStyle={{
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      {stackHtml}
      <br />
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{formattedContent}</p>
      {additionalTagsHtml}
      <br />
      {buttonsHtml}
    </VerticalTimelineElement>
  );
}

export default WorkTimelineElement;
