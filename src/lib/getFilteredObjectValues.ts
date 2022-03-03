// @ts-ignore
export const getFilteredObjectValues = (
  stringOfValue: string,
  completeObjectValues: any
) => {
  let objectValues;
  const containsPercentage = stringOfValue.includes('%');
  const containsPixel = stringOfValue.includes('px');
  const containsEm = stringOfValue.includes('em');
  if (containsPercentage || containsPixel || containsEm) {
    objectValues = completeObjectValues.reduce(function(
      filtered: any,
      option: any
    ) {
      const containsPercentageInString = option.toString().includes('%');
      if (
        containsPercentage
          ? containsPercentageInString
          : !containsPercentageInString
      ) {
        var someNewValue = Number(option.toString().replace(/[^0-9.]/g, ''));
        filtered.push(someNewValue);
      }
      return filtered;
    },
    []);
  } else {
    objectValues = completeObjectValues;
  }
  return objectValues;
};
