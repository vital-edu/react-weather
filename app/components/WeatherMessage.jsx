import React from 'react';

function WeatherMessage ({temp, location}) {
  return (
    <h3>It's {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;