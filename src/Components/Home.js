import React from 'react'
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
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faChevronLeft,
    faChevronRight,
  } from "@fortawesome/free-solid-svg-icons";
  import "./home.css";
  import homeLogo from "../assests/home-logo.png";
  import sphere from "../assests/Sphere.png";
  import mic from "../assests/Mic.png";
  import headphones from "../assests/Headphones.png";
  import cube from "../assests/Cube.png";
  import cylinder from "../assests/Cylinder.png";
  import cone from "../assests/Cone.png";
  import deco from "../assests/Decoration.png";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faApple,
   faGooglePlay
  } from "@fortawesome/free-brands-svg-icons";
  import dancing from "../assests/dancing.png"
  
  
  // Add icons to the library
  library.add(faTwitter, faFacebookF, faInstagram);
  
  const Home = () => {
    return (
      <Container className="content-container " id='home'>
        <div className="left-container">
          <h1 className="header">
            Transform your experiences with{" "}
            <span className="gig-colored"> GigArtz</span>
          </h1>
          <p className="text-para mt-3">
            We bring the entertainment community together, offering a seamless
            experience where you can purchase tickets, book talented freelancers,
            and engage with performers like never before.
          </p>
          <div className="button-container">
            <button className="btn-colored"> <FontAwesomeIcon icon={faApple} className="icon-color me-2" /> Apple Store</button>
            <button className="btn-no-color"> <FontAwesomeIcon icon={faGooglePlay} className="icon-color me-2 google"  />Play Store</button>
          </div>
          
        </div>
        <div className="right-container">
            <img src={dancing} alt="Image by https://www.freepik.com/" className="" />
        </div>
      </Container>
  )
}

export default Home