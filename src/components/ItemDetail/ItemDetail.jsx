import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./ItemDetail.module.css";

const ItemDetail = ({ items }) => {
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cant) => {
    setCantidad(cant);
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

          {cantidad === 0 ? (
            <ItemCount stock={items.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
              <Button btnText="Ir al carrito" />
            </Link>
          )}
        </div>
      </article>
    </section>
  );
};

export default ItemDetail;
