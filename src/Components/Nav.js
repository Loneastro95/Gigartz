import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {
    Container,
    Col,
    Nav,
    Card,
    Form,
    Dropdown,
    Row,
    Button,
    InputGroup,
  } from "react-bootstrap";
  import './nav.css';
  import logo from "../assests/logo.png"


const NavbarPage = () => {
  return (
    <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home" className="nav-link"><img src={logo} className='me-2'/>GIGATRZ</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto"> {/* Use mx-auto to center the navigation links */}
        <a href="#home" className="nav-link">Download</a>
        <a href="#download" className="nav-link">Features</a>
        <a href="#link" className="nav-link">Contact</a>
      </Nav>
      <div className="ms-auto btn-container">
        <Button className="signup-btn">Login</Button>
        {/* <i class="vertical-line">|</i>
        <Button className="signin-btn">SIGN IN</Button> */}
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default NavbarPage