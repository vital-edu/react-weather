import {IndexLink, Link} from 'react-router';

import React from 'react';

function Nav (props) {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
      <Link to="/about" activeClassName="active">About</Link>
      <Link to="/examples" activeClassName="active">Examples</Link>
    </nav>
  );
}

module.exports = Nav;
