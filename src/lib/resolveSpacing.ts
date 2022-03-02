import { spacing } from '../theme/space';
// import { spacing } from 'https://cdn.jsdelivr.net/gh/GeekyAnts/NativeBase/src/theme/base/space.ts';
import { getTokenFromValue } from './getTokenFromValue';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  return getTokenFromValue(spacing, value, config);
}
