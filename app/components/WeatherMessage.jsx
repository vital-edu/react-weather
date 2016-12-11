import React from 'react';

function WeatherMessage ({temp, location}) {
  return (
    <p className="text-center">It's {temp} in {location}.</p>
  )
}

module.exports = WeatherMessage;