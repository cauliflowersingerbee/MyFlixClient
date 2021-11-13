import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';



export class DeleteFaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        FavoriteMovie : []
    }
  }

  
  handleDeleteMovie= e => {
    
    e.preventDefault();
    const token = localStorage.getItem('token');
    const Username = localStorage.getItem('user');
    const { movies } = this.props;

    axios.delete(
        `https://kino-noir.herokuapp.com/users/${Username}/movies/${movies._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        alert('Movie Removed From Favorites');
      })
      .catch ((e) => {
        console.log(error);
        console.log(movie);
      })
  }



  

render () {


  return (
  <>
    
          <Row style={{marginLeft: '2.5rem', marginTop: '2rem'}}>
             <h6>Remove Movie From Favorites:</h6>
          </Row>
          <Row>                                                                    
          <Button style={{marginTop: '2rem', marginLeft: '5rem',}} variant="primary" type="submit" onClick={this.handleDeleteMovie}>Delete Movie</Button>
         

    </Row>
  </>

  );
 };
};



  
