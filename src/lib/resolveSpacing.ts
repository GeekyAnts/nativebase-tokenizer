import { spacing } from '../theme/space';
// import { spacing } from 'https://cdn.jsdelivr.net/gh/GeekyAnts/NativeBase/src/theme/base/space.ts';
import { getTokenFromValue } from '../utils/getTokenFromValue';
import { AbsoluteToNBProps } from './../types';
export default function(...props: AbsoluteToNBProps[]) {
  return getTokenFromValue(spacing, props[0], props[2]);
}
