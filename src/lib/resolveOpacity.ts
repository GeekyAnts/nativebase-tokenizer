import opacity from '../theme/opacity';
import { getTokenFromValue } from './getTokenFromValue';
export default function(value: any) {
  return getTokenFromValue(opacity, value);
}
