import React, { useState, useEffect } from "react";
import estilos from "./ItemListContainer.module.css";
import mates from "../../mock/mates";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
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
    </section>
  );
};

export default ItemListContainer;
