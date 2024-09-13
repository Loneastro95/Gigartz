import React, { useState } from 'react';
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

  const [activeTab, setActiveTab] = useState('Home');

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="nav-link">
          <img src={logo} className="me-2" alt="GigArtz Logo" />GigArtz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> 
            <a 
              href="#home" 
              className={`nav-link ${activeTab === 'Home' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link ${activeTab === 'About' ? 'active' : ''}`} 
              onClick={() => setActiveTab('About')}
            >
              About
            </a>
            <a 
              href="#features" 
              className={`nav-link ${activeTab === 'Features' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Features')}
            >
              Features
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeTab === 'Contact' ? 'active' : ''}`} 
              onClick={() => setActiveTab('Contact')}
            >
              Contact
            </a>
          </Nav>
          <div className="ms-auto btn-container">
            <button className="signup-btn">Download</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavbarPage