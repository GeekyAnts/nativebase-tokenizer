import { spacing } from '../theme/space';
import { getTokenFromValue } from './getTokenFromValue';
export default function(value: any) {
  return getTokenFromValue(spacing, value);
}
