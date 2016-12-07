import Nav from 'Nav';
import React from 'react';

function Main (props) {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  )
}

module.exports = Main;