import radii from '../theme/radius';
import { getTokenFromValue } from './getTokenFromValue';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  return getTokenFromValue(radii, value, config);
}
