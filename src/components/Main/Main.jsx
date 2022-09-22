import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";
import { ToastContainer } from "react-toastify";
import Faq from "../FAQ/Faq";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const Main = () => {
  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
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
