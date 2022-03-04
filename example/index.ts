import { absoluteToNB } from './../src/index';
console.log(
  absoluteToNB('10px', 'borderTopWidth', {
    proximity: true,
    // increasing: true,
  })
);
