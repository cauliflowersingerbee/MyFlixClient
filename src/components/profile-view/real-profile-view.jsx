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
import settingsIcon from '../../img/settings-icon-img.png'
import userIcon from '../../img/user-icon.png'
import { left } from '@popperjs/core';



export class RealProfileView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        Username: null,
        Password: null,
        Email: null,
        Birthday: null,
        FavoriteMovies: [],
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



  render () {

  return <>
  <Container>
  <Row style={{height: '8rem', width: '50rem', marginLeft: '0.5rem', justifyContent: 'center'}}>
  <img src={userIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '0.5rem', float: left}}/>
  <h2>Welcome {user} !</h2>
  </Row>
  <Row>


    <Col md={4}>
    <Card style={{ width: '18rem'}}>
    <div className="userDelete">
    <UserDeleteView />
    </div>
    </Card>
    </Col>

    
    
    </Row>
    </Container>
</>
  


   
  
 }
}

