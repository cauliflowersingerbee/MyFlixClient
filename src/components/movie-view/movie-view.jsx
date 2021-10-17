import React from 'react';
import PropTypes from "prop-types";
import Col from 'react-bootstrap/Col';

export class MovieView extends React.Component {


    render() {
      const { movie, onBackClick } = this.props;
  
      return (
        <div className="main-view">
        {selectedMovie
          ? (
            <Row>
              <Col md={8}>
                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              </Col>
            </Row>
          )
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          ))
        }
      </div>
      );
    }
  }

  MovieView.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };

