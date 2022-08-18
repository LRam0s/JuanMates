import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Info from "../Info/Info";
import estilos from "./Main.module.css";
import About from "../About/About";

const Main = () => {
  return (
    <main>
      <section className={estilos.space}></section>
      <Carrousel />
      <Info />
      <About />
    </main>
  );
};

export default Main;
