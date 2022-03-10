import borders from '../theme/borders';
import { getTokenFromValue } from '../utils/getTokenFromValue';
import { AbsoluteToNBProps } from './../types';
export default function(...props: AbsoluteToNBProps[]) {
  return getTokenFromValue(borders, props[0], props[2]);
}
