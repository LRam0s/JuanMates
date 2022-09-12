import React, { useState, useEffect } from "react";
import estilos from "./ItemListContainer.module.css";
import productos from "../../mock/mates";
import ItemList from "../ItemList/ItemList";
import Category from "../Category/Category";
import { useParams } from "react-router-dom";
import Space from "../Space/Space";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const prodFilter = productos.filter((prod) => prod.category === id);
      setTimeout(() => {
        res(id ? prodFilter : productos);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);

  return (
    <section className={estilos.text}>
      <Space />
      <Category />
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;
