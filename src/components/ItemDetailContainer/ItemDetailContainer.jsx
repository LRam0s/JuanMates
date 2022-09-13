import React, { useState, useEffect } from "react";
import mates from "../../mock/mates";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import estilos from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const numberId = parseInt(id);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const uniProd = mates.find((mate) => mate.id === numberId);
      setTimeout(() => {
        res(uniProd);
      }, 2000);
    });
    getProducts.then((data) => {
      setItems(data);
      setIsLoading(false);
    });
    return () => {
      setIsLoading(true);
    };
  }, [numberId]);

  return (
    <>
      {isLoading ? (
        <div className={estilos.loading}>
          <PropagateLoader color="#2b2b2b" />
          <p>Cargando..</p>
        </div>
      ) : (
        <ItemDetail items={items} />
      )}
    </>
  );
};

export default ItemDetailContainer;
