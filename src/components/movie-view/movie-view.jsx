import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class MovieView extends React.Component {



  addFavoriteMovie = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    const { movie } = this.props;

  
    axios.post(`https://kino-noir.herokuapp.com/users/${username}/movies/${movie._id}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        alert(`Movie added to Favorites`)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

    render() {
      const { movie, onBackClick } = this.props;
  
      return (
        <Container>
          
            <Row>
                <Col>
                    <Card >
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
                        <Row>
                         <Col>
                           <Button style={{marginTop: '1rem'}} variant="primary" type="submit"  onClick={() => { onBackClick(null); }}>Back</Button>
                        
                           <Button style={{marginTop: '2rem', }} variant="outline-success" type="submit" onClick={this.addFavoriteMovie}>Add to Favorites</Button>
                         </Col>
                        </Row>
                        
                      </div>
                      <div>
                        <Row>
                          <Col>
                            <Link to={`/directors/${movie.Director.Name}`}>
                              <Button variant="link">Director</Button>
                            </Link>
                         
                             <Link to={`/genres/${movie.Genre.Name}`}>
                              <Button variant="link">Genre</Button>
                             </Link>
                          </Col>
                        </Row>
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

