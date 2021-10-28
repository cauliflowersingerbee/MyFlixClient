import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class UserDeleteView extends React.Component {

  constructor() {
    super();

        this.state = {
          token = localStorage.getItem('token'),
          user = localStorage.getItem('user')
        }
   }

//removing user
  handleDelete() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    axios.delete(`https://kino-noir.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        this.setState({
            user: null,
            token: null
          });
        
        alert("Account successfully deleted");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { user } = this.state;
    if (user === null) return <Col>
              <RegistrationView />
            </Col>
    
   }

}
