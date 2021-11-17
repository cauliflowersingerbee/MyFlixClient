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
    const { movies } = this.props
    

    
  
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
    };
     

   handleUnfavorite= () => {
     
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.delete(`https://kino-noir.herokuapp.com/users/${username}/movies/` + (id), {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}




  render () {

  const { FavoriteMovie } = this.state;
  const { movies } = this.props;
  
  return (
  <>
  <div className='FaveMovie'>
    <Row>
    
    <Card style={{ width: '20rem', marginTop: '3rem', marginBottom: '1rem', height: '40rem', alignItems: 'center'}} xs={2}>
         
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
                  (movies.map((m) => {
                    if (m._id === FavoriteMovie.find((fave) => fave === m._id)) {
                    return (
                      <div>
                            
                            <Card style={{ width: '13rem', marginTop: '2rem', marginBottom: '1rem', height: '8rem', alignItems: 'center', padding: '1rem'}} xs={2}  key={m._id}>
                              <Card.Img className='movie-card' variant='top' src={m.ImagePath} />
                              
                            </Card>
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

