import React from "react";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import estilos from "./CartWidget.module.css";

const CartWidget = () => {
  const { cart, itemWidget } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className={estilos.container}>
        <BsCart2 size={35} />
        <article>
          {cart.length === 0 ? (
            <span></span>
          ) : (
            <span className={estilos.items}>{itemWidget()}</span>
          )}
        </article>
      </div>
    </Link>
  );
};

export default CartWidget;
