import ErrorModal from 'ErrorModal';
import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errorMessage: undefined,
    };
  }

  handleSearch(location) {
    let thisComponent = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      thisComponent.setState({
        location,
        temp: temp,
        isLoading: false,
      });
    }).catch((err) => {
      thisComponent.setState({
        isLoading: false,
        errorMessage: err.message,
      });
    });
  }

  render() {
    let {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <p className="text-center">Fetching weather...</p>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={(e) => this.handleSearch(e)}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}
