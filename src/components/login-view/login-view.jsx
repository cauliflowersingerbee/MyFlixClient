import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios.post('https://kino-noir.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };
  
  
  return (
    <div>
    <Container className="login-card">
      <Row className="justify-content-md-center"> 
        <Col md={3}>
            <Card style={{ width: '15rem', height:'25rem', marginTop: '15rem', marginLeft: '1rem'}}>
                <Card.Body>
                  <Card.Title>Please Login to use Kino Noir</Card.Title>
                    <Form>
                      <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                      </Form.Group>
                      
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                      </Form.Group>
                      <Button style={{marginTop: '1rem'}} variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                      </Button>

                      <p>New to Kino Noir? Please sign up!</p>
                       <Link to="/register">
                       <Button style={{marginTop: '1rem'}} variant="primary" type="button"> Register</Button>
                       </Link>
                      <div>
                      <img src={logo} alt="Kino Noir Logo" style={{height: '4rem', width: '10rem', marginTop: '0.5rem'}}/>
                      </div>        
                    </Form>
                 </Card.Body>
            </Card>
          </Col>

          <Col md={9}>
        <img src={img} alt="Cool woman wearing sunglasses sitting in front of TV" style={{height: '100%', width: '100%', margin: '2rem'}} />
        </Col>
          </Row>
    </Container>
    </div>
    
  );
}



LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }).isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};
