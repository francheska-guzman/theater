import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <section id="movie">
         <div className="wrapper">
	       <div>
	          <h3>Home Alone</h3>
	          <span>Released: 16 Nov 1990 | Runtime: 103 min</span>
	       </div>
	       <div id="movie-result">
	          <figure id="movie-poster"><img alt="Poster" src="http://via.placeholder.com/270x410" /></figure>
	          <div id="movie-details">
	              <div id="movie-audience">
	                  <h4>PG | Comedy, Family | 7.5/10</h4>
	              </div>
	              <div id="movie-information">
	                  <p>
	                  An eight-year-old troublemaker must protect his house 
	                  from a pair of burglars when he is accidentally left 
	                  home alone by his family during Christmas vacation.
	                  </p>
	                  <p>Starring by: Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard</p>
	                  <p>Directed by: Chris Columbus</p>
	                  <p>Written by: John Hughes</p>
	              </div>
	          </div>
	       </div>
         </div>
      </section>
    );
  }
}

export default Movie;