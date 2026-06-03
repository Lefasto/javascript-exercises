const removeFromArray = function (array, ...values) {
  const newArray = [];

  for (item of array) {
    if (!values.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
