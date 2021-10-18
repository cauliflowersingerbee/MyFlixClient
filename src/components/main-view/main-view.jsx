import React from 'react';
import axios from 'axios';
import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './main-view.scss';





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

    //if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    //if (!newUser) return <RegistrationView onRegistration={newUser => this.onRegistration(newUser)} />;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        <Navbar bg="light" expand="lg"></Navbar>
        {selectedMovie
          ? (
            <Row>
              <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            </Row>
          )
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          ))
        }
      </div>
    )
  }
}
