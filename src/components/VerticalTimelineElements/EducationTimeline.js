import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '@mui/material/styles';

import EducationIcon from "@material-ui/icons/School";
import { Button } from "@mui/material";

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
      icon={<EducationIcon />}
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
