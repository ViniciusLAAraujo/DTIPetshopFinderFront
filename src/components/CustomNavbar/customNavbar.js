import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import "./customNavbar.css";

export default function CustomNavbar() {
  return (
    <Navbar bg="body-tertiary" expand="lg" >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <Logo className="nav-img"/>
          PetshopDTI
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" style={{ maxHeight: '50px' }} navbarScroll>
            <Link to="/best-petshop" className="nav-link">
              Melhor petshop
            </Link>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
