import React from "react";
import { FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import estilos from "./Footer.module.css";
import estiloText from "../Main/Main.module.css";
import { Text } from "../Text/Text";

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
        <Text
          estilo={estiloText.textFaq}
          text="Responde todas las preguntas que se ocurren en la cabeza perrito malvado"
        />
        <p className={estilos.copy}>
          <span>JuanMatesArg ® Todos los derechos reservados.</span>
          <span>Desarrollado by Alisar</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
