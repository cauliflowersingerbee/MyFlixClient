import React from 'react';
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
        FavoriteMovie : []
    }
  }


  componentDidMount() {
    const user = localStorage.getItem('user');
    
    if (user !== null) {
    axios.get(`https://kino-noir.herokuapp.com/users/${user}/favorites}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({
          FavoriteMovie: response.data.FavoriteMovie 
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {

     return (movies.map(m => (
       <Col md={3} key={m._id}>
         <MovieCard movie={m} />
       </Col>
       ))
     );
    }
  }


