import React, { useState, useEffect } from "react";
import mates from "../../mock/mates";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const uniProd = mates.find((mate) => mate.id === 4);
      setTimeout(() => {
        res(uniProd);
      }, 2000);
    });
    getProducts.then((data) => {
      setItems(data);
    });
  }, []);

  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;
