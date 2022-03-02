import typography from './../theme/typography';
// @ts-ignore
export default function(value: any, prop: any, config: any) {
  let mainColorObj: {
      [key: string]: string;
    },
    colorVal: any,
    nativeVal: any;
  Object.keys(typography).forEach(key => {
    // @ts-ignore
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
