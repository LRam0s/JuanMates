import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import estilos from "./Main.module.css";
import { Text } from "../Text/Text";

const Main = () => {
  return (
    <main>
      <section className={estilos.space}></section>
      <ItemListContainer text="Bienvenido a JuanMates, acá vas a poder encontrar los mejores productos al menor precio del mercado." />
      <Text
        estilo={estilos.textAbout}
        text="Somos una empresa de maxima confianza en la cuales vendemos unos mates espectaculares al mejor precio del mercado"
      />
    </main>
  );
};

export default Main;
