import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <span id="nav-name">Theater</span>
        <nav>
          <NavLink to="/theater">Home</NavLink>
          <NavLink to="/theater/movie">Movie</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;