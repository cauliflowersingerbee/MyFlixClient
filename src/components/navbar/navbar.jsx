import React from 'react';
import { Navbar, Container, Nav, Button, NavItem } from 'react-bootstrap';
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
    <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className="navbar" bg="light">
      <Container fluid>
        <Navbar.Brand href="/">Kino Noir</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            </Nav>

            <NavLink to={home} className='nav-link'>
                Home
            </NavLink>

            <NavLink to={profile} className='nav-link'>
                Profile
            </NavLink>

            <NavLink  to={'/'} onClick={this.onLoggedOut} className='logout'>
                Log Out
            </NavLink>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  };
};
