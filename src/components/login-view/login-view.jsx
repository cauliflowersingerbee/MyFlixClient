import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Navbar, Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import './login-view.scss'


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };
  
  return (
    
    <Container>
      
      <Row>
        <Col>
        <Card style={{ width: '18rem', marginTop: '15rem',margin: '5rem'}}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
          </Card.Body>
          </Card>
          </Col>
          <Col>
          <img src={img} alt="TV viewer eating popcorn" style={{height: '35rem', width: '37rem', marginTop: '5rem'}}/>
          </Col>
        </Row>
    </Container>
    
  );
}



LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
