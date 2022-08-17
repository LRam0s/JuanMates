import React from "react";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import estilos from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <section className={estilos.space}></section>
      <ItemListContainer text="Bienvenido a JuanMates, acá vas a poder encontrar los mejores productos al menor precio del mercado." />
    </main>
  );
};

export default Main;
