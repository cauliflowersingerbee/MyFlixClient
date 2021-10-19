import React from 'react';
import axios from 'axios';
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Card, Nav, Navbar, Form, Button, Container, Row, Col } from 'react-bootstrap';
import './main-view.css'
import logo from '../../img/KinoNoirLogo.png'



export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [], 
      selectedMovie: null,
      user: null, 
      newUser: null
    }
  }

  componentDidMount(){
    axios.get('https://kino-noir.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  onRegistration(newUser) {
    this.setState({
      newUser
    });
  }

  onMovieClick(movie) {
    this.setState({
      movie
    });
  }

  onBackClick(movie) {
    this.setState({
      movie
    });
  }
  
  render() {
    const { movies, selectedMovie, user, newUser } = this.state;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    if (!newUser) return <RegistrationView onRegistration={newUser => this.onRegistration(newUser)} />;

    if (movies.length === 0) return <div className="main-view" />;

    return (
    <div>
        <Container>
        <Row>
        <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '15rem', marginTop: '0.5rem', marginLeft:'20rem', marginBottom: '0.5rem'}}/>
        </Row>
          <div className="main-view">
            
                    {selectedMovie
                      ? 
                      (<Row>
                        <Col>
                        <Card>
                          <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                          </Card>
                      </Col>
                      
                      </Row>)
                      : 
                        movies.map(movie => (
                        (<Row className="justify-content-md-center">
                          <Col md={8}>
                          <Card style={{ width: '25rem', margin:'1rem', marginRight: '3rem'}}>
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
                        </Card>
                      </Col>
                      </Row>)
                    ))
                
                      }
                </div>
          </Container>
      </div>
    )
  }
}
