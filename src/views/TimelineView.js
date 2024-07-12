import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';
import EducationIcon from '@material-ui/icons/School';

import {Box, Button, Link, Stack, styled, Tooltip} from "@mui/material";
import EducationTimelineElement from "../components/VerticalTimelineElements/EducationTimeline";
import {timelineData} from "../dataAPIs/timelineData";
import ProjectTimelineElement from "../components/VerticalTimelineElements/ProjectTimeline";
import {useCallback, useState} from "react";
import {FloatingFilters} from "../components/VerticalTimelineElements/Filters";

function TimelineView() {
  const data = timelineData();

  const [showProjects, setShowProjects ] = useState(true);
  const [showEducations, setShowEducations ] = useState(true);
  const [showPrizes, setShowPrizes ] = useState(true);

  // const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])
    const switchProjectsCallback = useCallback(() => setShowProjects(prevShow => !prevShow),[])
    const switchEducationsCallback = useCallback(() => setShowEducations(prevShow => !prevShow),[])
    const switchPrizesCallback = useCallback(() => setShowPrizes(prevShow => !prevShow),[])
    console.log('showPrizes', showPrizes)

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
          <h1 align={"center"} color={"primary"}>Projects & Study Timeline</h1>
          <p className="text-white" align={"center"}>Hello Dear; below is sorted data fetched almost from <Link
              onClick={() => window.open("https://why-nft.notion.site/Projects-Overview-2de938bb0c4b476cb56229f620ac49e9", '_blank')}>Notion
            Database</Link></p>
          <p className="text-white" align={"center"} style={{fontStyle: 'italic'}}>In order to efficiently query this information, I highly recommend
            utilizing the sources that I have provided</p>
        </div>

        <VerticalTimeline>
          {timelineDataHtml.map((element, index) => {
            if (element.props.dataType === "project" && showProjects && (!element.props.isAwarded || showPrizes)) {
              return element
            }
            if (element.props.dataType === "project" && showPrizes && element.props.isAwarded) {
              return element
            }
            if (element.props.dataType === "education" && showEducations) {
              return element
            }
          })}
        </VerticalTimeline>

      <FloatingFilters
          switchProjects={switchProjectsCallback} switchEducations={switchEducationsCallback} switchPrizes={switchPrizesCallback}
            showProjects={showProjects} showEducations={showEducations} showPrizes={showPrizes}
      />
      </div>
  );
}

export default TimelineView;
