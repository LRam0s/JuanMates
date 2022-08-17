import React from "react";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import estilos from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={estilos.background}>
      <section className={estilos.footer}>
        <div className={estilos.payment}>
          <FaCcVisa size={40} />
          <FaCcPaypal size={40} />
          <FaCcMastercard size={40} />
          <SiAmericanexpress size={40} />
        </div>
        <p className={estilos.copy}>
          <span>JuanMatesArg ® Todos los derechos reservados.</span>
          <span>Desarrollado by Alisar</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
