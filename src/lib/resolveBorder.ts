import borders from '../theme/borders';
import { getTokenFromValue } from './getTokenFromValue';
export default function(value: any) {
  return getTokenFromValue(borders, value);
}
