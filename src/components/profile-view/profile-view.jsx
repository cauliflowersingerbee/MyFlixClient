import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../img/KinoNoirLogo.png'
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/RegistrationImg.jpg';

export function ProfileView(props) {

//Allow a user to update their user info 
//(username, password, email, date of birth



function updateUser ({ handleSubmit, handleUpdate}) {
   return  (
    <Container className="registration-card">  
    <Row>
      <Col>
            <Card style={{ width: '20rem', marginTop: '5rem', marginBottom: '1rem', height: '28rem'}} xs={2}>
              <Card.Body>
                <Card.Title>Please Update Your User Details</Card.Title>
                  <Form>
                    <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" onChange={e => handleUpdate(e)} required
                      placeholder="Please enter a username"/>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" onChange={e => handleUpdate(e)} required minLength="6"
                      placeholder="Please enter a password"/>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" onChange={e => handleUpdate(e)} required
                      placeholder="Please enter an email address"/>
                    </Form.Group>

                    <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control type="birthday" onChange={e => handleUpdate(e)} required
                      placeholder="Please enter your birthday"/>
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
   );

}
//Allow a user to deregister



//Display a user's favorite movies



//Allow a user to remove a movie from their list of favorites

}
