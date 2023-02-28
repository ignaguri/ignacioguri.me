export const capitalize = (
  [first, ...rest]: string,
  lowerRest = false
): string =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));
