import React from "react";
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
import "./footer.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faArrowLeft
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assests/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleTermsNav = () =>{
    navigate("/test")
  }

  const handlePolicyNav = () =>{
    navigate("/policy")
  }
  return (
    <Container className="footer-container mt-4" id="contact">
        <div className="white-line"></div>
      <h3 className="bold-text"><img src={logo} className="me-1"/> GigArtz</h3>
     <div className="container-flex-footer"> 
        <div className="row container-info">
          <div className="col-sm address-container">
          <h3 className="bold-text">Address</h3>
            <p className="address">Kimberley , South Africa , 8345 </p>
          </div>
          <div className="col-sm download-contact">
            <a href="#home" className="bold-text">Home</a >
            <a href="#about" className="bold-text">About</a >
            <a href="#features" className="bold-text">Features</a >
          </div>
          <div className="col-sm contact-container">
            <h3 className="bold-text">Contact</h3>
      
            <p className="address">surpport@gigartz.com</p>
            <div className="social-icons">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
    </div>
      <div className="line line3"></div>
      <div className="copyright-container">
        <p className="address copyright">Copyright 2024 GigArtz. All rights reserved.</p>
        <div className="terms">
            <a className="term-link" onClick={handleTermsNav}>Terms & Conditions</a>
            <a className="term-link" onClick={handlePolicyNav}>Privacy Policy</a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
