// @ts-ignore
export const resolveError = e => {
  if (e instanceof TypeError) {
    if (e.message == 'resolver is not a function') {
      return 'Incorrect prop value';
    }
  } else {
    throw e;
  }
};
