<Route exact path="/" render={() => {
    if (!user) return <Col>
      <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
    </Col>
    if (movies.length === 0) return <div className="main-view" />;
    return movies.map(m => (
      <Col md={4} key={m._Id}>
        <MovieCard movie={m} />
      </Col>
    ))
  }} />



  in user update view:

})
.then((response) => {

  const data = response.data;
  console.log(data);   
  this.setState(data);     
  
  localStorage.setItem('user', 'token');
  alert('Account Updated');
})
.catch(function (error) {
  console.log('Something went wrong!');
});

}  



componentDidMount() {
    const user = localStorage.getItem('user');
    if (user !== null) {
      this.setState({
        user});
    }
  }



  <<<<<<<<<<<<<<<

  import React from 'react';
import PropTypes from "prop-types";
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../../img/LoginImg.jpg';
import logo from '../../img/KinoNoirLogo.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import { LoginView } from '../login-view/login-view';


export class UserUpdateView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      user : localStorage.getItem('user')
    };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

    handleChange (e) {
    this.setState({value: e.target.value});
  }

   handleUpdate (e) {
    e.preventDefault();
    console.log(user);
 
    axios.put(`https://kino-noir.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
  
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday        

      })
      .then((response) => {
        
        const user = localStorage.getItem('user');
        localStorage.setItem('user', user);
        alert('Account Updated');
      })
      .catch(function (error) {
        console.log('Something went wrong!');
      });

    }  

    render() {
     
     return (<div className="update-user">
      <Container>  
        <Row>
          <Col>
                <Card style={{ width: '15rem', marginTop: '5rem', marginBottom: '1rem', height: '28rem'}} xs={2}>
                  <Card.Body>
                    <Card.Title>Account Update</Card.Title>
                      <Form onSubmit={this.handleUpdate}>
                        <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={username} onChange={this.handleChange} required
                          placeholder="johndoe"/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={this.handleChange} required minLength="6"
                          placeholder="min 8 characters"/>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={email} onChange={this.handleChange} required
                          placeholder="johndoe@examplemail.com"/>
                        </Form.Group>

                        <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={birthday} onChange={this.handleChange} required
                          placeholder="YYYY-MM-DD"/>
                        </Form.Group>

                        <Button style={{marginTop: '1rem', }} variant="primary" type="submit" onClick={this.handleUpdate}>Submit</Button>

                        <div>
                          <img src={logo} alt="Kino Noir Logo" style={{height: '4rem', width: '7rem', marginTop: '0.1rem'}}/>
                        </div> 
                              
                    </Form>  
                </Card.Body>
              </Card>
          </Col>
        </Row>
        </Container>
        </div>
      );
    }
  };




  //removing favorite movie
  deleteFavoriteMovie(_id) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const url = `https://kino-noir.herokuapp.com/users/${user}/favorites/${_id}`;

    axios.delete( url, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      alert ('Movie removed from favorites')
      window.location.pathname = "/";
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  componentDidMount() {
    const user = localStorage.getItem('user');
    
    if (user !== null) {
    axios.get(`https://kino-noir.herokuapp.com/users/${user}/${movie}/favorites}`, {
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

  render() {
    return (response.data.FavoriteMovie);
   }    
  
}

