import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';
import { DeleteFaveMoviesView } from './delete-fave-movie';



export class FaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        FavoriteMovie : []
    }
  }

  
   componentDidMount() {
    const user = localStorage.getItem('user');
    const url = `https://kino-noir.herokuapp.com/users/${user}`;
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

  const FavoriteMovie = this.state;
  const { movie } = this.props
  return (
  <>
    <Row>
     
    <Card style={{ width: '15rem', marginTop: '0.5rem', marginBottom: '1rem', height: '28rem', alignItems: 'center'}} xs={2}>
         
            <Row>
              <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem'}}/>
            </Row>
            
            <Row>
              <ul>
              {FavoriteMovie}.map(item => (
                <li key={movie._id}>{movie}</li>
              ))
            </ul>
            </Row>
         
           <Row>
            <DeleteFaveMoviesView />
          </Row>
        
          
      </Card>
        
        

    </Row>
  </>

  );
 };
};

