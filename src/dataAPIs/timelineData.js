import EducationJson from "./fixtures/educations.json";
import ProjectJson from "./fixtures/projects.json";
import WorksJson from "./fixtures/works.json";

// New helper function to format common fields
function formatCommonFields(entity) {
  const start = new Date(Number(entity.start));
  const end = entity.end ? new Date(Number(entity.end)) : null;
  
  return {
    title: entity.title,
    subtitle: entity.subtitle,
    description: entity.description,
    start,
    end,
    startTimestamp: start.getTime(),
  };
}

// Serialize to timeline format, order by start date.
// Assigne dataType to each entity.
export function timelineDataSorted() {
  
  // Format Education data.
  const educationJsonFormatted = EducationJson.map((entity) => {
    const isAwarded = entity.awards !== undefined && entity.awards !== null;

    return {
      ...formatCommonFields(entity),
      dataType: "education",
      publicUrl: entity.publicUrl ?? null,
      moreInfoUrl: entity.moreInfoUrl ?? null,
      isAwarded,
    };
  });
  
  // Format Projects data.
  const projectJsonFormatted = ProjectJson.map((entity) => {
    const isAwarded = entity.awards !== null;

    return {
      ...formatCommonFields(entity),
      dataType: "project",
      subtitle: isAwarded ? entity.awards : null,
      stack: entity.stack,
      additionalTags: entity.additionalTags ?? null,
      publicUrl: entity.publicUrl,
      moreInfoUrl: entity.moreInfoUrl,
      isAwarded,
    };
  });

  // Format Works data.
  const workJsonFormatted = WorksJson.map((entity) => ({
    ...formatCommonFields(entity),
    dataType: "work",
    stack: entity.stack,
    additionalTags: entity.additionalTags,
  }));

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
