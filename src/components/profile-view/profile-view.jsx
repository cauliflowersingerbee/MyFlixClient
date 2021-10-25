import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../img/KinoNoirLogo.png'
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/RegistrationImg.jpg';

export function ProfileView(props) {

//Allow a user to update their user info 
//(username, password, email, date of birth

componentDidMount() {
  let accessToken = localStorage.getItem('token');
  if (accessToken !== null) {
    this.setState({
      user: localStorage.getItem('user')
    });
    this.getUsers(accessToken);
  }
}

getUsers(token) {
  axios.get(`https://kino-noir.herokuapp.com/users/${username}`, {
    headers: { Authorization: `Bearer ${token}`}
  })
  .then(response => {
    //result becomes state
    this.setState({
          Name: response.data.Name,
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthdate: response.data.Birthdate,
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}


//Allow a user to deregister



//Display a user's favorite movies



//Allow a user to remove a movie from their list of favorites

}
