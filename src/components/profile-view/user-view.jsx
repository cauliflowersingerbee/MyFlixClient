import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class UserView extends React.Component {

  constructor() {
    super();

        this.state = {
          user
        }
   }

// get user 
   getUser(token) {
    const username = localStorage.getItem('user');
    const data =  response.data
    
    axios.get(`https://kino-noir.herokuapp.com/users/${username}`, {
    headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({ data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { user } = this.state;
    const { data } =  response.data

    if (user === null) return <Col>
    <h1>No such user!</h1>
    </Col>;
    return <Col>
    <h1> Your user details are: </h1>
         { data }
    </Col>
   }

}
