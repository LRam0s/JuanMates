import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import estilos from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

const NavResponsive = ({ menuExtend, toggleMenu }) => {
  return (
    <div className={estilos.mateMenu}>
      <ul className={estilos.links}>
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265647/JuanMates/icons8-mate-50_guoo8e.png"
          alt=""
          style={{ height: 35 }}
          onClick={toggleMenu}
        />
        {menuExtend === true && (
          <span className={estilos.linksMateExtend}>
            <li>
              <Link to="/products"> Productos </Link>
            </li>
            <li>
              <Link to="/faq"> Preguntas frecuentess </Link>
            </li>
            <li>
              <Link to="/about"> Nosotros </Link>
            </li>
            <li>
              <Link to="/contact"> Contacto </Link>
            </li>
          </span>
        )}
      </ul>
      <Link to="/" className={estilos.logo}>
        {" "}
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
          alt="Logo de JuanMates Arg"
        />{" "}
      </Link>
      <ul className={estilos.cart}>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
