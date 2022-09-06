import React from "react";
import estilos from "./Category.module.css";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <section className={estilos.container}>
      <NavLink to="/category/mates"> Mates </NavLink>
      <NavLink to="/category/termos"> Termos </NavLink>
      <NavLink to="/category/bombillas"> Bombillas </NavLink>
    </section>
  );
};

export default Category;
