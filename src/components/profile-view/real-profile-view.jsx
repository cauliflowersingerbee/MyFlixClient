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
import InfiniteScroll from './scrollView';
import settingsIcon from './profile-img/user-setting.png'
import userIcon from './profile-img/user-icon.png'
import { left } from '@popperjs/core';



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
  <Container>
  <Row style={{height: '8rem', width: '50rem', marginLeft: '0.5rem', justifyContent: 'center'}}>
  <img src={userIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '0.5rem', float: left}}/>
  <h2>Welcome {user} !</h2>
  </Row>
  <Row>

    <Col md={4}>
    <Card style={{ width: '18rem'}}>
    <div className="userSettingImg">
    <img src={settingsIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '1rem', marginLeft: '6rem'}}/>
    </div>
    <UserUpdateView />
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '18rem'}}>
    <div className="userSettingImg">
    <img src={settingsIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '1rem', marginLeft: '6rem'}}/>
    </div>
    <UserDeleteView />
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '18rem'}}>
    <div className="userSettingImg">
    <img src={settingsIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '1rem', marginLeft: '6rem'}}/>
    </div>
    <UserUpdateView />
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '18rem'}}>
    <div className="userSettingImg">
    <img src={settingsIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '1rem', marginLeft: '6rem'}}/>
    </div>
    <UserUpdateView />
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '18rem'}}>
    <div className="userSettingImg">
    <img src={settingsIcon} alt="User Icon" style={{height: '5rem', width: '5rem', marginTop: '1rem', marginLeft: '6rem'}}/>
    </div>
    <UserUpdateView />
    </Card>
    </Col>

    
    
    </Row>
    </Container>
</>
  


   
  
 }
}
