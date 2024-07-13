export function formatDateToString(date) {
  return `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`;
}

export function prettifyDescription(description) {
  const s = description.split("\n")[0];
  return `${s} ...`;
}
