import React from "react";
import Button from "../Button/Button";
import estilos from "./BoxText.module.css";

const BoxText = ({ title, text, btnText }) => {
  return (
    <section className={estilos.container}>
      <div className={estilos.boxText}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button btnText={btnText} />
      </div>
    </section>
  );
};

export default BoxText;
