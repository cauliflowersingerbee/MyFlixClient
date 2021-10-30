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
          user: localStorage.getItem('user')
        }
   }

//removing user
  handleDelete= (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    axios.delete(`https://kino-noir.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log('yeah')

        
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
    if (user ) return <>
    <Row>
      <Col>
      <p>Would you like to delete your account?</p>
      </Col>
      </Row>
      <Row>

      <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={() => this.handleDelete()}>Submit</Button>
            </Row>
            </>
    
   }

}
