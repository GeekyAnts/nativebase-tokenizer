import radii from '../theme/radius';
import { getTokenFromValue } from '../utils/getTokenFromValue';
import { AbsoluteToNBProps } from './../types';
export default function(...props: AbsoluteToNBProps[]) {
  return getTokenFromValue(radii, props[0], props[2]);
}
