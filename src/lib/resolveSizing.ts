import sizes from '../theme/sizes';
import { getTokenFromValue } from './getTokenFromValue';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  return getTokenFromValue(sizes, value, config);
}
