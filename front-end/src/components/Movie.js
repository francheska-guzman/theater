import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <section id="movie">
         <div className="wrapper">
	       <div id="movie-header">
	          <h3>Home Alone</h3>
	          <span id="movie-date-time">
							Released: 16 Nov 1990
							<span className="highlight-gold"> | </span>
							Runtime: 103 min
						</span>
	       </div>
	       <div id="movie-result">
	          <figure id="movie-poster"><img alt="Poster" src="http://via.placeholder.com/270x410" /></figure>
	          <div id="movie-details">
	              <div id="movie-audience">
	                  <h4>
											PG
											<span className="highlight-gold"> | </span>
											Comedy, Family
											<span className="highlight-gold"> | </span>
											7.5/10
										</h4>
	              </div>
	              <div id="movie-about">
	                  <p>
	                  An eight-year-old troublemaker must protect his house 
	                  from a pair of burglars when he is accidentally left 
	                  home alone by his family during Christmas vacation.
	                  </p>
	                  <p><span className="highlight-gold">Starring by:</span> Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard</p>
	                  <p><span className="highlight-gold">Directed by:</span> Chris Columbus</p>
	                  <p><span className="highlight-gold">Written by:</span> John Hughes</p>
	              </div>
	          </div>
	       </div>
         </div>
      </section>
    );
  }
}

export default Movie;