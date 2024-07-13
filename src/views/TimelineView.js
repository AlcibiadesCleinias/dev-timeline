import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Link } from "@mui/material";
import EducationTimelineElement from "../components/VerticalTimelineElements/EducationTimeline";
import { timelineData } from "../dataAPIs/timelineData";
import ProjectTimelineElement from "../components/VerticalTimelineElements/ProjectTimeline";
import { useCallback, useState } from "react";
import { FloatingFilters } from "../components/VerticalTimelineElements/Filters";
import WorkTimelineElement from "../components/VerticalTimelineElements/WorkTimeline";
import VimTextBox from "../components/Vim/Vim";

function TimelineView() {
  const data = timelineData();

  const [showProjects, setShowProjects] = useState(true);
  const [showEducations, setShowEducations] = useState(true);
  const [showPrizes, setShowPrizes] = useState(true);
  const [showWorks, setWorks] = useState(true);

  // const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])
  const switchProjectsCallback = useCallback(
    () => setShowProjects((prevShow) => !prevShow),
    [],
  );
  const switchEducationsCallback = useCallback(
    () => setShowEducations((prevShow) => !prevShow),
    [],
  );
  const switchPrizesCallback = useCallback(
    () => setShowPrizes((prevShow) => !prevShow),
    [],
  );
  const switchWorksCallback = useCallback(
    () => setWorks((prevShow) => !prevShow),
    [],
  );

  const timelineDataHtml = data.map((timelineElement, index) => {
    if (timelineElement.dataType === "education") {
      return <EducationTimelineElement key={index} {...timelineElement} />;
    } else if (timelineElement.dataType === "project") {
      return (
        <ProjectTimelineElement
          key={index}
          date={timelineElement.start}
          {...timelineElement}
        />
      );
    } else if (timelineElement.dataType === "work") {
      return <WorkTimelineElement key={index} {...timelineElement} />;
    }
  });

  return (
    <div>
      <div>
        <h1 align={"center"} color={"primary"}>
          Dev Timeline
        </h1>
        <p className="text-white" align={"center"}>
          Projects fetched from{" "}
          <Link
            onClick={() =>
              window.open(
                "https://why-nft.notion.site/Projects-Overview-2de938bb0c4b476cb56229f620ac49e9",
                "_blank",
              )
            }
          >
            Notion Database
          </Link>
          <br/>
          Other information from the CV
        </p>
      </div>

      <VerticalTimeline>
        {timelineDataHtml.map((element, _) => {
          if (element.props.dataType === "work" && showWorks) {
            return element;
          }
          if (
            element.props.dataType === "project" &&
            showProjects &&
            (!element.props.isAwarded || showPrizes)
          ) {
            return element;
          }
          if (
            element.props.dataType === "project" &&
            showPrizes &&
            element.props.isAwarded
          ) {
            return element;
          }
          if (element.props.dataType === "education" && showEducations) {
            return element;
          }
        })}
      </VerticalTimeline>
      {!showWorks && !showProjects && !showEducations && !showPrizes ? (
        <VimTextBox
          content={
            '"""Web3 is simple they said."""' +
            "\n" +
            "\n" +
            "from secrets import token_bytes\n" +
            "from coincurve import PublicKey\n" +
            "from sha3 import keccak_256\n" +
            "private_key = keccak_256(token_bytes(32)).digest()\n" +
            "public_key = PublicKey.from_valid_secret(private_key).format(compressed=False)[1:]\n" +
            "\n" +
            "# Ref to https://ethereum.github.io/yellowpaper/paper.pdf" +
            "\n" +
            "addr = keccak_256(public_key).digest()[-20:]\n" +
            "\n" +
            "print('private_key:', private_key.hex())\n" +
            "print('eth addr: 0x' + addr.hex())"
          }
          language="python"
        />
      ) : null}
      <FloatingFilters
        switchProjects={switchProjectsCallback}
        switchEducations={switchEducationsCallback}
        switchPrizes={switchPrizesCallback}
        showProjects={showProjects}
        showEducations={showEducations}
        showPrizes={showPrizes}
        showWorks={showWorks}
        switchWorks={switchWorksCallback}
      />
    </div>
  );
}

export default TimelineView;
