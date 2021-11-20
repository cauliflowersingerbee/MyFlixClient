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
   
      axios.get(url, {headers: { Authorization: `Bearer ${token}` }
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
    

    deleteFavorite = () => {
        
      const token = localStorage.getItem('token');
      const Username = localStorage.getItem('user');
<<<<<<< Updated upstream
      
          axios.delete(`https//kino-noir.herokuapp.com/users/${Username}/movies/${movie._id}`, {
=======
      const { FavoriteMovie } = this.state;
    
    
      
        
          axios.delete(`https//kino-noir.herokuapp.com/users/${Username}/movies/` + (id), {
>>>>>>> Stashed changes
            headers: { Authorization: `Bearer ${token}` }
          })
            .then((response) => {
              alert('Movie removed from favorites');
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              console.log(movie);
          })
    };
 

  render () {

  const { FavoriteMovie } = this.state;
  const { movies } = this.props;
  
  return (
  <>
  <div className='FaveMovie'>
    <Row>
    
    <Card style={{ width: '20rem', marginTop: '0.5rem', marginBottom: '1rem', height: '40rem', alignItems: 'center'}} xs={2}>
         
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
<<<<<<< Updated upstream
                   (movies.map((movie) => {
                    if (
                      movie._id ===
                      favoriteMovies.find((fav) => fav === movie._id)
                    ) 
                    {

                      return (
                         <div>
                               <Card style={{ width: '15rem', marginTop: '2rem', marginBottom: '1rem', height: '11rem', alignItems: 'center', padding: '1rem'}} xs={2}  key={movie._id}>
                                 <Card.Img className='movie-card' variant='top' src={movie.ImagePath} />
                                 <Card.Body>
                                   <Card.Title className="movie-card-title">
                                     {movie.Title}
                                   </Card.Title>
                                   <Button style={{marginTop: '2rem', }} variant="outline-success" value="movie._id" type="submit" onClick={this.deleteFavorite}>Remove from Favorites</Button>
                                   </Card.Body>
                               </Card>
                       </div> 
                           );
                         }
                    }))
=======
                 
                 (movies.map((m) => {
                  if (m._id === FavoriteMovie.find((fave) => fave === m._id)) {
                  return (
                    <div>
                          
                          <Card style={{ width: '15rem', marginTop: '2rem', marginBottom: '1rem', height: '11rem', alignItems: 'center', padding: '1rem'}} xs={2}  key={m._id}>
                            <Card.Img className='movie-card' variant='top' src={m.ImagePath} />
              
                            <Button style={{marginTop: '2rem', }} variant="outline-success" type="submit" onClick={this.deleteFavorite}>Remove from Favorites</Button>
                            
                          </Card>
                    </div> 
                      );
>>>>>>> Stashed changes
                    }
                  }))
                }
                 </div>
<<<<<<< Updated upstream
            </Row>
=======
         
               

                           
                

            </Row>

          
        




        
          
>>>>>>> Stashed changes
      </Card>
        
        

    </Row>
    </div>
  </>

  );
 };
};

