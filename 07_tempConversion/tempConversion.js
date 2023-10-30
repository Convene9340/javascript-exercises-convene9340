const convertToCelsius = function(temparature) {
  var stringTemperature
  stringTemperature = (temparature-32) * (5/9);
  return +stringTemperature.toFixed(1);
};

const convertToFahrenheit = function(temparature) {
  var stringTemperature
  stringTemperature = temparature * (9/5) + 32
  return +stringTemperature.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
