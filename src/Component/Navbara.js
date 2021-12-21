import React from 'react';
import Logo from "../assets/light-logo.png";
import{Container,Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import "./Navbara.css";
function Navbara() {
  return (
    <Container fluid>
       <Navbar bg='dark' variant='dark' expand='lg'>
            
            <Navbar.Brand href='#'><img src={Logo}  style={{width:`100px`}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="me-auto">
              <Link className="styleLink"  to="/">Home</Link>
              <Link className="styleLink"  to="/service">Service</Link>
              <Link className="styleLink"  to="/about">About</Link>
              <Link className="styleLink"  to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}
export default  Navbara;