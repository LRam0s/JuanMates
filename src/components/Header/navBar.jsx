import React from "react";
import estilos from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={estilos.navBar}>
      <ul className={estilos.linksIzq}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Productos </a>
        </li>
      </ul>
      <p className={estilos.logo}>
        <span>JuanMates</span>
        <span>Compartiendo momentos</span>
        <span>(Acá iría el logo)</span>
      </p>
      <ul className={estilos.linksDer}>
        <li>
          <a href="#"> Sobre nosotros </a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
