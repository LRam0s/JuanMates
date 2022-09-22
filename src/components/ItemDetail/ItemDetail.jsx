import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./ItemDetail.module.css";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ items }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);

  const onAdd = (cant) => {
    setCantidad(cant);
    addItem(items, cant);
    const notify = () =>
      toast.success(
        cant === 1
          ? `Se agregó ${cant} ${items.title} al carrito.`
          : `Se han agregado ${cant} ${items.title} al carrito`,
        { theme: "dark" }
      );
    notify();
  };

  const quantity = getProductQuantity(items.id);

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
            <ItemCount stock={items.stock} initial={quantity} onAdd={onAdd} />
          ) : (
            <>
              <Link to="/products">
                <Button btnText="Seguir comprando" />
              </Link>
              <Link to="/cart">
                <Button btnText="Ir al carrito" />
              </Link>
            </>
          )}
        </div>
      </article>
    </section>
  );
};

export default ItemDetail;
