import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../img/KinoNoirLogo.png'
import { Alert, Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/RegistrationImg.jpg';


export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday );
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onRegistration(username);
  };

  
  return (
    <Container fluid="md">
      <Row>
      <Col xs={6} md={4}>
        <img src={logo} alt="Kino Noir Logo" style={{height: '7rem', width: '15rem', marginTop: '0.5rem', marginLeft:'5rem'}} fluid/>
        </Col>
        <Col>
          <Alert variant="danger" style={{ padding: '3rem' , width: '40rem', marginTop: '1rem', height: '10rem'}}>
            <Alert.Heading>Oh Snap, you're not registered!</Alert.Heading>
            <hr />
            <p className="mb-0">
            Please create a User account in order to access Kino Noir.
          </p>
        </Alert>
        </Col>
     
     
        <Col>
          <Form>
              <Card style={{ padding: '3rem' , width: '30rem', marginTop: '15rem',margin: '5rem', height: '30rem'}}>
              <Card.Body>
              <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
              <label>
                Birthday:
                <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
              </label>
              <Button style={{marginTop: '7rem', }} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
              </Card.Body>
              </Card>
          </Form>
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
