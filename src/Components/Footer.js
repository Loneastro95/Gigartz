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
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <Container className="footer-container mt-4" id="contact">
        <div className="white-line"></div>
    <h3 className="bold-text"><img src={logo} className="me-1"/> GigArtz</h3>
      <div className="row container-info">
        <div className="col-sm address-container">
        <h3 className="bold-text">Address</h3>
          <p className="address">The Kimberley Big Hole, W Circular Rd, Kimberley, 8300</p>
        </div>
        <div className="col-sm download-contact">
          <h3 className="bold-text">Download</h3>
          <h3 className="bold-text">About</h3>
          <h3 className="bold-text">Features</h3>
        </div>
        <div className="col-sm contact-container">
          <h3 className="bold-text">Contact</h3>
          <p className="address">+27 21 424 9803</p>
          <p className="address">gigartz@gmail.com</p>
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
      <div className="line line3"></div>
      <div className="copyright-container">
        <p className="address copyright">Copyright 2024 GigArtz. All rights reserved.</p>
        <div className="terms">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
