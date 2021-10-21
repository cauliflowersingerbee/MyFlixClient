import React from 'react';
import axios from 'axios';
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

    if (!newUser) return <RegistrationView onRegistration={newUser => this.onRegistration(newUser)} />;
    
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

   

    if (movies.length === 0) return <div className="main-view" />;

    return (
    <div>
        <Container>
        <Row >
          <Col xs={3}>
        <img src={logo} alt="Kino Noir Logo" style={{height: '100%', width: '100%', marginTop: '0.5rem', marginLeft:'20rem', marginBottom: '0.5rem'}} />
        </Col>
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
                        (<Row className="justify-content-md-center" key={movie._id} movie={movie}>
                          <Col xs={8}>
                          <Card style={{ width: '18rem', margin:'1rem', marginRight: '3rem'}}>
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
