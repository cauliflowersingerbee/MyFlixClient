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
        <Col>
        <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '40rem', alignItems: 'center'}} xs={2}>

          <Row>
             <img src={deleteIcon} alt="Kino Noir delete icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
          </Row>
          <Card.Title>
          <Row style={{marginLeft: '1rem', marginTop: '2rem'}}>
             <p>Would you like to delete your account?</p>
          </Row>
          </Card.Title>
        <Row>
  
        <Button style={{marginTop: '2rem', }} variant="primary" type="submit" onClick={(e) => handleDelete(e)}>Delete Account</Button>
              </Row>
        </Card>
        </Col>
      </Row>
              </>

   );

 }
}
