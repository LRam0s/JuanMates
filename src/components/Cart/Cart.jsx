import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import estilos from "./Cart.module.css";
import Button from "../Button/Button";
import { BsTrash } from "react-icons/bs";
import Space from "../Space/Space";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  return (
    <>
      <Space />
      <section className={estilos.container}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={estilos.cart}>
              <img style={{ height: "150px" }} src={item.img} alt="" />
              <p>{item.title}</p>
              <p> Cantidad: {item.cantidad}</p>
              <p>Precio: {item.cantidad * item.price}</p>
              <button
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                <BsTrash size="20" />
              </button>
            </div>
          );
        })}
        <div className={estilos.button}>
          <Button btnText="Borrar carrito" fnButton={clear} />
        </div>
      </section>
    </>
  );
};

export default Cart;
