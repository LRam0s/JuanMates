import React from "react";
import estilos from "./Button.module.css";

const Button = ({ btnText, fnButton }) => {
  return (
    <div>
      <button className={estilos.button} onClick={fnButton}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
