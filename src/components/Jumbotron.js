import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import campus from "../assests/campus.jpg";
import jica from "../assests/jica.png";
import students from "../assests/students.png";
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css"
import Carousel from 'react-bootstrap/Carousel';
import {BrowserRouter as Router,
        Switch,
        Link
      } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Button as MuiButton } from '@mui/material';

function JumbotronDisplay(){
  return(
    <Carousel fade>
          {/* start */}
          {/* 1st slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={campus}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="justify-content-center h3-slide"><q>Nobody is bothered about its institutions more than its Alumni</q></h3>
          <p className="lead">Nalanda</p>
        <Stack spacing={2} direction="row" 
          justifyContent="center"
          alignItems="center">
          <MuiButton  variant="contained">Get Started</MuiButton>
        </Stack>
        </Carousel.Caption>
      </Carousel.Item>
         {/* 2nd Slide  */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jica}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="h3-slide">Alumni and Management RTM</h3>
          <p className="lead">Discuss Plans and Ideas about our Alumni</p>
        </Carousel.Caption>
      </Carousel.Item>
         {/* 3rd Slide  */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={students}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="h3-slide">Achievements</h3>
          <p className="lead">
            See the Achievements and Success of Alumni
          </p>
        </Carousel.Caption>
      </Carousel.Item>
          {/* end */}
    </Carousel>
  )
}

export default JumbotronDisplay;
