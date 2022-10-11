import React from "react";
import estilos from "./CheckoutID.module.css";

const CheckoutID = ({ idCompra }) => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div className={estilos.finally}>
        <p className={estilos.text}>¡Gracias por su compra!</p>
        <p className={estilos.text}>El id de la transacción es: {idCompra}</p>
      </div>
    </section>
  );
};

export default CheckoutID;
