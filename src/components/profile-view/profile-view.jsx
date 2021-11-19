import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/kino-noir-logo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import { UserDeleteView } from './user-delete-view';
import { FaveMoviesView } from './faveMovie-view';
import { UserUpdateView } from './user-update-view';
import settingsIcon from '../../img/settings-icon-img.png'
import userIcon from '../../img/user-icon.png'
import { left } from '@popperjs/core';


export class ProfileView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        user: null,
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
  const { user } = this.props;
  const { movie } = this.props;
  
  return <>
  <Container>
  <Row className="greeting" style={{height: '8rem', width: '50rem', marginLeft: '7rem', justifyContent: 'center', marginTop: '3rem'}}>
  <img src={userIcon} alt="Kino Noir User Icon" style={{height: '5rem', width: '5rem', float: left}}/>
  <h2> Welcome {user}! </h2>
  </Row>
  <Row> 
    <Col xs={2}>
      <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '10rem', marginTop: '13rem'}}/>
      </Col>
    <Col xs={3}>
      <UserUpdateView />
    </Col>

    <Col xs={3}>
      <FaveMoviesView movie={movie} user={user}/>
    </Col>

    <Col xs={3}>
      <UserDeleteView />
    </Col>

  </Row>
    </Container>
</>

 }
}

