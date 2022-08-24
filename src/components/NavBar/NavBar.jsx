import React, { useState } from "react";
import estilos from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import NavResponsive from "../NavResponsive/NavResponsive";

const NavBar = () => {
  const [menuExtend, setMenuExtend] = useState(false);

  const toggleMenu = () => {
    setMenuExtend(!menuExtend);
  };

  return (
    <nav className={estilos.navBar}>
      <NavResponsive menuExtend={menuExtend} toggleMenu={toggleMenu} />
      <div className={estilos.navExtend}>
        <ul className={estilos.links}>
          <li>
            <a href="https://www.google.com.ar/">Productos</a>
          </li>
          <li>
            <a href="https://www.google.com.ar/">Preguntas frecuentes </a>
          </li>
          <a href="https" className={estilos.logo}>
            <img
              src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
              alt="Logo de JuanMates Arg"
            />
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
      </div>
    </nav>
  );
};

export default NavBar;
