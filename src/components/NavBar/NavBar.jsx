import React from "react";
import estilos from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logo.png";

const NavBar = () => {
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

export default NavBar;
