import React from "react";
import BoxText from "../BoxText/BoxText";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import SocialMedia from "../SocialMedia/SocialMedia";
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
      <ItemListContainer text="Bienvenido a JuanMates, acá vas a poder encontrar los mejores productos al menor precio del mercado." />
      <Info />
      <BoxText
        title="¿Quiénes somos?"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolore inventore beatae accusantium hic quos excepturi iure omnis modi odio ad? Rerum quisquam exercitationem voluptatem natus perferendis provident libero officia?"
        btnText="Ver más..."
      />
      <Gallery />
      <BoxText
        title="Preguntas frecuentes"
        text="Información sobre los mates personalizados, políticas de cambio de producto, tamaños de mates, modo de envíos y entregas, curado de mates, información para mayoristas. Todas esas respuestas y muchas más vas a encontrar en esta sección. Perfecto para quién quiere sacarse todas las dudas antes de comprar."
        btnText="Conocé las respuestas"
      />
      <SocialMedia />
    </main>
  );
};

export default Main;
