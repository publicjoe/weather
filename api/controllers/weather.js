'use strict';

const weather = require('weather-js');

module.exports = {
  getWeather: getWeather
};

function getWeather (req, res, next) {
  // Code necessary to consume the Weather API and respond
  weather.find({
    search: req.swagger.params.location.value,
    degreeType: req.swagger.params.unit.value
  }, function(err, result) {
    if (err) {
      console.log(err.stack);
      return next(err.message);
    }

    //result = result[0];

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result[0] || {}, null, 2));
  });
};