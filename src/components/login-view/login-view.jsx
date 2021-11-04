import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/kino-noir-login-img.png';
import logo from '../../img/kino-noir-logo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios.post('https://kino-noir.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      console.log(data);
      <RealProfileView />;
    })
    .catch(e => {
      console.log('Something went wrong!')
    });
  };
  
  
  return (
    <div className="login-view">
    <Container className="login-card">
      <Row className="justify-content-md-center"> 
      <Col xs={1}>
      <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '10rem', marginTop: '15rem'}}/>
      </Col>
        <Col md={3}>
            <Card style={{ width: '15rem', height:'25rem', marginTop: '15rem', marginLeft: '1rem'}}>
                <Card.Body>
                  <Card.Title>Please Login to use Kino Noir</Card.Title>
                    <Form onSubmit={(e)=>{handleSubmit(e)}}>
                      <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                      </Form.Group>
                      
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                      </Form.Group>
                      <Button style={{marginTop: '1rem'}} variant="primary" type="Login">Login</Button>

                      <p>New to Kino Noir? Please sign up!</p>
                       <Link to="/register">
                       <Button style={{marginTop: '1rem'}} variant="primary" type="button"> Register</Button>
                       </Link>    
                    </Form>
                 </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
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
  }), 
};
