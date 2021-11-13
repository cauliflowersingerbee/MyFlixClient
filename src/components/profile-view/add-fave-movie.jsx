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
        FavoriteMovie: null,
    }
  }

  componentDidMount= (e) => {
    const Username = localStorage.getItem('user');
    const url = `https://kino-noir.herokuapp.com/users/${Username}`;
    const token = localStorage.getItem('token');
    
  
    axios.get(url, {headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => {
          this.setState({
            user : response.data,
            FavoriteMovie : response.data.FavoriteMovie
          });
          console.log(response.data.FavoriteMovie)
        })

        .catch(function (error) {
          console.log(error);
        })
    } 
         

   handleMovieAdd =(e) => {

    const { movies } = this.props;
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.post(`https://kino-noir.herokuapp.com/users/${Username}/${movies}/${movies._id}`, {headers: { Authorization: `Bearer ${token}`}})
    .then (response => {
       users.findOneAndUpdate({ Username: req.params.Username }),
       {$push: { FavoriteMovie: req.params.movies._id }},
      { new: true },
      (err, updatedUser) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error: ' + err);
        } else {
          alert ('Movie successfully added to favorites!');
          res.status(201).send(message);
        }
      }
    })
    .then(response => {
      this.setState({
        FavoriteMovie: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  


  render () {

  const FavoriteMovie = this.state;

  return (
       <>
          <Row>
          <div className='addFavorites'>
          <Button style={{marginTop: '2rem', }} variant="primary" 
          type="submit" onClick={this.handleMovieAdd}>Add to Favorites</Button>
          </div>
          </Row>
      
      </>

  );
 };
};

