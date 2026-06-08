const sumAll = function (lower, upper) {
  let sum = 0;
  let temp = 0;
  if (lower > upper) {
    temp = lower;
    lower = upper;
    upper = temp;
  } else if (lower < 0 || upper < 0) {
    return "ERROR";
  } else if (!Number.isInteger(lower) || !Number.isInteger(upper)) {
    return "ERROR";
  } else if (typeof lower !== "number" || typeof upper !== "number") {
    return "ERROR";
  }
  for (let i = lower; i <= upper; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
