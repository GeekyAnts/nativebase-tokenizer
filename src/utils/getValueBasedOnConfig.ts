import { getFilteredObjectValues } from './getFilteredObjectValues';
import { getNearestTokenValue } from './getNearestTokenValue';
import { getValueBasedOnProximityRange } from './getValueBasedOnProximityRange';
export const getValueBasedOnConfig = (
  object: object,
  value: any,
  config: any
) => {
  let newObtainedValue, objectValues;
  newObtainedValue = typeof value == 'number' ? Math.round(value) : value;
  let stringOfValue: string = newObtainedValue.toString(); //String of value
  let stringPartOfValue: string = newObtainedValue
    .toString()
    .replace(/[0-9.]/g, ''); //String part like px,%,em etc...
  let searchValue: number = Number(
    newObtainedValue.toString().replace(/[^0-9.]/g, '')
  ); //Get number only part as number
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
    const mergedValue =
      stringPartOfValue == '-'
        ? stringOfValue
        : newObtainedValue + stringPartOfValue;
    return mergedValue;
  }
  return newObtainedValue;
};
