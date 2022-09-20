import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { dataBase } from "../../firebaseConfig";
import Form from "../Form/Form";

const FormContainer = ({ cart, total, clear, handleId }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [direccion, setDireccion] = useState("");
  const [postal, setPostal] = useState("");
  const [pago, setPago] = useState("");

  const validateForm = (event) => {
    event.preventDefault();
    if (email1 === email2) {
      if (pago === "") {
        alert("Tenes que elegir un metodo de pago valido");
      } else handleSubmit();
    } else alert("No coinciden los correos electrónicos");
  };
  const handleSubmit = () => {
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: email1,
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

  const handleChangeEmail1 = (event) => {
    setEmail1(event.target.value);
  };
  const handleChangeEmail2 = (event) => {
    setEmail2(event.target.value);
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
    <Form
      name={name}
      phone={phone}
      email1={email1}
      email2={email2}
      direccion={direccion}
      postal={postal}
      pago={pago}
      handleChangeName={handleChangeName}
      handleChangePhone={handleChangePhone}
      handleChangeEmail1={handleChangeEmail1}
      handleChangeEmail2={handleChangeEmail2}
      handleChangeDireccion={handleChangeDireccion}
      handleChangePostal={handleChangePostal}
      handleChangePago={handleChangePago}
      validateForm={validateForm}
    />
  );
};

export default FormContainer;
