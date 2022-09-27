import React from "react";
import estilos from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/products/item/${item.id}`}>
      <div className={estilos.itemContainer}>
        <img src={item.img} alt="" />
        <h3>{item.title}</h3>
        <p>${item.price}</p>
      </div>
    </Link>
  );
};

export default Item;
