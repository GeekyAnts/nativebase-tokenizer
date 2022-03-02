// @ts-ignore
export const getValueBasedOnConfig = (
  object: object,
  value: any,
  config: any
) => {
  let newObtainedValue, newValue;
  newObtainedValue = value;
  const objectValues = Object.values(object);
  if (config.proximityValue) {
    for (let i = 1; i <= config.proximityValue; i++) {
      if (config.increasing) {
        newValue = value + i;
      } else {
        newValue = value - i;
      }
      if (objectValues.includes(newValue)) {
        newObtainedValue = newValue;
        break;
      }
    }
  } else {
    if (config.increasing) {
      newObtainedValue = Math.min.apply(
        Math,
        objectValues.filter(function(x) {
          return x >= value;
        })
      );
    } else {
      newObtainedValue = Math.max.apply(
        Math,
        objectValues.filter(function(x) {
          return x <= value;
        })
      );
    }
  }
  return newObtainedValue;
};
