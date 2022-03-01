import colors from './../theme/colors';
export default function(color: string) {
  let mainColorObj: {
      [key: string]: string;
    },
    colorVal: any,
    nativeVal: any;
  Object.keys(colors).forEach(key => {
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
