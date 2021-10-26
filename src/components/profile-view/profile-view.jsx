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

    this.state = {
      FavoriteMovies: [],
    };
  }

  //user info
  componentDidMount() {
    let user = localStorage.getItem("user");
    let url = `https://kino-noir.herokuapp.com/users/profile/${user}`;
    const token = localStorage.getItem("token");

    axios
      .get(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        this.setState({
          FavoriteMovies: response.data.FavoriteMovies,
        });
      });
  }

  handleDelete() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .delete(`https://kino-noir.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Account has been deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    
    const { user, username, movies } = this.props;
    console.log("movies", movies);
    console.log("log user", user);

    return (
      <Container>
        <Card className="card" xs={8} md={4}>
          <Card.Body className="card-body">
            <Card.Title>Profile Information </Card.Title>
            <Card.Text>Username: {`${user.Username}`} </Card.Text>
            <Card.Text>Password: {`${user.Password}`}</Card.Text>
            <Card.Text>Email: {`${user.Email}`}</Card.Text>
            {user.Birthday && <Card.Text>Birthdate: {`${user.Birthday}`}</Card.Text>}
            <Link to={`/users/update/${user.Username}`}>
              <Button className="button-update" variant="link">
                Update Profile
              </Button>
            </Link>

            <Link to={`/users/${user}`}>
              <Button
                className="button-deregister"
                user={username}
                variant="link"
                onClick={() => {
                  this.handleDelete();
                }}
              >
                Deregister
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Row className="justify-content-center">
          <h3>Favourite Films</h3>
        </Row>
        <Row className="favourite-movies">
       {movies.map((movie) => {
          if (this.state.FavoriteMovies.includes(movie._id)) {
            return <MovieCard key={movie._id} movie={movie} />;
          }
        })}
        </Row>
      </Container>
    );
  }
}
