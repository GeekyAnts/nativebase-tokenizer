import { getValueBasedOnConfig } from './getValueBasedOnConfig';
// @ts-ignore
export const getTokenFromValue = (object: object, value: any, config: any) => {
  const tokenFromValue = Object.keys(object).find(
    // @ts-ignore
    objKey => object[objKey] === value
  );
  if (!tokenFromValue) {
    if (config && config.proximity) {
      return getTokenFromValue(
        object,
        getValueBasedOnConfig(object, value, config),
        {}
      );
    } else {
      return value;
    }
  }
  return tokenFromValue;
};
