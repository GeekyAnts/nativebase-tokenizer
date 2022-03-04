import { getFilteredObjectValues } from './getFilteredObjectValues';
import { getNearestTokenValue } from './getNearestTokenValue';
import { getValueBasedOnProximityRange } from './getValueBasedOnProximityRange';
export const getValueBasedOnConfig = (
  object: object,
  value: any,
  config: any
) => {
  let newObtainedValue, objectValues;
  let stringOfValue: string = value.toString(); //String of value
  let stringPartOfValue: string = value.toString().replace(/[0-9.]/g, ''); //String part like px,%,em etc...
  let searchValue: number = Number(value.toString().replace(/[^0-9.]/g, '')); //Get number only part as number
  newObtainedValue = searchValue;
  let completeObjectValues = Object.values(object);
  objectValues = getFilteredObjectValues(stringOfValue, completeObjectValues);
  if (config.proximityRange) {
    newObtainedValue = getValueBasedOnProximityRange(
      objectValues,
      searchValue,
      config
    );
  } else {
    if (config.increasing === true) {
      newObtainedValue = Math.min.apply(
        Math,
        objectValues.filter(function(x: number) {
          return x >= searchValue;
        })
      );
    } else if (config.increasing === false) {
      newObtainedValue = Math.max.apply(
        Math,
        objectValues.filter(function(x: number) {
          return x <= searchValue;
        })
      );
    } else {
      newObtainedValue = getNearestTokenValue(objectValues, searchValue);
    }
  }
  if (stringPartOfValue) {
    return newObtainedValue + stringPartOfValue;
  }
  return newObtainedValue;
};
