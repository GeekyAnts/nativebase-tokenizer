import resolveColors from '../lib/resolveColors';
import resolveSizing from '../lib/resolveSizing';
import resolveSpacing from '../lib/resolveSpacing';
import resolveTypography from '../lib/resolveTypography';

type ThemeMapProps = {
  [key: string]: (value: any) => any;
};

const themeMap: ThemeMapProps = {
  color: resolveColors,
  typography: resolveTypography,
  sizing: resolveSizing,
  spacing: resolveSpacing,
};
export default themeMap;
