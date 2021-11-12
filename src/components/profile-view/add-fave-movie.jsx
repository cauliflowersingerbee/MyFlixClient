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
        FavoriteMovie : [], 
        user: null,
    }
  }

  
   handleAddFaveMovie= (e) => {
    const { FavoriteMovie } = this.props;
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const url = `https://kino-noir.herokuapp.com/users/${Username}/${movies}/${[FavoriteMovie]}`;
    const FavoriteMovie = this.state;
    


    
  app.post('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }),(req, res) => {
    User.findOneAndUpdate({ Username: req.params.Username }, {
      $push: { FavoriteMovies: req.params.MovieID }
    },
    { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
  });



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

