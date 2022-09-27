import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assests/logo.png";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard,faCalendarCheck,faBell,faRightToBracket} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#"><img className="imgLogo" src={logo} alt="LogoImage" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><FontAwesomeIcon icon={faAddressCard} color="white"/>&nbsp;&nbsp;Alumni</Nav.Link>
            <Nav.Link ><FontAwesomeIcon icon={faCalendarCheck} color="white"/>&nbsp;&nbsp;Events</Nav.Link>
            <Nav.Link ><FontAwesomeIcon icon={faBell} color="white"/>&nbsp;&nbsp;Notifications</Nav.Link>
            <Nav.Link ><FontAwesomeIcon icon={faRightToBracket} color="white"/>&nbsp;&nbsp;Register</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Alumni"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
