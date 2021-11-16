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
      <Card style={{ width: '15rem', marginTop: '3rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
        <Row>
           <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
        </Row>
      <Card.Title>
        <Row style={{ marginLeft: '1rem', marginTop: '2rem'}}>
           <p>Would you like to delete your favorite movie?</p>
        </Row>
      </Card.Title>
        <Row>
           <Button style={{marginTop: '2rem', }} variant="primary" type="submit" onClick={(e) => handleDelete(e)}>Delete Account</Button>
        </Row>
        </Card>
      </Row>
    </>

 );

}
}
