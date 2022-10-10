import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assests/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendarCheck,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import NotificationBadge from "./Notifications/NotificationIcon";
import { NavLink } from "react-router-dom";
import ProfileAvatarMenu from "./credentials/ProfileAvatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function BasicMenu() {
  const {isLoggedIn} = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Nav.Link
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faCalendarCheck} color="black" />
        &nbsp;&nbsp;Events
      </Nav.Link>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Nav.Link as={NavLink} to="/events">
            List Events
          </Nav.Link>
        </MenuItem>
        <Divider sx={{ backgroundColor: "black" }} />
        <MenuItem onClick={handleClose}>
          <Nav.Link as={NavLink} to={isLoggedIn?"/events/create/":"/login"}>
            Create an Event
          </Nav.Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

function NavBar() {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg" variant="light" sticky="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img className="imgLogo" src={logo} alt="LogoImage" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/alumni">
              <FontAwesomeIcon icon={faAddressCard} color="black" />
              &nbsp;&nbsp;Alumni
            </Nav.Link>
            &nbsp;&nbsp;
            <BasicMenu />
            <Nav.Link as={NavLink} to="/notifications">
              <NotificationBadge />
              &nbsp;&nbsp;Notifications
            </Nav.Link>
            {isLoggedIn? (
              <ProfileAvatarMenu />
            ) : (
              <Nav.Link as={NavLink} to="/login">
                <FontAwesomeIcon icon={faRightToBracket} color="black" />
                &nbsp;&nbsp;Register
              </Nav.Link>
            )}
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
