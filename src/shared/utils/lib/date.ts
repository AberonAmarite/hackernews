export function getTimeAgo(time: number): string {
  const currentTime = Math.floor(Date.now() / 1000);
  const secondsAgo = currentTime - time;

  if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else {
    const date = new Date(time * 1000);
    const currentDate = new Date();
    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      // If the date is today
      return `Today at ${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${date.toLocaleDateString()} at ${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    }
  }
}
