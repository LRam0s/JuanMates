import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./ItemListContainer.module.css";

const ItemListContainer = (greeting) => {
  const onAdd = (cant) => {
    cant === 1
      ? alert(`Se agregó ${cant} producto al carrito`)
      : alert(`Se agregaron ${cant} productos al carrito`);
  };
  return (
    <section className={estilos.text}>
      <h2>{greeting.text}</h2>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </section>
  );
};

export default ItemListContainer;
