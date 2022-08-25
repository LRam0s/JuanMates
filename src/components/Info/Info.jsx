import React from "react";
import estilos from "./Info.module.css";

const Info = () => {
  return (
    <section className={estilos.info}>
      <img
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661430256/JuanMates/info/envios_zptffp.jpg"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661430256/JuanMates/info/pagos_oqjsvy.jpg"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661430256/JuanMates/info/personalizado_fsnrpq.jpg"
        alt=""
      />
    </section>
  );
};

export default Info;
