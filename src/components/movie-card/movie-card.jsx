import React from 'react';
import PropTypes from 'prop-types';


export class MovieCard extends React.Component {
    render() {
      const { movie, onMovieClick } = this.props;
  
      return (
        <div
          className="movie-card"
          onClick={() => {
            onMovieClick(movie);
          }}
        >
          {movie.Title}
        </div>
      );
    }
  }
  
  MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string,
        Description: PropTypes.string.isRequired,
        Featured: PropTypes.bool,
        Genre: PropTypes.array.isRequired,
        Director: PropTypes.array.isRequired
        }),
    onMovieClick: PropTypes.func.isRequired
  };
