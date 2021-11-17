import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';
import { Card, Container, Row, Col } from 'react-bootstrap';
import logo from '../../img/KinoNoirLogo.png'
import { NavBarView } from '../navbar/navbar';




export class MainView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      user: null,
      movies: [], 
      selectedMovie: null
    }
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
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

  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://kino-noir.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        this.setState({
          user: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  
  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }


  onRegistration(user) {
    console.log(user);
    this.setState({
      user: authData.user.Username
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
  }

  //upon login, next function updates `user` property in state

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

 

  
  render() {
    const { movies, user } = this.state;
    
    return (

        <Router>
           <NavBarView user={user} />

         <div>
        <Container>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
             
             if (movies.length === 0) return <div className="main-view" />;
             return movies.map(item => (
               <Col md={3} key={item._id}>
                 <MovieCard movie={item} />
               </Col>
             ))
           }} />
          
          <Route exact path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <RegistrationView />
          }} />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <MovieView movies={movies.find(m => movies._id === match.params._id)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
            </Col>
          }
          } />

          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
            </Col>
          }
          } />

          <Route exact path="/users/:username"
            render={({ history }) => {
              if (!user)
                return (
                  <Col className="login-view">
                    <LoginView
                      onLoggedIn={(user) => this.onLoggedIn(user)}
                    />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return <ProfileView history={history} movies={movies} user={user} />;
            }}
          />
        </Row>
        </Container>
      </div>
      </Router>
    );
  }
}
