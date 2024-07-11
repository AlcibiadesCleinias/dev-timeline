import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import EducationIcon from "@material-ui/icons/School";
import {Button} from "@mui/material";


function EducationTimelineElement(props) {
    const { title, subtitle, description, date, url } = props;
    let button;
    if (url) {
      button = <div><br/><Button target="_blank" href={url} variant={"contained"} color={"inherit"}>Learn More</Button></div>;
    } else {
      button = null;
    }
    return (
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={date}
        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
        icon={<EducationIcon/>}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>
          {description}
      </p>
            {button}
    </VerticalTimelineElement>
    )
}

export default EducationTimelineElement;