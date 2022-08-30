import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import estilos from "./Main.module.css";

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
      <ItemListContainer />
      <ItemDetailContainer />
    </main>
  );
};

export default Main;
