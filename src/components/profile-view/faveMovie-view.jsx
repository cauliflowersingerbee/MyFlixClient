import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import faveIcon from '../../img/favorites-icon.png';
import { UserDeleteView } from './user-delete-view';
import { name } from 'file-loader';


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
   
      axios
         .get(url, {headers: { Authorization: `Bearer ${token}` }
         })
        .then((response) => {
          this.setState({
            FavoriteMovie : response.data.FavoriteMovie
          });
          console.log(response.data.FavoriteMovie)
        })
        .catch(function (error) {
          console.log(error);
        })
     };
    

    deleteFavorite = (movie) => {
      
      const token = localStorage.getItem('token');
      const Username = localStorage.getItem('user');
      
          axios
            .delete(`https://kino-noir.herokuapp.com/users/${Username}/movies/${movie._id}`, {
            headers: { Authorization: `Bearer ${token}` }
           })
            .then((response) => {
              alert('Movie removed from favorites');
              this.componentDidMount();
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
           })
    };
 

  render () {

  const { user, FavoriteMovie } = this.state;
  const { movies } = this.props;
  
  return (
  <>
  <div className='FaveMovie'>
    <Row>
    
    <Card style={{ width: '20rem', marginTop: '0.5rem', marginBottom: '1rem', height: 'auto', alignItems: 'center'}} xs={2}>
         
            <Row>
              <img src={faveIcon} alt="Kino Noir favorite movie icon" style={{height: '8rem', width: '8rem', marginTop: '2rem', marginBottom: '2rem'}}/>
            </Row>
            <Row>
            <h5>Favorite Movies</h5>
            </Row>
            <Row>
                <div>
                  {FavoriteMovie.length === 0 && 
                    <h5>You have no favorite movies</h5>}
                </div>
                 <div>
                    {FavoriteMovie.length > 0 &&
                      (movies.map(movie => {
                        if (
                          movie._id ===
                          FavoriteMovie.find((fav) => fav === movie._id)
                        ) 
                        {

                          return (
                            <div >
                              <Row >
                                  <Card style={{ width: '15rem', marginTop: 'o.5rem', marginBottom: '1rem', height: 'auto', alignItems: 'center', padding: '1rem'}} xs={2}  key={movie._id}>
                                    <Card.Header>{movie.Title}</Card.Header>
                                    <Card.Img className='movie-card' variant='top' src={movie.ImagePath} />
                                    <Card.Body>
                                      
                                      <Button className='movie-card' size="sm" style={{marginTop: '2rem', }} variant="outline-success" value="movie._id" type="submit" onClick={()=>this.deleteFavorite(movie)}>Remove from Favorites</Button>
                                      </Card.Body>
                                  </Card>
                                  
                                  </Row>
                          </div> 
                              );
                            }
                        }))
                        }
                  </div>
            </Row>
      </Card>
        
        

    </Row>
    </div>
  </>

  );
 };
};

