import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '@mui/material/styles';

import { Button } from "@mui/material";
import { EducationIconComponent } from "../Icons/icons";

function EducationTimelineElement(props) {
  const { title, subtitle, description, date, url } = props;
  const theme = useTheme();
  let button;
  if (url) {
    button = (
      <div>
        <br />
        <Button
          target="_blank"
          href={url}
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
      className="vertical-timeline-element--education"
      date={date}
      iconStyle={{ background: theme.palette.error.main, color: "#fff" }}
      icon={<EducationIconComponent />}
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
