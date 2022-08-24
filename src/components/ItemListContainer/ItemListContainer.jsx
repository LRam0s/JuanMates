import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./ItemListContainer.module.css";
import mates from "../../mock/mates";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const onAdd = (cant) => {
    cant === 1
      ? alert(`Se agregó ${cant} producto al carrito`)
      : alert(`Se agregaron ${cant} productos al carrito`);
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(mates);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() =>
        console.log("Se renderizado los productos de manera correcta")
      );
  }, []);

  return (
    <section className={estilos.text}>
      <ItemList items={items} />
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </section>
  );
};

export default ItemListContainer;
