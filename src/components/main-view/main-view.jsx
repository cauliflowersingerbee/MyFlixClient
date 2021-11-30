import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap';
import { NavBarView } from '../navbar/navbar';
import { connect } from 'react-redux';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';
import MoviesList from '../movies-list/movies-list';
import { setMovies, setUser } from '../../actions/actions';
import "./main-view.scss";



class MainView extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      //user: null,
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
      this.getUser(accessToken);
    }
  }

  getMovies(token) {

    axios.get('https://kino-noir.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // #4
      this.props.setMovies(response.data);
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
        this.props.setUser(response.data);
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
    this.getUser(authData.token)
  }

 

  
  render() {
    // #5 movies is extracted from this.props rather 
    //than from the this.state
    let { movies, user } = this.props;
    console.log('user mainview', user);
    
    return (

        <Router>
           <NavBarView user={user} style={{marginBottom: '5rem'}}/>

         <div >
        <Container>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
             
             if (movies.length === 0) return <div className="main-view" />; 
             // #6
             return <MoviesList movies={movies}/>;
           }} />
          
          <Route exact path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <RegistrationView />
          }} />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user || movies.length === 0) return <Redirect to="/" />;
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user || movies.length === 0) return <Redirect to="/" />;
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
            </Col>
          }
          } />

          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user || movies.length === 0) return <Redirect to="/" />;
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
            </Col>
          }
          } />

          <Route exact path="/users/:Username"
            render={({ history }) => {
              if (!user || movies.length === 0) return <Redirect to="/" />;
              return <ProfileView movies={movies} user={user}
              />;
            }}
          />
        </Row>
        </Container>
      </div>
      </Router>
    );
  }
}


// #7
let mapStateToProps = state => {
  return { movies: state.movies, 
            user: state.user         
  }
}

// #8
export default connect(mapStateToProps, { setMovies, setUser } )(MainView);
