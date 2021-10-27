import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class UserUpdateView extends React.Component {

  constructor() {
    super();

        this.state = {
          token = localStorage.getItem('token'),
          user = localStorage.getItem('user')
        }
   }

   handleUpdate() {

    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          Username: setUsername,
          Password: setPassword,
          Email: setEmail,
          Birthday: setBirthday,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ data });
        alert("Account Updated");
        
        localStorage.setItem("user", this.state.Username);
        window.open(`/users/${username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });

        }

        render() {
          const { data } = this.state;
          if (data === false) return <div className="login-view" />;
          if (data === true) return <div className="main-view" />;
          if (movies.length === 0) return <div className="main-view" />;
          return movies.map(m => (
            <Col md={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
            ))
            
         }
      
   }

  