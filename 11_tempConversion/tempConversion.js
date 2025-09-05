const convertToCelsius = function(Tf) {
    let Tc=5*(Tf-32)/9
    return Number.isInteger(Tc)? Tc :Number(Tc.toFixed(1))
};

const convertToFahrenheit = function(Tc) {
  let Tf= (9*Tc)/5 +32
  return Number.isInteger(Tf)? Tf :Number(Tf.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
