const convertToCelsius = function (fahrenheit) {
  const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  return parseFloat(celsius);
};

const convertToFahrenheit = function (celsius) {
  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);
  return parseFloat(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
