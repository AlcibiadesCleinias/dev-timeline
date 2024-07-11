export function formatDateToString(date) {
    return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
}