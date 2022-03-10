import themeMap from './config/themeMap';
import propMap from './config/propMap';
import propNameMap from './config/propNameMap';
import { resolveError } from './lib/resolveError';
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
  try {
    return resolver(value, PropMapped, config);
  } catch (e) {
    return resolveError(e);
  }
};
