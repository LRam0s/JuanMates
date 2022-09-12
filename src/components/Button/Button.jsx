import React from "react";
import estilos from "./Button.module.css";

//ACA ES EL PROBLEMA DEL LINK; ESTO DEBERIA VER COMO CARAJO LO ARREGLO

const Button = ({ btnText, fnButton, link }) => {
  return (
    <div>
      <button className={estilos.button} onClick={fnButton}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
