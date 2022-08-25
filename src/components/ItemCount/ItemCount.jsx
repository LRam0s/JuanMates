import React, { useState } from "react";
import Button from "../Button/Button";
import estilos from "./ItemCount.module.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  const itemPlus = () => {
    count < stock ? setCount(count + 1) : alert("Stock máximo");
  };
  const itemMinus = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <div className={estilos.container}>
      <span className={estilos.buttonContainer}>
        <button className={estilos.buttonControler} onClick={itemMinus}>
          -
        </button>
        <p> {count}</p>
        <button className={estilos.buttonControler} onClick={itemPlus}>
          +
        </button>
      </span>
      <Button btnText="Agregar al carrito" fnButton={() => onAdd(count)} />
    </div>
  );
};

export default ItemCount;
