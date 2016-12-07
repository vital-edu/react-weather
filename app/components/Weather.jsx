import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Miami',
      temp: 88,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    this.setState({
      location: location,
      temp: 21,
    });
  }

  render() {
    let {location, temp} = this.state;

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    )
  }
}
