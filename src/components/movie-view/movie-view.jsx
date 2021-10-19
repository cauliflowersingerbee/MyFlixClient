import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';


export class MovieView extends React.Component {


    render() {
      const { movie, onBackClick } = this.props;
  
      return (
        <Container>
          
            <Row>
                <Col >
                      <div className="movie-view">
                        <div className="movie-poster">
                          <img src={movie.ImagePath} />
                        </div>
                        <div className="movie-title">
                          <span className="label">Title: </span>
                          <span className="value">{movie.Title}</span>
                        </div>
                        <div className="movie-description">
                          <span className="label">Description: </span>
                          <span className="value">{movie.Description}</span>
                        </div>
                        <Button style={{marginTop: '1rem'}} variant="primary" type="submit"  onClick={() => { onBackClick(null); }}>Back</Button>
                      </div>
              </Col>
           </Row>
        </Container>
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

