import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import estilos from "./Cart.module.css";
import Button from "../Button/Button";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormContainer from "../FormContainer/FormContainer";

const Cart = () => {
  const [idCompra, setIdCompra] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  const mostrarForm = () => {
    setFormOpen(true);
  };

  const handleId = (id) => {
    setIdCompra(id);
  };

  if (formOpen && idCompra === "") {
    return (
      <FormContainer
        cart={cart}
        total={total}
        clear={clear}
        handleId={handleId}
      />
    );
  } else if (formOpen && idCompra) {
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
  }

  return (
    <section className={estilos.container}>
      {cart.map((item) => {
        return (
          <div key={item.id} className={estilos.cart}>
            <img style={{ height: "150px" }} src={item.img} alt="" />
            <p>{item.title}</p>
            <p> Cantidad: {item.cantidad}</p>
            <p>Precio: {item.price}</p>
            <p>Subtotal: {item.cantidad * item.price} </p>
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

      {cart.length === 0 ? (
        <>
          <div className={estilos.total}>
            <p> Tu carrito se encuentra vacío</p>
            <Link to="/">
              <Button btnText="Ir a ver los productos" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={estilos.total}>
            <p>Total: $ {totalPrice()} </p>
            <span style={{ display: "flex", gap: "1rem" }}>
              <Link to="/">
                <Button btnText="Seguir comprando" />
              </Link>
              <Button btnText="Borrar carrito" fnButton={clear} />
              <Button btnText="Finalizar compra" fnButton={mostrarForm} />
            </span>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
