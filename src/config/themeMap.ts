import resolveColors from '../lib/resolveColors';
import resolveSizing from '../lib/resolveSizing';
import resolveSpacing from '../lib/resolveSpacing';
import resolveTypography from '../lib/resolveTypography';
import resolveBorder from '../lib/resolveBorder';
import resolveOpacity from '../lib/resolveOpacity';
import resolveRadius from '../lib/resolveRadius';

// type ThemeMapProps = {
//   [key: string]: (value: any) => any;
// };
interface ThemeMapProps {
  [key: string]: any;
}

const themeMap: ThemeMapProps = {
  color: resolveColors,
  typography: resolveTypography,
  sizing: resolveSizing,
  spacing: resolveSpacing,
  border: resolveBorder,
  opacity: resolveOpacity,
  radius: resolveRadius,
};
export default themeMap;
