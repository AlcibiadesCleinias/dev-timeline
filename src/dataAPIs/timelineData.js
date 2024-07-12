import EducationJson from "./fixtures/educations.json";
import ProjectJson from "./fixtures/projects.json";
import {formatDateToString} from "../components/VerticalTimelineElements/utils";

function removeEmojis (string) {
  return string.replace("\\ud83d\\ude00", '').replace("\\ud83d\\ude00", '');
}

function prettifyDescription(description) {
    const s = description.split("\\n")[0]
    return `${s} ...`
}

// Serialize to timeline format.
// TODO: add filters.
export function timelineData(filters) {
    // Format Education data.
    const educationJsonFormatted = EducationJson.map((education) => {
        const start = new Date(Number(education.start))
        const end = new Date(Number(education.end))
        return {
            dataType: "education",
            title: education.title,
            subtitle: education.subtitle,
            description: education.description,
            date: `${formatDateToString(start)} - ${formatDateToString(end)}`,
            url: education.url,
            startTimestamp: start.getTime(),
        }
    })
    // Format Project data.
    const projectJsonFormatted = ProjectJson.map((projectJson) => {
        const start = new Date(Number(projectJson.start))
        return {
            dataType: "project",
            title: projectJson.title,
            subtitle: projectJson.subtitle,
            start: `${formatDateToString(start)}`,
            description: prettifyDescription(projectJson.description),
            stack: projectJson.stack,
            additionalTags: projectJson.additionalTags.map((data) => removeEmojis(data)),
            publicUrl: projectJson.publicUrl,
            moreInfoUrl: projectJson.moreInfoUrl,
            startTimestamp: start.getTime(),
            isAwarded: projectJson.awards !== null
        }
    })

    // Order data and return.
    return [...educationJsonFormatted, ...projectJsonFormatted].sort((a, b) => {
        return new Date(Number(b.startTimestamp)) - new Date(Number(a.startTimestamp));
    })
}