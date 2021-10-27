import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export class DeleteUserView extends React.Component {
  constructor() {
    super();
    this.state = {
        user: Username,
        password: Password
    }
  }

  handleDelete() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios.delete(`https://kino-noir.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        alert("Account successfully deleted");
        window.location.pathname = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }
