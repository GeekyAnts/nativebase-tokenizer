import sizes from '../theme/sizes';
import { getTokenFromValue } from '../utils/getTokenFromValue';
import { AbsoluteToNBProps } from './../types';
export default function(...props: AbsoluteToNBProps[]) {
  return getTokenFromValue(sizes, props[0], props[2]);
}
