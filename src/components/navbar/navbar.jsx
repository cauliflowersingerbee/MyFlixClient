import React from 'react';
import { Navbar, NavDropdown, Container, Nav, Button, NavItem } from 'react-bootstrap';
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
    <Navbar collapseOnSelect variant="light" fixed="top" className="navbar" bg="bg-secondary">
      <Container fluid>
        <Navbar.Brand href="/">Kino Noir</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} >
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
