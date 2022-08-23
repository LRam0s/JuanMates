import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavResponsive = ({
  mateMenu,
  links,
  linksMateExtend,
  logo,
  cart,
  toggleMenu,
  menuExtend,
}) => {
  return (
    <div className={mateMenu}>
      <ul className={links}>
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265647/JuanMates/icons8-mate-50_guoo8e.png"
          alt=""
          style={{ height: 35 }}
          onClick={toggleMenu}
        />
        {menuExtend === true && (
          <span className={linksMateExtend}>
            <li>
              <a href="https://www.google.com.ar/">Productos</a>
            </li>
            <li>
              <a href="https://www.google.com.ar/">Preguntas frecuentes </a>
            </li>
            <li>
              <a href="https://www.google.com.ar/"> Nosotros </a>
            </li>
            <li>
              <a href="https://www.google.com.ar/">Contacto</a>
            </li>
          </span>
        )}
      </ul>
      <a href="https" className={logo}>
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
          alt="Logo de JuanMates Arg"
        />
      </a>
      <ul className={cart}>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;
