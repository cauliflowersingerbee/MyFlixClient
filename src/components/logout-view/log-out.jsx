import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/kino-noir-login-img.png';
import logo from '../../img/kino-noir-logo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class LogoutView extends React.Component {

    constructor(props){
      super(props);
  
      this.state = {
        user: user
      }
    }

  handleLogout = (e) => {
    e.preventDefault();
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.get(`https://kino-noir.herokuapp.com/users/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then(response => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.setState({
              user: null,
            });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    

  
      <>
      <Container className="login-card">
        <Row className="justify-content-md-center"> 
        <Col xs={2}>
        <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '10rem', marginTop: '15rem'}}/>
        </Col>
          <Col md={4}>
              <Card style={{ width: '15rem', height:'25rem', marginTop: '8rem', marginLeft: '3rem'}}>
                  <Card.Body>
                    <Card.Title>Please Login to use Kino Noir</Card.Title>
                      <Form onSubmit={(e)=>{handleSubmit(e)}}>
                        <Form.Group controlId="formUsername">
                          <Form.Label>Username:</Form.Label>
                          <Form.Control type="text" value={Username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formPassword">
                          <Form.Label>Password:</Form.Label>
                          <Form.Control type="password" value={Password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button style={{marginTop: '1rem'}} variant="primary" type="Login">Login</Button>
  
                        <p>New to Kino Noir? Please sign up!</p>
                         <Link to="/register">
                         <Button style={{marginTop: '0.2rem'}} variant="primary" type="button"> Register</Button>
                         </Link>    
                      </Form>
                   </Card.Body>
              </Card>
            </Col>
  
            <Col md={6}>
          <img src={img} alt="Illustration of woman sitting in blue armchair, eating popcorn." style={{height: 'auto', width: 'auto', marginTop: '3rem', marginRight: '7rem'}} />
          </Col>
            </Row>
      </Container>
      </>
  );
}



LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }), 
  onLoggedIn: PropTypes.func.isRequired,
};
