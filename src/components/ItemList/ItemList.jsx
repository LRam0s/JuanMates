import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
