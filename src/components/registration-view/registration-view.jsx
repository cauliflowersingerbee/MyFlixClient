import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/kino-noir-logo.png'
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/registration-img.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
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
      console.log('Something went wrong!')
    });
  };
  
  return (
    <>
    <Container>
    <div className="registration-card">  
    <Row>
      <Col xs={2}>
      <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '10rem', marginTop: '15rem'}}/>
      </Col>
      <Col xs={4}>
            <Card style={{ width: '20rem', marginTop: '5rem', marginBottom: '1rem', height: '32rem'}} xs={2}>
              <Card.Body>
                <Card.Title>Please Sign Up for Kino Noir</Card.Title>
                  <Form className="register justify-content-md-center" onSubmit={(e) => handleSubmit(e)}>
                    
                    <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required
                      placeholder="johndoe"/>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" value={password}onChange={e => setPassword(e.target.value)} required minLength="6"
                      placeholder="min 8 characters"/>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email}onChange={e => setEmail(e.target.value)} required
                      placeholder="johndoe@examplemail.com"/>
                    </Form.Group>

                    <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control type="date" value={birthday}onChange={e => setBirthday(e.target.value)} required
                      placeholder="YYYY-MM-DD"/>
                    </Form.Group>

                    <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
                    
                    <p>Already signed up? Login below:</p>
                    <Link to="/">
                    <Button variant="primary" type="button">Login</Button>
                  </Link>

                    
                          
                </Form>  
            </Card.Body>
          </Card>
      </Col>
      <Col xs={6}>
        <div className="float-right"> 
            <img src={img} alt="Illustration of person riding a bicycle with a cat and a tv in the front and back baskets" style={{height: '100%', width: '100%', marginTop: '5rem'}}/>
        </div>
      </Col>
    </Row>
    </div>
    </Container>
    </>
  );
}


RegistrationView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};
