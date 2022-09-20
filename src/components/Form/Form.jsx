import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { dataBase } from "../../firebaseConfig";
import Button from "../Button/Button";
import estilos from "./Form.module.css";

const Form = ({ cart, total, clear, handleId }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [postal, setPostal] = useState("");
  const [pago, setPago] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
        direccion: direccion,
        postal: postal,
        pago: pago,
      },
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(dataBase, "orders");

    addDoc(ordersCollection, order).then((res) => {
      handleId(res.id);
      clear();
    });
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const handleChangePostal = (event) => {
    setPostal(event.target.value);
  };

  const handleChangePago = (event) => {
    setPago(event.target.value);
  };

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form action="" onSubmit={handleSubmit} className={estilos.container}>
        <h2>Formulario de compra</h2>
        <div className={estilos.campos}>
          <label htmlFor="nombre">Ingrese su nombre: </label>
          <input
            type="text"
            name="nombre"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="phone">Ingrese su número de teléfono: </label>
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={handleChangePhone}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="email">Ingrese su correo electrónico: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="direccion">
            Ingrese el domicilio al cual se enviará el producto:{" "}
          </label>
          <input
            type="text"
            name="direccion"
            value={direccion}
            onChange={handleChangeDireccion}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="postal">Ingrese el Código Postal: </label>
          <input
            type="number"
            name="postal"
            value={postal}
            onChange={handleChangePostal}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="pago">Seleccione su metodo de pago: </label>
          <select name="pago" value={pago} onChange={handleChangePago}>
            <option value="" disabled>
              --Seleccione una opción--
            </option>
            <option value="credito">Tarjeta de Crédito</option>
            <option value="debito">Tarjeta de Débito</option>
            <option value="paypal">Paypal</option>
            <option value="transferencia">Transferencia Bancaria</option>
          </select>
        </div>
        <Button btnText="Confirmar compra" />
      </form>
    </section>
  );
};

export default Form;
