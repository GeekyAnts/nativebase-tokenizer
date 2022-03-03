// @ts-ignore
export const getNearestTokenValue = (objectValues: any, searchValue: any) => {
  let newObtainedValue;
  const newHigherObtainedValue = Math.min.apply(
    Math,
    objectValues.filter(function(x: number) {
      return x >= searchValue;
    })
  );
  const newLowerObtainedValue = Math.max.apply(
    Math,
    objectValues.filter(function(x: number) {
      return x <= searchValue;
    })
  );
  if (
    newHigherObtainedValue - searchValue >=
    searchValue - newLowerObtainedValue
  ) {
    newObtainedValue = newLowerObtainedValue;
  } else {
    newObtainedValue = newHigherObtainedValue;
  }
  return newObtainedValue;
};
