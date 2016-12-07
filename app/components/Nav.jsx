import {IndexLink, Link} from 'react-router';

import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/examples" activeClassName="active">Examples</Link>
      </nav>
    );
  }
}
