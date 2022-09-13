import React, { useState, useEffect } from "react";
import estilos from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const itemPlus = () => {
    count < stock && setCount(count + 1);
  };
  const itemMinus = () => {
    setCount(count - 1);
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
      <button className={estilos.button} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
