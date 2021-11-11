import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';



export class AddFaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        FavoriteMovie : []
    }
  }

  
   componentDidMount() {
    let user = localStorage.getItem('user');
    let FavoriteMovie = this.state;
    let url = `https://kino-noir.herokuapp.com/users/${user}/movies/${[FavoriteMovie]}`;
    const token = localStorage.getItem('token');

    axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
         .then(response => {
         this.setState({
         FavoriteMovie: response.data.FavoriteMovie,
         }); 
        })
        .catch (error => {
          console.log(error);
        })
      }


  render () {
  const {movies} = this.props;

  const FavoriteMovie = this.state;

  return (
  <>
    <Row>
     
    <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
          <Row>
            <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
          </Row>
          <Row>
          <div>
            {FavoriteMovie.length === 0 && 
           <h5>You have no favorite movies</h5>}
           </div>
           <div>
            {FavoriteMovie.length > 0 &&
           <h5>Your favorite movies are: {FavoriteMovie} </h5>}
           </div>
          </Row>
          
      </Card>

    </Row>
  </>

  );
 };
};

