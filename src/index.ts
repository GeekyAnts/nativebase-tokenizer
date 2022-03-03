import themeMap from './config/themeMap';
import propMap from './config/propMap';
import propNameMap from './config/propNameMap';

interface configLayout {
  proximity?: boolean;
  proximityRange?: number;
  increasing?: boolean;
}

export const absoluteToNB = (
  value: any,
  prop: string,
  config?: configLayout
) => {
  const name = propMap[prop] ? propMap[prop] : prop;
  const PropMapped = propNameMap[prop] ? propNameMap[prop] : prop;
  const resolver = themeMap[name];
  return resolver(value, PropMapped, config);
};
