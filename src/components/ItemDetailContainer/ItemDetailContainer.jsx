import React, { useState, useEffect } from "react";
import mates from "../../mock/mates";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Space from "../Space/Space";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const { id } = useParams();
  const numberId = parseInt(id);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const uniProd = mates.find((mate) => mate.id === numberId);
      setTimeout(() => {
        res(uniProd);
      }, 500);
    });
    getProducts.then((data) => {
      setItems(data);
    });
  }, [numberId]);

  return (
    <>
      <Space />
      <ItemDetail items={items} />;
    </>
  );
};

export default ItemDetailContainer;
