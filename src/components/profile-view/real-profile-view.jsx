import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserDeleteView } from './user-delete-view';
import { FaveMoviesView } from './faveMovie-view';
import { UserUpdateView } from './user-update-view';
import { UserView } from './user-view';


export class RealProfileView extends React.Component {
  constructor() {
    super();

    this.state = {
        user: localStorage.getItem('user')
      }
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      <UserView getUser={user => this.getUser(user)} />
    }
  }

  render () {

  const { user } = this.state;

  return <>
  <Col>
  <h1>Welcome {user} !</h1>
    </Col>
    <Col>
    <h2>You can update your user information below:</h2>
    <UserUpdateView />
    </Col>
</>
  


   
  
 }
}

