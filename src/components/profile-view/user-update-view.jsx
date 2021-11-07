import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import settingsIcon from '../../img/settings-icon-img.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import { LoginView } from '../login-view/login-view';


export class UserUpdateView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

    handleChange (e) {
    this.setState({value: e.target.value});
  }

   handleUpdate (e) {
    this.state.value;
    e.preventDefault();
 
    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
  
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday        

      })
      .then((response) => {
        
        const user = localStorage.getItem('user');
        localStorage.setItem('user', user);
        alert('Account Updated');
      })
      .catch(function (error) {
        console.log('Something went wrong!');
      });

    }  

    render() {
     
     return (<div className="update-user">
      <Container>  
        <Row>
          <Col>
                <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '40rem'}} xs={2}>
                  <Card.Body>
                        <div>
                          <img src={settingsIcon} alt="Kino Noir Logo" style={{height: '8rem', width: '8rem', marginTop: '1rem', marginLeft: '2rem', marginBottom: '1rem'}}/>
                        </div> 
                    <Card.Title>Would you like to update your account?</Card.Title>
                      <Form onSubmit={this.handleUpdate}>
                        <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={this.state.value} onChange={this.handleChange} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={this.state.value} onChange={this.handleChange} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={this.state.value} onChange={this.handleChange} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={this.state.value} onChange={this.handleChange} required
                          placeholder="YYYY-MM-DD"/>
                        </Form.Group>

                        <Button style={{marginTop: '2rem', }} variant="primary" type="submit" onClick={this.handleUpdate}>Submit</Button>

                              
                    </Form>  
                </Card.Body>
              </Card>
          </Col>
        </Row>
        </Container>
        </div>
      );
    }
  };


