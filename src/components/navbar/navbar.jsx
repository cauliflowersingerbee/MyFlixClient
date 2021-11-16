import React from 'react';
import { Navbar, Container, Nav, Button, NavItem } from 'react-bootstrap';

import './navbar.scss';

export function NavBarView() {
  const Username = localStorage.getItem("user");

const onLoggedOut = () => {
    localStorage.clear();
    window.open("/", "_self");
  }

    return (
    <Navbar className="navbar" bg="light" variant="light" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Kino Noir</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/profile">Profile</Nav.Link>
            
          </Nav>
          <NavItem>
            {/* Only show "Logged in as:" when user is logged in */}
          {Username && (
                    <div>
                      <p style={{'color':'grey'}}>Logged in as:</p>
                    </div>
                  )}              
              </NavItem>         
          <NavItem style={{'color':'black'}}>
             &nbsp; {Username}</NavItem>
          <Nav.Link className="d-flex">
            {/* only show logout button, when user is logged in */}
            {Username && (
              <Button variant="danger" onClick={() => { onLoggedOut() }}>Logout</Button>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
