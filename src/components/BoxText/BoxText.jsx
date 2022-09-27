import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import estilos from "./BoxText.module.css";

const BoxText = ({ title, text, btnText, link }) => {
  return (
    <section className={estilos.container}>
      <div className={estilos.boxText}>
        <h2 className={estilos.title}>{title}</h2>
        <p>{text}</p>
        <Link to={link}>
          <Button btnText={btnText} />
        </Link>
      </div>
    </section>
  );
};

export default BoxText;
