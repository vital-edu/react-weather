import React from 'react';

export default class WeatherForm extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <h1>Get Weather</h1>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <div>
            <input ref="location" type="text" placeholder="Enter city name"></input>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
}
