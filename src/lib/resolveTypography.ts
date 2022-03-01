import typography from './../theme/typography';
export default function(value: any) {
  let mainColorObj: {
      [key: string]: string;
    },
    colorVal: any,
    nativeVal: any;
  Object.keys(typography).forEach(key => {
    mainColorObj = typography[key];
    if (typeof mainColorObj == 'object') {
      colorVal = Object.keys(mainColorObj).find(
        objKey => mainColorObj[objKey] === value
      );
      if (colorVal) {
        nativeVal = colorVal;
      }
    }
  });
  return nativeVal;
}
