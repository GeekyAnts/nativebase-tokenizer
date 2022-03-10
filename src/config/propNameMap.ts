interface MyObjLayout {
  [key: string]: string;
}

const propNameMap: MyObjLayout = {
  letterSpacing: 'letterSpacings',
  lineHeight: 'lineHeights',
  fontConfig: 'fontConfig',
  fontWeight: 'fontWeights',
  font: 'fonts',
  fontSize: 'fontSizes',
};

export default propNameMap;
