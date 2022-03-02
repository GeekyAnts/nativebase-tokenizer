import opacity from '../theme/opacity';
import { getTokenFromValue } from './getTokenFromValue';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  return getTokenFromValue(opacity, value, config);
}
