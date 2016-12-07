import React from 'react';

export default class WeatherMessage extends React.Component {
  render() {
    var {location, temp} = this.props;
    return (
      <h3>It's {temp} in {location}.</h3>
    )
  }
}