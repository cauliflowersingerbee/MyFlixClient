import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';


export class FaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        FavoriteMovie : []
    }
  }


//removing favorite movie
handleDelete() {
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

 render () {


  return (

    <>
    <Row>
    <Col xs={3}>
      <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '7rem', width: '10rem', marginTop: '15rem'}}/>
      </Col>
      <Col>
      <p>Would you like to delete your favorite movie?</p>
      </Col>
      </Row>
      <Row>

      <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={(e) => handleDelete(e)}>Delete Account</Button>
            </Row>
            </>

 );

}
}
