import React, { useRef } from "react";
import { useIntersection } from "./Observer"; // Assuming your custom hook is in this file
import {
  Container,
} from "react-bootstrap";
import "./about.css";
import backView from "../assests/back-view.png";
import takingPic from "../assests/taking-pic.png";

const About = () => {
  const image01Ref = useRef(null);
  const image02Ref = useRef(null);

  // Use custom hook to detect visibility
  const image01Visible = useIntersection(image01Ref, "0px");
  const image02Visible = useIntersection(image02Ref, "0px");

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
          <img
            ref={image01Ref}
            src={backView}
            className={`image01 ${image01Visible ? "slidein" : ""}`}
            alt="Back View"
          />
        </div>
        <div className="about-right">
          <img
            ref={image02Ref}
            src={takingPic}
            className={`image02 ${image02Visible ? "fade-in" : ""}`}
            alt="Taking Picture"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
