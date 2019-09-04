const invert = (originalFunc) => {
  function newFunc(...args) {
    return !originalFunc(...args);
  }
  return newFunc;
};

const flip = (originalFunc) => {
  function newFunc(...args) {
    return originalFunc(...args.reverse());
  }
  return newFunc;
};

const rememberMe = () => {};

module.exports = { invert, flip, rememberMe };
