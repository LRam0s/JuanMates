import React from "react";
import Home from "../Home/Home";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Cart from "../Cart/Cart";
import Faq from "../FAQ/Faq";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/category/:id" element={<ItemListContainer />} />
        <Route path="/products/item/:id" element={<ItemDetailContainer />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
