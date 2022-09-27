import React from "react";
import Button from "../Button/Button";
import estilos from "./ContactForm.module.css";

const ContactForm = ({
  name,
  email,
  phone,
  message,
  handleChangeName,
  handleChangeEmail,
  handleChangePhone,
  handleChangeMessage,
  validateForm,
}) => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form action="" onSubmit={validateForm} className={estilos.container}>
        <h2>Formulario de contacto</h2>
        <div className={estilos.campos}>
          <label htmlFor="nombre">Nombre completo: </label>
          <input
            type="text"
            name="nombre"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="email">Ingrese su correo electrónico: </label>
          <input
            type="email"
            name="email1"
            value={email}
            onChange={handleChangeEmail}
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
          <label htmlFor="message">Ingrese su mensaje: </label>
          <textarea
            style={{ width: "400px", height: "200px" }}
            type="text"
            name="message"
            value={message}
            onChange={handleChangeMessage}
          />
        </div>
        <Button btnText="Enviar" />
      </form>
    </section>
  );
};

export default ContactForm;
