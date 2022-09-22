import React from "react";
import estilos from "./CheckoutID.module.css";

const CheckoutID = ({ idCompra }) => {
  console.log(idCompra);
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <div className={estilos.finally}>
        <p style={{ fontSize: "30px" }}>¡Gracias por su compra!</p>
        <p style={{ fontSize: "30px" }}>
          El id de la transacción es: {idCompra}
        </p>
      </div>
    </section>
  );
};

export default CheckoutID;
