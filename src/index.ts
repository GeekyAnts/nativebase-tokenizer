import themeMap from './config/themeMap';
import propMap from './config/propMap';

export const absoluteToNB = (value: any, prop: string) => {
  const name = propMap[prop];
  const resolver = themeMap[name];
  return resolver(value);
};
