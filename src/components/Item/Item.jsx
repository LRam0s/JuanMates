import React from "react";
import estilos from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <div className={estilos.itemContainer}>
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
    </div>
  );
};

export default Item;
