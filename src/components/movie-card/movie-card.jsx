import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
      const { movie, onMovieClick } = this.props;
  
      return (
        <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
      );
    }
  }
  
  MovieCard.propTypes = {
    movieData: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string,
        Description: PropTypes.string.isRequired,
        Featured: PropTypes.bool,
        Genre: PropTypes.shape({
          Name: PropTypes.string,
          Description: PropTypes.string,
        }),
        Director: PropTypes.shape({
          Name: PropTypes.string,
          Bio: PropTypes.string,
          Birth: PropTypes.string,
          Death: PropTypes.string,
        }),
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };
