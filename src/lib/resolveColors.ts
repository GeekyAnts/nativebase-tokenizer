import colors from './../theme/colors';
// @ts-ignore
export default function(color: string, prop: any, config: any) {
  let mainColorObj: {
      [key: string]: string;
    },
    colorVal: any,
    nativeVal: any;
  Object.keys(colors).forEach(key => {
    // @ts-ignore
    mainColorObj = colors[key];
    if (typeof mainColorObj == 'string') {
      if (mainColorObj == color) {
        nativeVal = key;
      }
    } else if (typeof mainColorObj == 'object') {
      colorVal = Object.keys(mainColorObj).find(
        objKey => mainColorObj[objKey] === color
      );
      if (colorVal) {
        nativeVal = key + '.' + colorVal;
      }
    }
  });
  return nativeVal;
}
