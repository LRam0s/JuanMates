import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./ItemDetail.module.css";

const ItemDetail = ({ items }) => {
  const onAdd = (cant) => {
    cant === 1
      ? alert(`Se agregó ${cant} ${items.title} al carrito`)
      : alert(`Se agregaron ${cant} ${items.title} al carrito`);
  };

  return (
    <section className={estilos.container}>
      <article className={estilos.itemContainer}>
        <div>
          <img src={items.img} alt={items.title} />
        </div>
        <div className={estilos.itemDetail}>
          <h3>{items.title}</h3>
          <p> {items.description} </p>
          <p>$ {items.price}</p>
          <ItemCount stock={items.stock} initial={1} onAdd={onAdd} />
        </div>
      </article>
    </section>
  );
};

export default ItemDetail;
