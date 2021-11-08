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
    
    this.state = {
      username: '',
      password: '',
      email: '',
      birthday: ''
     }
  }

  
    handleChange = e => {
    this.setState({
      username: e.target.value,
      password: e.target.value,
      email: e.target.value,
      birthday: e.target.value
    });
  }
  

   handleUpdate = e => {
     alert(`${this.state.username} ${this.state.password} ${this.state.email} ${this.state.birthday}`)
     
     e.preventDefault();    
 
    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          birthday: this.state.birthday        

      })
      .then((response) => {

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        localStorage.setItem(token);
        localStorage.setItem(user);
    
      })
      .catch(function (error) {
        console.log('Something went wrong!')
      });
    }  

    render() {
     const { username, password, email, birthday} = this.state

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
                        <Form.Control type="text" value={username} onChange={this.handleChange} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={this.handleChange} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={email} onChange={this.handleChange} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={birthday} onChange={this.handleChange} required
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


