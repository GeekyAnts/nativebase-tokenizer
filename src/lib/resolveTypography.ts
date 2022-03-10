import { getTokenFromValue } from '../utils/getTokenFromValue';
import typography from './../theme/typography';
import { AbsoluteToNBProps } from './../types';
export default function(...props: AbsoluteToNBProps[]) {
  // @ts-ignore
  const typographyObject = typography[props[1]];
  return getTokenFromValue(typographyObject, props[0], props[2]);
}
