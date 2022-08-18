import React from "react";
import envios from "./img/envios.png";
import pagos from "./img/pagos.png";
import personalizado from "./img/personalizado.png";

const Info = () => {
  return (
    <section className="d-flex gap-3 justify-content-center p-4 flex-wrap">
      <img src={envios} alt="Información sobre envíos" />
      <img src={pagos} alt="Información sobre pagos" />
      <img src={personalizado} alt="Información sobre mates personalizados" />
    </section>
  );
};

export default Info;
