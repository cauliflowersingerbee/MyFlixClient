import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class ProfileView extends React.Component {
  constructor(props) {
    super(props);
  }

  //display favorite movies
  getUserInfo() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    axios.get(`https://kino-noir.herokuapp.com/users/${user}/favorites}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          FavoriteMovie: response.data.FavoriteMovie 
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  
  //updating user account

  handleUpdate(e, username, password, email, birthday) {
    this.setState({
      validated: null,
    });

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        validated: true,
      });
      return;
    }

    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          Name: newName ? newName : this.state.Name,
          Username: newUsername ? newUsername : this.state.Username,
          Password: newPassword ? newPassword : this.state.Password,
          Email: newEmail ? newEmail : this.state.Email,
          Birthday: newBirthdate ? newBirthdate : this.state.Birthdate,
        },
      })
      .then((response) => {
        alert("Account Updated");
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthdate: response.data.Birthdate,
        });
        localStorage.setItem("user", this.state.Username);
        window.open(`/users/${username}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  setName(input) {
    this.Name = input;
  }

  setUsername(input) {
    this.Username = input;
  }

  setPassword(input) {
    this.Password = input;
  }

  setEmail(input) {
    this.Email = input;
  }

  setBirthday(input) {
    this.Birthdate = input;
  }

  //removing user
  handleDelete() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios.delete(`https://kino-noir.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Account successfully deleted");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //removing favorite movie
  deleteFavoriteMovie(_id) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const url = `https://kino-noir.herokuapp.com/users/${user}/favorites/${_id}`;

    axios.delete( url, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      alert ('Movie removed from favorites')
      window.location.pathname = "/";
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

      return  (
       <Container className="profile-view">  
       <Row>
         <Col>
               <Card style={{ width: '20rem', marginTop: '5rem', marginBottom: '1rem', height: '28rem'}} xs={2}>
                 <Card.Body>
                   <Card.Title>Please Update Your User Details</Card.Title>
                     <Form>
                       <Form.Group controlId="formUsername">
                       <Form.Label>Username:</Form.Label>
                       <Form.Control type="text" onChange={e => handleUpdate(e)} required
                         placeholder="Please enter a username"/>
                       </Form.Group>
   
                       <Form.Group controlId="formPassword">
                       <Form.Label>Password:</Form.Label>
                       <Form.Control type="password" onChange={e => handleUpdate(e)} required minLength="6"
                         placeholder="Please enter a password"/>
                       </Form.Group>
   
                       <Form.Group controlId="formEmail">
                       <Form.Label>Email:</Form.Label>
                       <Form.Control type="email" onChange={e => handleUpdate(e)} required
                         placeholder="Please enter an email address"/>
                       </Form.Group>
   
                       <Form.Group controlId="formBirthday">
                       <Form.Label>Birthday:</Form.Label>
                       <Form.Control type="birthday" onChange={e => handleUpdate(e)} required
                         placeholder="Please enter your birthday"/>
                       </Form.Group>
   
                       <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                       
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
  }
