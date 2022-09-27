import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import estilos from "./ItemDetailContainer.module.css";
import { dataBase } from "../../firebaseConfig";
import { doc, getDoc, collection } from "firebase/firestore";
import Space from "../Space/Space";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(dataBase, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref)
      .then((res) => {
        setItems({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className={estilos.loading}>
          <Space />

          <PropagateLoader color="#2b2b2b" />
          <p>Cargando..</p>
        </div>
      ) : (
        <>
          <Space />

          <ItemDetail items={items} />
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
