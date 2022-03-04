export const getValueBasedOnProximityRange = (
  objectValues: any,
  searchValue: any,
  config: any
) => {
  let newObtainedValue;
  let newValue: number;
  for (let i = 1; i <= config.proximityRange; i++) {
    if (config.increasing) {
      newValue = searchValue + i;
    } else {
      newValue = searchValue - i;
    }
    let foundValue = objectValues.find(function(x: any) {
      return parseInt(x) == newValue;
    });
    if (foundValue) {
      newObtainedValue = foundValue;
      break;
    }
  }
  return newObtainedValue;
};
