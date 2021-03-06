import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import settingsIcon from '../../img/settings-icon-img.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';


export class UserUpdateView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      Username: '',
      Password: '',
      Email: '',
      Birthday: ''
     }
  }

    handleUsernameChange = e => {
    this.setState({
      Username: e.target.value
    });
  }

    handlePasswordChange = e => {
      this.setState({
        Password: e.target.value
    });
  }

    handleEmailChange = e => {
      this.setState({
        Email: e.target.value
    });
    }
    handleBirthdayChange = e => {
      this.setState({
        Birthday: e.target.value
    });
  }
        
  

   handleUpdate = e => {

     alert(`${this.state.Username} ${this.state.Password} ${this.state.Email} ${this.state.Birthday}`)
     
     e.preventDefault()   
    
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    

    axios.put(`https://kino-noir.herokuapp.com/users/${Username}`, 
    
    {
        
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday        

    },
    {headers: { Authorization: `Bearer ${token}` }

      })
      .then (response => {
        //this.setState({
          //Username: response.data.Username,
          //Password: response.data.Password,
          //Email: response.data.Email,
          //Birthday: response.data.Birthday
        //});
        //this.props.setUser(response.data);
        //console.log(response.data);
        localStorage.setItem('user', this.state.Username);
        alert("Account Details Updated.");
        this.props.setUser({
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
          Birthday: this.state.Birthday  
        })
      })
      .catch (error => {
        alert ('Error Updating Account')
        //console.log(error.response.data);
      })
  }

    render() {
     const { Username, Password, Email, Birthday} = this.state

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
                        <Form.Control type="text" value={Username} onChange={this.handleUsernameChange} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={Password} onChange={this.handlePasswordChange} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={Email} onChange={this.handleEmailChange} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={Birthday} onChange={this.handleBirthdayChange} required
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



  // #7
let mapStateToProps = state => {
  return { user: state.user }
}

// #8
export default connect(mapStateToProps, { setUser } )(UserUpdateView);

