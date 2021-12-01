import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import settingsIcon from '../../img/settings-icon-img.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';


export class UserUpdateView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      email: '',
      birthday: ''
     }
  }


    handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  }

    handlePasswordChange = e => {
      this.setState({
        password: e.target.value
    });
  }

    handleEmailChange = e => {
      this.setState({
        email: e.target.value
    });
    }
    handleBirthdayChange = e => {
      this.setState({
        birthday: e.target.value
    });
  }
        
  

   handleUpdate = e => {

     alert(`${this.state.username} ${this.state.password} ${this.state.email} ${this.state.birthday}`)
     
     e.preventDefault()   
    
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    

    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, 
    
    {
        
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          birthday: this.state.birthday        

    },
    {headers: { Authorization: `Bearer ${token}` }

      })
      .then (response => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          email: response.data.email,
          birthday: response.data.birthday
        });
        this.props.setUser(response.data);
        localStorage.setItem('user', response.data.username);
        alert("Account Details Updated.");
      })
      .catch (error => {
        alert ('Error Updating Account')
        console.log(error.response.data);
      })
  }

    render() {
     const { username, password, email, birthday} = this.state;
     

     return (<div className="update-user">
      <Container>  
        <Row>
          <Col>
                <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '40rem'}} xs={2}>
                  <Card.Body>
                        <div>
                          <img src={settingsIcon} alt="Kino Noir Logo" style={{height: '8rem', width: '8rem', marginTop: '1rem', marginLeft: '2rem', marginBottom: '1rem'}}/>
                        </div> 
                    <Card.Title>Would you like to update your account?</Card.Title>
                      <Form onSubmit={this.handleUpdate}>
                        <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={username} onChange={this.handleUsernameChange} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={this.handlePasswordChange} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={email} onChange={this.handleEmailChange} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={birthday} onChange={this.handleBirthdayChange} required
                          placeholder="YYYY-MM-DD"/>
                        </Form.Group>

                        <Button style={{marginTop: '2rem', }} variant="primary" type="submit" onClick={this.handleUpdate}>Submit</Button>

                              
                    </Form>  
                </Card.Body>
              </Card>
          </Col>
        </Row>
        </Container>
        </div>
      );
    }
  };



  let mapStateToProps = state => {
    return { user: state.user }
  }

  export default connect(mapStateToProps, { setUser })(UserUpdateView);


  