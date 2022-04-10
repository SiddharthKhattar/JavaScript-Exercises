const ftoc = function(fahrenheit) {
  var celsius=0;
  celsius = ((fahrenheit - 32) * 5/9 )
  var rounded = Math.round(celsius * 10) / 10
  return rounded;
};

const ctof = function(celsius) {
  var fahrenheit=0;
  fahrenheit= (celsius * (9/5) + 32 ) 
  var rounded = Math.round(fahrenheit * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
