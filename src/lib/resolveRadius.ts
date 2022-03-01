import radii from '../theme/radius';
import { getTokenFromValue } from './getTokenFromValue';
export default function(value: any) {
  return getTokenFromValue(radii, value);
}
