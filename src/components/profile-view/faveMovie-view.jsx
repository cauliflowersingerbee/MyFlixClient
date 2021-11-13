import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';
import { DeleteFaveMoviesView } from './delete-fave-movie';
import { AddFaveMoviesView } from './add-fave-movie';



export class FaveMoviesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user : null, 
        FavoriteMovie : []

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
         
     

  render () {

  const { FavoriteMovie } = this.state;
  const { movies } = this.props
  
  return (
  <>
  <div className='FaveMovie'>
    <Row>
     
    <Card style={{ width: '20rem', marginTop: '0.5rem', marginBottom: '1rem', height: '40rem', alignItems: 'center'}} xs={2}>
         
            <Row>
              <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem', marginBottom: '2rem'}}/>
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
                        <li key={FavoriteMovie._id}> 
                          {FavoriteMovie}  
                        </li>))}
                    </ul>
                    </>
                    }
                </div>             
                

            </Row>

            <Row>
            <AddFaveMoviesView movies={movies} FavoriteMovie={FavoriteMovie} />
          </Row>
         
           <Row>
            <DeleteFaveMoviesView movies={movies} FavoriteMovie={FavoriteMovie} />
          </Row>


        
          
      </Card>
        
        

    </Row>
    </div>
  </>

  );
 };
};

