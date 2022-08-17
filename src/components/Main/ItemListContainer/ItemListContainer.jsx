import React from "react";
import estilos from "./ItemListContainer.module.css";

const ItemListContainer = (greeting) => {
  return (
    <section className={estilos.text}>
      <h2>{greeting.text}</h2>
    </section>
  );
};

export default ItemListContainer;
