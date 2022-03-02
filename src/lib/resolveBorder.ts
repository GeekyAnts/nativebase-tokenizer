import borders from '../theme/borders';
import { getTokenFromValue } from './getTokenFromValue';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  return getTokenFromValue(borders, value, config);
}
