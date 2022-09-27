import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Space.module.css";

const Space = () => {
  return (
    <section className={estilos.space}>
      <Link to="/">
        <img
          className={estilos.logo}
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
          alt=""
        />
      </Link>
    </section>
  );
};

export default Space;
