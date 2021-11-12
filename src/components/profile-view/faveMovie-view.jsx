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
        FavoriteMovie : [], 
        isLoaded: false,

    }
  }
  
   componentDidMount() {
    const user = localStorage.getItem('user');
    const { movies } = this.props;
    const url = `https://kino-noir.herokuapp.com/users/${user}/${movies}/FavoriteMovie`;
    const token = localStorage.getItem('token');

    axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
         .then(res => res.json())
         .then(json => {
          this.setState({
            FavoriteMovie: json,
            isLoaded: true,
         })
         .catch (error => {
          alert ('Error Displaying Favorite Movie')
          console.log(error.response.data);
        })
        });

      }   
         
     

  render () {

  const { isLoaded, FavoriteMovie } = this.state;

  
  return (
  <>
  <div className='FaveMovie'>
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
                  <>
                    <h5>Your favorite movies are: </h5>
                    <ul>
                            {FavoriteMovie.map(m => (
                                <li key={FavoriteMovie._id}> {FavoriteMovie.Title}  </li>

                            ))}
                    </ul>
                    </>
                    }
                </div>             
                

            </Row>
         
           <Row>
            <DeleteFaveMoviesView />
          </Row>
        
          
      </Card>
        
        

    </Row>
    </div>
  </>

  );
 };
};

