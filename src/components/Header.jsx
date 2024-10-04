import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import { AuthContext } from '../database/AuthContext';
//import '../styles/header.css';  // Make sure this path is correct

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image 
            src="/bild1.svg"  // Ensure the path is correct
            alt="M.C. Industries Logo" 
            height="60" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link-custom">Profile</Nav.Link>
            {!currentUser && (
              <Nav.Link as={Link} to="/login" className="nav-link-custom">Login</Nav.Link>
            )}
            {currentUser && (
              <Button variant="outline-danger" onClick={logout} className="nav-link-custom">Log Out</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
