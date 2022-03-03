import { getFilteredObjectValues } from './getFilteredObjectValues';
import { getNearestTokenValue } from './getNearestTokenValue';
// @ts-ignore
export const getValueBasedOnConfig = (
  object: object,
  value: any,
  config: any
) => {
  let newObtainedValue, objectValues;
  let newValue: number;
  let stringOfValue: string = value.toString();
  let stringPartOfValue: string = value.toString().replace(/[0-9.]/g, '');
  let searchValue: number = Number(value.toString().replace(/[^0-9.]/g, ''));
  newObtainedValue = searchValue;
  let completeObjectValues = Object.values(object);
  objectValues = getFilteredObjectValues(stringOfValue, completeObjectValues);

  if (config.proximityRange) {
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
      // if (objectValues.includes(newValue)) {
      //   newObtainedValue = newValue;
      //   break;
      // }
    }
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
