import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '@mui/material/styles';

import { EducationIconComponent, PrizeIconComponent } from "../Icons/icons";
import { prettifyDate } from "./utils";
import { prizeColor } from "../Constants/colors";
import { ExternalLinkButton } from "./Buttons";
import { Stack } from "@mui/material";

function EducationTimelineElement(props) {
  const { title, subtitle, description, publicUrl, start, end, isAwarded, moreInfoUrl } = props;
  const date = prettifyDate(start, end);
  const theme = useTheme();

  let buttonsHtml;
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

  return (
    <VerticalTimelineElement
      className={
        isAwarded
          ? "vertical-timeline-element--prize"
          : "vertical-timeline-element--education"
      }
      date={date}
      iconStyle={
        isAwarded
          ? { background: prizeColor, color: "#fff" }
          : { background: theme.palette.error.main, color: "#fff" }
      }
      icon={isAwarded ? <PrizeIconComponent /> : <EducationIconComponent />}
      contentStyle={{
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
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
