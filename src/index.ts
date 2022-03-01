import themeMap from './config/themeMap';

export const absoluteToNB = (value: any, name: string) => {
  const resolver = themeMap[name];
  return resolver(value);
};
