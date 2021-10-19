import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';


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
    
    <Container className="login-card">

      <img src={img} alt="Cool woman wearing sunglasses sitting in front of TV" style={{height: '45rem', width: '40rem', margin: '2rem'}} fluid/>
      
      
        
      
        <Col>
            <Card style={{ width: '20rem', height:'25rem', marginTop: '15rem', marginLeft: '1rem'}}>
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
                      <Button style={{marginTop: '1rem'}} variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </Form>
                 </Card.Body>
            </Card>
          </Col>
          
          <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '15rem', marginTop: '0.5rem'}}/>
         
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
