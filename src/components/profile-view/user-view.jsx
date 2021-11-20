import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class UserView extends React.Component {

  // get user method
  getUser(token) {
    const user = localStorage.getItem('user');
    axios.get(`https://kino-noir.herokuapp.com/users/${user}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      this.setState({
        Username: response.data.Username,
        Password: response.data.Password,
        Email: response.data.Email,
        Birthday: response.data.Birthday,
        FavoriteMovies: response.data.FavoriteMovies,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const data = response.data;
    return <h1> 'Your user details are:' + ' ' + {data} </h1>


        

   }

}
