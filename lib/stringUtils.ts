export const capitalize = (str: string, lowerRest = false): string => {
  if (!str) return str;
  const [first, ...rest] = str;
  return (
    first.toUpperCase() +
    (lowerRest ? rest.join("").toLowerCase() : rest.join(""))
  );
};
