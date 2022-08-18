import React from "react";
import estilos from "./NavBar.module.css";
import CartWidget from "./CartWidget/CartWidget";
import logo from "./logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <>
      <Navbar className={estilos.navBar} expand="lg">
        <Container className={estilos.contenedor}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={estilos.link} id="basic-navbar-nav">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bombillas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Termos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Yerbas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Canasta Matera
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Promociones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
                Set materos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Preguntas frecuentes</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Brand href="#home" className={estilos.logo}>
            <img src={logo} alt="Logo de JuanMates Arg" />
          </Navbar.Brand>
          <Navbar.Collapse className={estilos.link} id="basic-navbar-nav">
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Navbar.Collapse>
        </Container>
        <ul className={estilos.cart}>
          <CartWidget />
        </ul>
      </Navbar>
    </>
  );
};

export default NavBar;

/* const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
      <ul className={estilos.links}>
        <li>
          <a href="https://www.google.com.ar/">Productos</a>
        </li>
        <li>
          <a href="https://www.google.com.ar/">Preguntas frecuentes </a>
        </li>
        <a href="https" className={estilos.logo}>
          <img src={logo} alt="Logo de JuanMates Arg" />
        </a>
        <li>
          <a href="https://www.google.com.ar/"> Nosotros </a>
        </li>
        <li>
          <a href="https://www.google.com.ar/">Contacto</a>
        </li>
      </ul>
      <ul className={estilos.cart}>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar; */
