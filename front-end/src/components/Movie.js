import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <section id="movie">
        <div>
          <h3>Home Alone</h3>
          <span>Released: 16 Nov 1990 | Runtime: 103 min</span>
        </div>
        <div>
          <figure id="movie-poster"><img src="http://via.placeholder.com/270x410" /></figure>
          <div id="movie-details">
            <div>
              <h4>PG | Comedy, Family | 7.5/10</h4>
            </div>
            <div>
              <p>
              An eight-year-old troublemaker must protect his house 
              from a pair of burglars when he is accidentally left 
              home alone by his family during Christmas vacation.
              </p>
            </div>
            <div>
              <h5>Starring by: Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard</h5>
              <h5>Directed by: Chris Columbus</h5>
              <h5>Written by: John Hughes</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Movie;