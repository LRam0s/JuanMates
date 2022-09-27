import React from "react";
import estilos from "./Form.module.css";
import Button from "../Button/Button";

const Form = ({
  name,
  phone,
  email1,
  email2,
  direccion,
  postal,
  pago,
  handleChangeName,
  handleChangePhone,
  handleChangeEmail1,
  handleChangeEmail2,
  handleChangeDireccion,
  handleChangePostal,
  handleChangePago,
  validateForm,
}) => {
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form action="" onSubmit={validateForm} className={estilos.container}>
        <h2>Formulario de compra</h2>
        <div className={estilos.campos}>
          <label htmlFor="name">Ingrese su nombre: </label>
          <input
            type="text"
            name="name"
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
          <label htmlFor="email1">Ingrese su correo electrónico: </label>
          <input
            type="email"
            name="email1"
            value={email1}
            onChange={handleChangeEmail1}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="email2">
            Introduzca nuevamente su correo electrónico:
          </label>
          <input
            type="email"
            name="email2"
            value={email2}
            onChange={handleChangeEmail2}
          />
        </div>
        <div className={estilos.campos}>
          <label htmlFor="direccion">
            Ingrese el domicilio al cual se enviará el producto:
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
            <option defaultValue="">--Seleccione una opción--</option>
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
