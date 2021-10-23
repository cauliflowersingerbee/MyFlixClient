import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { Card, Container, Row, Col } from 'react-bootstrap';
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

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  //refactoring:
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get('https://kino-noir.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onRegistration(newUser) {
    this.setState({
      newUser
    });
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  //1. add a logout button somewhere:
  //<button onClick={() => { this.onLoggedOut() }}>Logout</button>

  //2. add form validation

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
    
    //if (!newUser) return <RegistrationView onRegistration={newUser => this.onRegistration(newUser)} />;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <Router>
        <div className="main-view">
        <Container>
          <Row>
            <Col>
                <Route exact path="/" render={() => {
                  return movies.map(m => (
                    <Col md={3} key={m._id}>
                        <MovieCard movie={m} />
                    </Col>
                  ))
                }} />
                  <Route path="/movies/:movieId" render={({ match }) => {
                    return 
                    <Col md={8}>
                       <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
                    </Col>
                }} />
                  <Route exact path="/genres/:name" render={/* genre view*/}/>
                  <Route path="/directors/:name" render={({ match }) => {
                      if (movies.length === 0) return <div className="main-view" />;
                      return <Col md={8}>
                        <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} />
                      </Col>
                    }
                    } />
            </Col>
          </Row>
        </Container>
        </div>
      </Router>
    )
  }
}
