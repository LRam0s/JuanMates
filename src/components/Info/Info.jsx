import React from "react";
import estilos from "./Info.module.css";

const Info = () => {
  return (
    <section className={estilos.info}>
      <img
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661430256/JuanMates/info/envios_zptffp.jpg"
        alt=""
        className={estilos.imgContainer}
      />
      <img
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661430256/JuanMates/info/pagos_oqjsvy.jpg"
        alt=""
        className={estilos.imgContainer}
      />
      <img
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661430256/JuanMates/info/personalizado_fsnrpq.jpg"
        alt=""
        className={estilos.imgContainer}
      />
    </section>
  );
};

export default Info;
