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
          user: Username,
          password: Password,
          email: Email,
          birthday: Birthday
        }
     }
   }

   handleUpdate() {

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      <h3>Please fill in form</h3>
      return this.setState({
        validated: true,
      });
    }

    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          Username: newUsername ? newUsername : this.state.Username,
          Password: newPassword ? newPassword : this.state.Password,
          Email: newEmail ? newEmail : this.state.Email,
          Birthday: newBirthday ? newBirthday : this.state.Birthday,
        },
      })
      .then((response) => {
        alert("Account Updated");
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });
        localStorage.setItem("user", this.state.Username);
        window.open(`/users/${username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });

        }

        render() {
          const { validated } = this.state;
          if (validated === true) return <div className="main-view" />;
          if (movies.length === 0) return <div className="main-view" />;
          return movies.map(m => (
            <Col md={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
            ))
         }

   }

 
