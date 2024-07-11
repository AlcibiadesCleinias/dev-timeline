import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';

import {Box, Button, Link, Stack, styled, Tooltip} from "@mui/material";
import EducationTimelineElement from "../components/VerticalTimelineElements/Education";
import {timelineData} from "../dataAPIs/timelineData";
import ProjectTimelineElement from "../components/VerticalTimelineElements/Project";

function TimelineView() {

  const data = timelineData();

  const timelineDataHtml = data.map((timelineElement, index) => {
    if (timelineElement.dataType === "education") {
      return (
          <EducationTimelineElement
              key={index}
              {...timelineElement}
          />
      )
    } else if (timelineElement.dataType === "project") {
      return (
          <ProjectTimelineElement
              key={index}
              date={timelineElement.start}
              {...timelineElement}
          />
      )
    }
  })

  return (
      <div>
        <div>
          <h1 align={"center"} color={"primary"}>Projects & Study Overview</h1>
          <p className="text-white" align={"center"}>Hello Dear; below is sorted data fetched almost from <Link
              onClick={() => window.open("https://why-nft.notion.site/Projects-Overview-2de938bb0c4b476cb56229f620ac49e9", '_blank')}>Notion
            Database.</Link></p>
          <p className="text-white" align={"center"}>In order to efficiently query this information, I highly recommend
            utilizing the sources that I have provided</p>
        </div>

        <VerticalTimeline>
          {timelineDataHtml}
        </VerticalTimeline>
      </div>
  );
}

export default TimelineView;
