import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class UserUpdateView extends React.Component {

  constructor() {
    super();

        this.state = {
          token = localStorage.getItem('token'),
          user = localStorage.getItem('user')
        }
   }

   handleUpdate() {
    e.preventDefault();

    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          Username: setUsername,
          Password: setPassword,
          Email: setEmail,
          Birthday: setBirthday,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        this.setState({ data });
        alert("Account Updated");
        
        localStorage.setItem("user", this.state.Username);
        window.open(`/users/${username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });

        }

    render() {
     <div className="update-user">
      <Container>  
        <Row>
          <Col>
                <Card style={{ width: '20rem', marginTop: '5rem', marginBottom: '1rem', height: '28rem'}} xs={2}>
                  <Card.Body>
                    <Card.Title>Please Update Your Account</Card.Title>
                      <Form>
                        <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" onChange={e => setUsername(e.target.value)} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="birthday" onChange={e => setBirthday(e.target.value)} required
                          placeholder="YYYY-MM-DD"/>
                        </Form.Group>

                        <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>

                        <div>
                          <img src={logo} alt="Kino Noir Logo" style={{height: '4rem', width: '7rem', marginTop: '0.1rem'}}/>
                        </div> 
                              
                    </Form>  
                </Card.Body>
              </Card>
          </Col>
          <Col xs={7}>
            <div className="float-right"> 
                <img src={img} alt="Cool woman wearing sunglasses leaning back against boat" style={{height: '100%', width: '100%', marginRight: '2rem'}}/>
            </div>
          </Col>
        </Row>
        </Container>
        </div>
    };
  }
  