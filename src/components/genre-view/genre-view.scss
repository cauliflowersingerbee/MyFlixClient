import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class MovieView extends React.Component {


    render() {
      const { movie, onBackClick } = this.props;
  
      return (
        <Container>
          
            <Row>
                <Col>
                    <Card>
                      <Card.Body>
                      <div className="movie-view">
                        <div className="movie-poster">
                          <img variant="top" src={movie.ImagePath} style={{ padding: '3rem' , width: '70%', marginTop: '1rem', height: '70%'}}/>
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
                      </Card.Body>
                    </Card>
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

