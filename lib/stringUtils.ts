// @ts-expect-error TS(7031): Binding element 'first' implicitly has an 'any' ty... Remove this comment to see the full error message
export const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
