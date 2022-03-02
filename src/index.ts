import themeMap from './config/themeMap';
import propMap from './config/propMap';

interface configLayout {
  proximity?: boolean;
  proximityValue?: number;
  increasing?: boolean;
}

export const absoluteToNB = (
  value: any,
  prop: string,
  config?: configLayout
) => {
  const name = propMap[prop] ? propMap[prop] : prop;
  const resolver = themeMap[name];
  return resolver(value, prop, config);
};
