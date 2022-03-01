export const getTokenFromValue = (object: object, value: any) => {
  const tokenFromValue = Object.keys(object).find(
    (objKey: any) => object[objKey] === value
  );
  return tokenFromValue;
};
