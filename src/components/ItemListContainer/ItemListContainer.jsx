import React, { useState, useEffect } from "react";
import estilos from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import Category from "../Category/Category";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import Space from "../Space/Space";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const itemCollections = collection(dataBase, "productos");
    const filter = query(itemCollections, where("category", "==", `${id}`));
    const itemList = id ? filter : itemCollections;

    getDocs(itemList)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <section className={estilos.text}>
      {isLoading ? (
        <div className={estilos.loading}>
          <Space />
          <PropagateLoader color="#2b2b2b" />
          <p>Cargando..</p>
        </div>
      ) : (
        <>
          <Space />
          <Category />
          <ItemList items={items} />
        </>
      )}
    </section>
  );
};

export default ItemListContainer;
