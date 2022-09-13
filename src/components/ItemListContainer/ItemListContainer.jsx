import React, { useState, useEffect } from "react";
import estilos from "./ItemListContainer.module.css";
import productos from "../../mock/mates";
import ItemList from "../ItemList/ItemList";
import Category from "../Category/Category";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });

    return () => {
      setIsLoading(true);
    };
  }, [id]);

  return (
    <section className={estilos.text}>
      {isLoading ? (
        <div className={estilos.loading}>
          <PropagateLoader color="#2b2b2b" />
          <p>Cargando..</p>
        </div>
      ) : (
        <>
          <Category />
          <ItemList items={items} />
        </>
      )}
    </section>
  );
};

export default ItemListContainer;
