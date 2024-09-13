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
import "./about.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import backView from "../assests/back-view.png";
import takingPic from "../assests/taking-pic.png"

const About = () => {
  return (
    <Container className="about" id="about">
      <div>
          <h1 className="about-text">About Us</h1>
          <div className="line"></div>
      </div>
      <div className="about-container">
          
          <div className="about-left">
            <h2 className="welcome-text">Welcome to GigArtz</h2>
            <p className="welcome-para">
              Your all-in-one platform for discovering, booking, and supporting top
              entertainment talent. At GigArtz, we bring the entertainment community
              together, offering a seamless experience where you can purchase
              tickets, book talented freelancers, and engage with performers like
              never before. Whether you're looking to attend the latest events, hire
              skilled entertainers, or show your appreciation through tips and
              reviews, GigArtz is your go-to destination for all things
              entertainment. Join us and become part of a thriving community that
              celebrates creativity, talent, and unforgettable experiences.
            </p>
            <img src={backView}/>
          </div>
          <div className="about-right">
            <img src={takingPic} className="right-img" />
          </div>
      </div>
    </Container>
  );
};

export default About;
