import React from 'react';
import { Navbar, Link, Container, Nav, Button, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

export class NavBarView extends React.Component {
  constructor() {
    super();
    this.state = {};
      }

      onLoggedOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.setState({
          user: null,
        });
        window.open('/', '_self');
      }


      render() {
        const { user } = this.props;
        const home = `/`;
        const profile = `/users/${user}`;

        if (!user) return null;

    return (

<Navbar collapse="lg" collapseOnSelect className='justify-content-between' variant="light" fixed="top" className="navbar" bg="bg-secondary">
  <Container>
  <Navbar.Brand href="/">Kino Noir </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
      <Nav className="me-auto navbar-nav ms-auto" style={{float: 'right'}}>
      <NavLink to={home} className='nav-link'>
                Home
            </NavLink>

            <NavLink to={profile} className='nav-link'>
                Profile
            </NavLink>

            <NavLink  to={'/'} onClick={this.onLoggedOut} className='logout'>
                Log Out
            </NavLink>
          


      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     
    );
  };
};
