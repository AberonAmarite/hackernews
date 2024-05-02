export function getHoursAgo(time: number): number {
  const currentTime = Math.floor(Date.now() / 1000);
  return Math.floor((currentTime - time) / 3600);
}
