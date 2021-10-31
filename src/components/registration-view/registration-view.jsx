import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/KinoNoirLogo.png'
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/RegistrationImg.jpg';
import axios from 'axios';
import { Link } from "react-router-dom";


export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://kino-noir.herokuapp.com/users', {
      Username: username,
      Password: password, 
      Email: email,
      Birthday: birthday
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      window.open('/', '_self');
    })
    .catch(e => {
      console.log('Oops! There was trouble registering user!')
    });
  };
  
  return (
    <Container className="registration-card">  
    <Row>
      <Col>
            <Card style={{ width: '20rem', marginTop: '5rem', marginBottom: '1rem', height: '28rem'}} xs={2}>
              <Card.Body>
                <Card.Title>Please Sign Up for Kino Noir</Card.Title>
                  <Form onSubmit={() => handleSubmit()}>
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
                    
                    <p>Already signed up? Login here</p>
                    <Link to="/">
                    <Button variant="primary" type="button">Login</Button>
                  </Link>

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


RegistrationView.propTypes = {
  newUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onRegistration: PropTypes.func.isRequired,
};
