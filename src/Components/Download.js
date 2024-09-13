import React from 'react';
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
import './download.css';
import google from "../assests/Google.png";
import apple from "../assests/Apple.png";
import dot from "../assests/Dot-Frame.png";
import oval from "../assests/Oval.png"

const Download = () => {
  return (
    <Container className='main-container'>
        <img src={oval} className="oval"/>
    <img src={dot} className='dots'/>
      <div class="back-container">
          <div className='text-container'>
            <h1 className='download-header'>DOWNLOAD THE APP</h1>
            <p className='para-text'>GIGARTZ, THE FUTURE OF SOCIAL TICKETING AND EVENTS MADE SOCIAL COMING SOON ...</p>
            <p className='para-text'>WE’RE STILL COOKING BUT WE WOULD LIKE TO KEEP YOU IN THE KNOW ... JOIN OUR NEWSLETTER TO STAY UPDATED</p>
          </div>
          <div className='image-container'>
            <img src={google} />
            <img src={apple} />
          </div>
      </div> 
    </Container>
  )
}

export default Download