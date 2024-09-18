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
import "./features.css";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ticket from "../assests/Ticket.png";
import event from "../assests/Event.png";
import hint from "../assests/Hint.png";
import people from "../assests/People.png";
import access from "../assests/Accessibility.png";
import payment from "../assests/Payment.png";

const Features = () => {
  return (
    <Container className="features mt-5" id="features">
      <div className="feature-big-text">
        <h1 className="features-text">Find the Perfect Entertainment for Every Occasion</h1>
        <div className="line"></div>
      </div>
      {/* <div className="grid-container">
        <div className="grid-item">
            <div className="feature-icon">
            <h2 className="feature-name"> <FontAwesomeIcon icon={faApple} className="icon-color me-2" /></h2>
            </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
    </div> */}
      <div class="container1">
        <div class="row">
          <div class="col-sm grid-item me-4">
            <div className="feature-icon-container">
            <img src={ticket} className=" me-2"/>
              <h2 className="feature-name">Event Discovery</h2>
            </div>
            <h2 className="title">Find the Perfect Show</h2>
            <p className="feature-para">
              Easily browse and purchase tickets to the latest concerts,
              performances, and entertainment events happening near you or
              online
            </p>
          </div>
          <div class="col-sm grid-item me-4">
            <div className="feature-icon-container">
              <img src={event} className=" me-2"/>
              <h2 className="feature-name">Talent Booking</h2>
            </div>
            <h2 className="title">Book Top Entertainment Talent</h2>
            <p className="feature-para">
              Hire talented freelancers for your events, parties, and creative
              projects with a few clicks.
            </p>
          </div>
          <div class="col-sm grid-item">
            <div className="feature-icon-container">
            <img src={hint} className=" me-2"/>
              <h2 className="feature-name">Tipping and Reviews</h2>
            </div>
            <h2 className="title">Show Your Support</h2>
            <p className="feature-para">
              Engage with your favorite performers by leaving reviews, tips, and
              sharing their profiles with your network.
            </p>
          </div>
        </div>
        <div class="row bottom-row-features">
          <div class="col-sm grid-item me-4">
            <div className="feature-icon-container">
            <img src={people} className=" me-2"/>
              <h2 className="feature-name">User Community</h2>
            </div>
            <h2 className="title">Join a Thriving Entertainment Community</h2>
            <p className="feature-para">
              Follow performers, build your entertainment network, and never
              miss an event or talent update.
            </p>
          </div>
          <div class="col-sm grid-item me-4">
            <div className="feature-icon-container">
            <img src={access} className=" me-2"/>
              <h2 className="feature-name">Personalized Recommendations</h2>
            </div>
            <h2 className="title">Tailored for You</h2>
            <p className="feature-para">
              Receive curated recommendations based on your interests in events
              and talent, so you’ll always find something you love.
            </p>
          </div>
          <div class="col-sm grid-item">
            <div className="feature-icon-container">
            <img src={payment} className=" me-2"/>
              <h2 className="feature-name">Flexible Payments</h2>
            </div>
            <h2 className="title">Seamless Payments</h2>
            <p className="feature-para">
              Securely pay for tickets, book talent, and tip artists with
              flexible payment options.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
