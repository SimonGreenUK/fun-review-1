const deepEntries = (entries) => {
  const resultArr = [];
  if (Object.keys(entries).length === 0) {
    return resultArr;
  }
  for (let key in entries) {
    if (entries[key] instanceof Object) {
      resultArr.push([key, deepEntries(entries[key])]);
    } else resultArr.push([key, entries[key]]);
  }
  return resultArr;
};

const deeplyEquals = () => {};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
