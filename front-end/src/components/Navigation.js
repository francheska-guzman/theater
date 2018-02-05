import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/theater">Home</NavLink>
        <NavLink to="/theater/movie">Movie</NavLink>
      </nav>
    );
  }
}

export default Navigation;