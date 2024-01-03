export const millisecondsToYears = (ms: number): number => {
  return Math.floor(ms / 1000 / 60 / 60 / 24 / 365);
};
