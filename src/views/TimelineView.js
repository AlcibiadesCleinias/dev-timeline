// TODO: decomposite view
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import StyledLink from "../components/StyledLink/StyledLink";
import EducationTimelineElement from "../components/VerticalTimelineElements/EducationTimeline";
import { timelineDataSorted } from "../dataAPIs/timelineData";
import ProjectTimelineElement from "../components/VerticalTimelineElements/ProjectTimeline";
import { useCallback, useState } from "react";
import { FloatingFilters } from "../components/VerticalTimelineElements/Filters";
import WorkTimelineElement from "../components/VerticalTimelineElements/WorkTimeline";
import VimTextBox from "../components/Vim/Vim";
import React from "react";
import { useTheme } from '@mui/material/styles';
import { settings } from "../settings/settings";

function TimelineView() {
  const data = timelineDataSorted();
  const theme = useTheme();

  const [showProjects, setShowProjects] = useState(true);
  const [showEducations, setShowEducations] = useState(true);
  const [showPrizes, setShowPrizes] = useState(true);
  const [showWorks, setShowWorks] = useState(true);

  const handleFilterToggle = useCallback((
    {targetState: targetState,
    setTargetStateMethod: setTargetStateMethod,
    isWorks: isWorks = false,
    isEducation: isEducation = false,
    isProjects: isProjects = false,
    isPrizes: isPrizes = false}
  ) => {
    return () => {
      const allActive = showProjects && showEducations && showPrizes && showWorks;
      const allInactive = !showProjects && !showEducations && !showPrizes && !showWorks;

      if (allActive) {
        // When all active and clicking one, disable others.
        if (isProjects) {
          setShowProjects(isProjects);
          setShowPrizes(false);
          setShowWorks(false);
          setShowEducations(false);
          return;
        }
        
        if (isEducation) {
          setShowEducations(isEducation);
          setShowProjects(false);
          setShowPrizes(false);
          setShowWorks(false);
          return;
        }

        if (isWorks) {
          setShowWorks(isWorks);
          setShowProjects(false);
          setShowPrizes(false);
          setShowEducations(false);
          return;
        }

        if (isPrizes) {
          setShowPrizes(isPrizes);
          setShowProjects(false);
          setShowEducations(false);
          setShowWorks(false);
          return;
        }
      }

      if (allInactive) {
        // When all inactive and clicking one, enable just that one
        setTargetStateMethod(true);
        return;
      }

      setTargetStateMethod(!targetState);
    };
  }, [showProjects, showEducations, showPrizes, showWorks]);

  const switchProjectsCallback = useCallback(
    handleFilterToggle({
      targetState: showProjects,
      setTargetStateMethod: setShowProjects,
      isProjects: true,
    }),
    [handleFilterToggle, showProjects]
  );

  const switchEducationsCallback = useCallback(
    handleFilterToggle({
      targetState: showEducations,
      setTargetStateMethod: setShowEducations,
      isEducation: true,
    }),
    [handleFilterToggle, showEducations]
  );

  const switchPrizesCallback = useCallback(
    handleFilterToggle({
      targetState: showPrizes,
      setTargetStateMethod: setShowPrizes,
      isPrizes: true,
    }),
    [handleFilterToggle, showPrizes]
  );

  const switchWorksCallback = useCallback(
    handleFilterToggle({
      targetState: showWorks,
      setTargetStateMethod: setShowWorks,
      isWorks: true,
    }),
    [handleFilterToggle, showWorks]
  );

  const timelineDataHtml = data.map((timelineElement, index) => {
    // Map serialized data to timeline elements.
    if (timelineElement.dataType === "education") {
      return <EducationTimelineElement key={index} {...timelineElement} />;
    } else if (timelineElement.dataType === "project") {
      return (
        <ProjectTimelineElement
          key={index}
          {...timelineElement}
        />
      );
    } else if (timelineElement.dataType === "work") {
      return <WorkTimelineElement key={index} {...timelineElement} />;
    }
  });

  return (
    <div style={{ 
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary 
    }}>
      <div>
        <h1 style={{ textAlign: "center" }} color="primary">
          Dev Timeline
        </h1>
        <p className="text-white" style={{ textAlign: "center" }}>
          Projects fetched from{" "}
          <StyledLink
            url={settings.NOTION_DATABASE_URL}
            text="Notion Database"
          />
          <br />
          Other information from the CV
        </p>
      </div>
      
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ThemeToggle />
      </div> */}

      <VerticalTimeline>
        {timelineDataHtml.map((element) => {
          if (!element) return null;
          
          if (element.props.dataType === "work" && showWorks) {
            return element;
          }
          if (
            (element.props.dataType === "project" && showProjects) ||
            (element.props.isAwarded && showPrizes)
          ) {
            return element;
          }
          if (
            (element.props.dataType === "education" && showEducations) ||
            (element.props.isAwarded && showPrizes)
          ) {
            return element;
          }
          return null;
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
