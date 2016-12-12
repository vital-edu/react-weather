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
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <input ref="location" type="search" placeholder="Search weather by city" label="city name to search"></input>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}
