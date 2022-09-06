import React, { useState } from "react";
import estilos from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import NavResponsive from "../NavResponsive/NavResponsive";
import { Link } from "react-router-dom";

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
            <Link to="/"> Productos </Link>
          </li>
          <li>
            <Link to="/"> Preguntas frecuentess </Link>
          </li>
          <Link to="/" className={estilos.logo}>
            {" "}
            <img
              src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
              alt="Logo de JuanMates Arg"
            />{" "}
          </Link>
          <li>
            <Link to="/"> Nosotros </Link>
          </li>
          <li>
            <Link to="/"> Contacto </Link>
          </li>
        </ul>
        <ul className={estilos.cart}>
          <li>
            <Link to="/">
              {" "}
              <CartWidget />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
