import EducationJson from "./fixtures/educations.json";
import ProjectJson from "./fixtures/projects.json";
import WorksJson from "./fixtures/works.json";
import { formatDateToString } from "../components/VerticalTimelineElements/utils";

function removeEmojis(string) {
  return string.replace("\\ud83d\\ude00", "").replace("\\ud83d\\ude00", "");
}

// Serialize to timeline format.
export function timelineData() {
  // Format Education data.
  const educationJsonFormatted = EducationJson.map((entity) => {
    const start = new Date(Number(entity.start));
    const end = entity.end ? new Date(Number(entity.end)) : null;
    return {
      dataType: "education",
      title: entity.title,
      subtitle: entity.subtitle,
      description: entity.description,
      date: end ? `${formatDateToString(start)} - ${formatDateToString(end)}` : `${formatDateToString(start)}`,
      url: entity.url,
      startTimestamp: start.getTime(),
    };
  });
  // Format Project data.
  const projectJsonFormatted = ProjectJson.map((projectJson) => {
    const start = new Date(Number(projectJson.start));
    return {
      dataType: "project",
      title: projectJson.title,
      subtitle: projectJson.subtitle,
      start: `${formatDateToString(start)}`,
      description: projectJson.description,
      stack: projectJson.stack,
      additionalTags: projectJson.additionalTags.map((data) =>
        removeEmojis(data),
      ),
      publicUrl: projectJson.publicUrl,
      moreInfoUrl: projectJson.moreInfoUrl,
      startTimestamp: start.getTime(),
      isAwarded: projectJson.awards !== null,
    };
  });

  // Format Works data.
  const workJsonFormatted = WorksJson.map((entity) => {
    const start = new Date(Number(entity.start));
    const end = entity.end ? new Date(Number(entity.end)) : null;
    const durationMonthsStr = end
      ? ` (${(end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth() + 1)} months)`
      : "";
    return {
      dataType: "work",
      title: entity.title,
      subtitle: entity.subtitle,
      date: `${formatDateToString(start)}` + durationMonthsStr,
      description: entity.description,
      stack: entity.stack,
      additionalTags: entity.additionalTags.map((data) => removeEmojis(data)),
      startTimestamp: start.getTime(),
    };
  });

  // Order data and return.
  return [
    ...educationJsonFormatted,
    ...projectJsonFormatted,
    ...workJsonFormatted,
  ].sort((a, b) => {
    return (
      new Date(Number(b.startTimestamp)) - new Date(Number(a.startTimestamp))
    );
  });
}
