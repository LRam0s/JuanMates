import React, { useState, useEffect } from "react";
import { uniProd } from "../../mock/mates";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
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
