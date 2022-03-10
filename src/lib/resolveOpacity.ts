import opacity from '../theme/opacity';
import { getTokenFromValue } from '../utils/getTokenFromValue';
import { AbsoluteToNBProps } from './../types';
export default function(...props: AbsoluteToNBProps[]) {
  return getTokenFromValue(opacity, props[0], props[2]);
}
