import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';
import { name } from 'file-loader';


export class FaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        FavoriteMovie : []
    }
  }

  getFaveMovie= () => {
    const user = localStorage.getItem('user');
    const accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
     
    axios.get(`https://kino-noir.herokuapp.com/users/${user}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.setState({          
            FavoriteMovie: response.data.FavoriteMovie
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
  }


  render () {
  const FavoriteMovie = this.state;


  return (
  <>
    <Row>
      <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
          <Row>
            <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
          </Row>
         <Card.Title>
          <Row style={{ marginLeft: '1rem', marginTop: '2rem'}}>
            <h6>Your Favorite Movies Are:</h6>
            </Row>
            <Row>
           <div>
             {
               FavoriteMovie.map(movie => <h6>{name}</h6>)
             }
           </div>
            
          
          </Row>
        </Card.Title>

        
        
      </Card>
    </Row>
  </>

  );
 };
};

