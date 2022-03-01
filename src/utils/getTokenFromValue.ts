import spacing from '../theme/sizes';
import fontSize from '../theme/fontSize';
export const getTokenFromValue = (propKey: number) => {
  const token: object = isNaN(propKey) ? fontSize : spacing;
  const tokenFromValue = Object.keys(token).find(
    (objKey: any) => token[objKey] === propKey
  );
  return tokenFromValue;
};
