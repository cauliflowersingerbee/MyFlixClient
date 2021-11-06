import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import deleteIcon from '../../img/del-icon.png';


export class UserDeleteView extends React.Component {

  constructor(props) {
    super(props);

        this.state = {
        User: null,
        }
   }

   componentDidMount() {
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
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
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        console.log('deleting...')
        alert("Account successfully deleted");
        window.location.pathname = "/";
        })
      .catch(e => {
        console.log(error);
      });
  }

  render () {


    return (

      <>
      <Row>
      <Col xs={3}>
        <img src={deleteIcon} alt="Kino Noir delete icon" style={{height: '7rem', width: '10rem', marginTop: '15rem'}}/>
        </Col>
        <Col>
        <p>Would you like to delete your account?</p>
        </Col>
        </Row>
        <Row>
  
        <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={(e) => handleDelete(e)}>Delete Account</Button>
              </Row>
              </>

   );

 }
}
