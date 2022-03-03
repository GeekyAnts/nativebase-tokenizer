import { getTokenFromValue } from './getTokenFromValue';
import typography from './../theme/typography';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  // @ts-ignore
  const typographyObject = typography[prop];
  return getTokenFromValue(typographyObject, value, config);
}
