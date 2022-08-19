import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Info from "../Info/Info";
import estilos from "./Main.module.css";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Faq from "../Faq/Faq";
import Social from "../Social/Social";

const Main = () => {
  return (
    <main>
      <section className={estilos.space}></section>
      <Carrousel />
      <Info />
      <About />
      <Gallery />
      <Faq />
      <Social />
    </main>
  );
};

export default Main;
