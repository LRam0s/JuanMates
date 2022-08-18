import React from "react";
import Carrousel from "./Carrousel/Carrousel";
import Info from "./Info/Info";
import estilos from "./Main.module.css";
import Nosotros from "./Nosotros/Nosotros";

const Main = () => {
  return (
    <main>
      <section className={estilos.space}></section>
      <Carrousel />
      <Info />
      <Nosotros />
    </main>
  );
};

export default Main;
