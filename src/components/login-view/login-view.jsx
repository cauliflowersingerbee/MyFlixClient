import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import './login-view.scss'
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
    
    <Container>
      <Row>
        <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '15rem', marginTop: '0.5rem', marginLeft:'20rem'}} fluid/>
      </Row>
      <Row>
        <Col>
            <Card style={{ width: '18rem', marginTop: '15rem', margin: '5rem', marginLeft: '10rem'}}>
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
          <Col>
          <img src={img} alt="Cool woman wearing sunglasses sitting in front of TV" style={{height: '30rem', width: '26rem', marginTop: '2rem', marginRight: '6rem'}} fluid/>
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
