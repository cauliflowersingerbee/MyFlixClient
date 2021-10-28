import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class FaveMoviesView extends React.Component {
  constructor() {
    super();
    this.state = {
        FavoriteMovie = []
    }
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

    render() {
     const { FavoriteMovie } = this.state;
     if (FavoriteMovie.length === 0) return <div className="main-view" />;
     if (movies.length === 0) return <div className="main-view" />;
     return movies.map(m => (
       <Col md={3} key={m._id}>
         <MovieCard movie={m} />
       </Col>
       ))
    }
  }

