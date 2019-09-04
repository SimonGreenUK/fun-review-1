const invert = (originalFunc) => {
  function newFunc(...args) {
    return !originalFunc(...args);
  }
  return newFunc;
};

const flip = () => {};

const rememberMe = () => {};

module.exports = { invert, flip, rememberMe };
