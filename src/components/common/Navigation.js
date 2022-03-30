import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    //para linkear las etiquetas del navbar ocn las rutas del app.js uso la etiqueta to y el valor debe coincidir con una ruta ya definida en App.js
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand to='/' className="logo" >YourMorningNews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' className="nav-link ">Principal</Link>
              <Link to='/acerca-de-nosotros' className="nav-link" >Acerca de Nosotros</Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to='/login' className="nav-link">Login</Link>
              <Link to='/register' className="nav-link btn btn-danger text-white" >Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  );
};


export default Navigation;
