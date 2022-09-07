import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import estilos from "./Main.module.css";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";

const Main = () => {
  return (
    <main>
      <section className={estilos.space}>
        <img
          className={estilos.logo}
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265187/JuanMates/logo_k35yk0.png"
          alt=""
        />
      </section>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
