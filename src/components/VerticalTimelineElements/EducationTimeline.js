import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '@mui/material/styles';

import { Button } from "@mui/material";
import { EducationIconComponent, PrizeIconComponent } from "../Icons/icons";
import { prettifyDate } from "./utils";
import { prizeColor } from "../Constants/colors";

function EducationTimelineElement(props) {
  const { title, subtitle, description, publicUrl, start, end, isAwarded } = props;
  const date = prettifyDate(start, end);
  const theme = useTheme();

  let button;
  if (publicUrl) {
    button = (
      <div>
        <br />
        <Button
          target="_blank"
          href={publicUrl}
          variant={"contained"}
          color={"inherit"}
        >
          Learn More
        </Button>
      </div>
    );
  } else {
    button = null;
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
      {button}
    </VerticalTimelineElement>
  );
}

export default EducationTimelineElement;
