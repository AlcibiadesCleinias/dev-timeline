/**
 * Formats a date object into a string with month and year
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string (e.g., "Jan 2024")
 */
export function formatDateToString(date) {
  return `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
}

/**
 * Takes a multi-line description and returns first line with ellipsis
 * @param {string} description - The full description text
 * @returns {string} Truncated description with ellipsis
 */
export function prettifyDescription(description) {
  const s = description.split("\n")[0];
  return `${s} ...`;
}

/**
 * Creates a date range string from start and end dates
 * @param {Date} start - Start date string
 * @param {Date} end - End date string (optional)
 * @returns {string} Formatted date range
 */
export function prettifyDate(start, end) {
  return end
    ? `${formatDateToString(start)} - ${formatDateToString(end)}`
    : `${formatDateToString(start)}`;
}

/**
 * Calculates duration between two dates in months
 * @param {Date} start - Start datetime
 * @param {Date} end - End datetime (optional)
 * @returns {string} Duration in months or empty string if no end datetime
 */
export function calculateDuration(start, end) {
  return end
    ? `${(end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth() + 1)} months`
    : "";
}

/**
 * Prettifies a date range with duration
 * @param {Date} start - Start datetime
 * @param {Date} end - End datetime optional
 * @returns {string} Date range with duration
 */
export function prettifyWithDuration(start, end) {
  let date = prettifyDate(start, end);
  const duration = calculateDuration(start, end);
  if (duration !== "") {
    date = `${date} (${duration})`;
  }
  return date;
}