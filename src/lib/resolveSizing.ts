import sizes from '../theme/sizes';
import { getTokenFromValue } from './getTokenFromValue';
export default function(value: any) {
  return getTokenFromValue(sizes, value);
}
