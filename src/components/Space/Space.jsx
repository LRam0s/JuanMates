import React from "react";
import estilos from "./Space.module.css";

const Space = () => {
  return (
    <section className={estilos.space}>
      <img
        className={estilos.logo}
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
        alt=""
      />
    </section>
  );
};

export default Space;
