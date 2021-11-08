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
      Username: '',
      Password: '',
      Email: '',
      Birthday: ''
     }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    this.getUser(token, username);
  }

  
  getUser(token, username) {
    const url = `https://kino-noir.herokuapp.com/users/${username}`;
    axios.get(url, {headers: {Authorization: `Bearer ${token}`},
  })
  .then((response) => {
    console.log("response", response);
    this.setState({
      Username: response.data.Username,
      Password: response.data.Password,
      Email: response.data.Email,
      Birthdate: response.data.Birthday,
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}

    handleChange = e => {
    this.setState({
      Username: e.target.value,
      Password: e.target.value,
      Email: e.target.value,
      Birthday: e.target.value
    })
  }
  

   handleUpdate = e => {
     alert(`${this.state.Username} ${this.state.Password} ${this.state.Email} ${this.state.Birthday}`)
     
     e.preventDefault();    
    
     const token = window.localStorage.getItem('token');
     
     const userUpdate = {
      Username: this.state.Username,
      Password: this.state.Password,
      Email: this.state.Email,
      Birthday: this.state.Birthday
    }

 
    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        
          Username: userUpdate.Username,
          Password: userUpdate.Password,
          Email: userUpdate.Email,
          Birthday: userUpdate.Birthday        

      })
      .then((response) => {

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.username);
    
      })
      .catch(function (error) {
        console.log('Something went wrong!')
      });
    }  

    render() {
     const { Username, Password, Email, Birthday} = this.state

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
                        <Form.Control type="text" value={Username} onChange={this.handleChange} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={Password} onChange={this.handleChange} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={Email} onChange={this.handleChange} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={Birthday} onChange={this.handleChange} required
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


