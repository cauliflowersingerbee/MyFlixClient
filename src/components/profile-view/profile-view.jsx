import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class ProfileView extends React.Component {
  constructor() {
    super();
  }

  //display favorite movies
  FavoriteMovie() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    axios.get(`https://kino-noir.herokuapp.com/users/${user}/favorites}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          FavoriteMovie: response.data.FavoriteMovie 
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  
  //updating user account

  handleUpdate(e, username, password, email, birthday) {
    this.setState({
      validated: null,
    });

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        validated: true,
      });
      return;
    }

    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          Name: newName ? newName : this.state.Name,
          Username: newUsername ? newUsername : this.state.Username,
          Password: newPassword ? newPassword : this.state.Password,
          Email: newEmail ? newEmail : this.state.Email,
          Birthday: newBirthdate ? newBirthdate : this.state.Birthdate,
        },
      })
      .then((response) => {
        alert("Account Updated");
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthdate: response.data.Birthdate,
        });
        localStorage.setItem("user", this.state.Username);
        window.open(`/users/${username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
        }
        setName(input) {
          this.Name = input;
        }

        setUsername(input) {
          this.Username = input;
        }

        setPassword(input) {
          this.Password = input;
        }

        setEmail(input) {
          this.Email = input;
        }

        setBirthday(input) {
          this.Birthdate = input;
        }

  //removing user
  handleDelete() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios.delete(`https://kino-noir.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Account successfully deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //removing favorite movie
  deleteFavoriteMovie(_id) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const url = `https://kino-noir.herokuapp.com/users/${user}/favorites/${_id}`;

    axios.delete( url, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      alert ('Movie removed from favorites')
      window.location.pathname = "/";
    })
    .catch(function (error) {
      console.log(error);
    });
  }

   // get user 
   getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://kino-noir.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({
          Name: response.data.Name,
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthdate,
          FavoriteMovie: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { FavoriteMovie } = this.state;
    const { movies } = this.props;

    return (
      <Div className="profile-view">
        <Row>
        <Card className="profile-card">

        <h1>'Hello' + {user}</h1>
        
        <div className="favorites-movies">

        if {FavoriteMovie.length === 0 } 
        return 
        <h2>You have no favorites movies.</h2>


        if {FavoriteMovie.length > 0}
        return 
        <h2>Your favorite movies are:</h2>

        {movies.map((movie) => {
                if (movie._id === FavoriteMovie.find((favMovie) => favMovie === movie._id)) {
                  return (
                    <CardDeck key={movie._id} className="movie-card-deck">
                      <Card className="fav-movie" style={{ width: '16rem' }} key={movie._id}>
                        <Card.Img style={{ width: '18rem', 'padding-top': '10px' }} className="movieCard" variant="top" src={movie.ImageURL} />
                        <Card.Title className="movie-card-title">{movie.Title}</Card.Title>
                        <Button size='sm' className='profile-button remove-favorite' variant='danger' value={movie._id} onClick={() => this.removeFavouriteMovie(movie)}>
                          Remove
                        </Button>
                      </Card>
                    </CardDeck>
                  );
                }
              })}
          </div>

          <h2>Your account details are:</h2>

          {getUser}

          <h2> Would you like to update your user profile?</h2>
          
          <div className="Profile">
          <Form noValidate validated={validated} className="update-form" onSubmit={(e) => this.handleUpdate(e, this.Name, this.Username, this.Password, this.Email, this.Birthdate)}>

            <Form.Group controlId="formName">
              <Form.Label className="form-label">Name</Form.Label>
              <Form.Control type="text" placeholder="Change Name" onChange={(e) => this.setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label className="form-label">Username</Form.Label>
              <Form.Control type="text" placeholder="Change Username" onChange={(e) => this.setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label className="form-label">
                Password<span className="required">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="New Password" onChange={(e) => this.setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control type="email" placeholder="Change Email" onChange={(e) => this.setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBirthdate">
              <Form.Label className="form-label">Birthdate</Form.Label>
              <Form.Control type="date" placeholder="Change Birthdate" onChange={(e) => this.setBirthdate(e.target.value)} />
            </Form.Group>

            <Button variant='danger' type="submit">
              Update
            </Button>

            <h3>Delete your Account</h3>
            <Button variant='danger' onClick={(e) => this.handleDeleteUser(e)}>
              Delete Account
            </Button>
          </Form>

          </div>
          
          <p>
          'Not' + {user} '?' + 'Please log out!'
          </p>
          
          <button onClick={() => { this.onLoggedOut() }}>Logout</button>
        </Card>
        </Row>
      </Div>
    );
  }
}
