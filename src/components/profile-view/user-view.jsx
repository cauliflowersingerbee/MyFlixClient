import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class UserView extends React.Component {

  constructor(props) {
    super(props);

        this.state = {
          user: null
        }
   }
   
  componentDidMount() {
    
    axios.get(`https://kino-noir.herokuapp.com/users/${username}`, {
    headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {


        this.setState({ data });
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return <h1> 'Your user details are:' + ' ' +  { data }</h1>
        

   }

}
