import React from "react";
import BoxText from "../BoxText/BoxText";
import Carrousel from "../Carrousel/Carrousel";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";
import SocialMedia from "../SocialMedia/SocialMedia";

const Home = () => {
  return (
    <>
      <Carrousel />
      <Info />
      <BoxText
        title="¿Quiénes somos?"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolore inventore beatae accusantium hic quos excepturi iure omnis modi odio ad? Rerum quisquam exercitationem voluptatem natus perferendis provident libero officia?"
        btnText="Ver más..."
        /* link={"/about"} */
      />
      <Gallery />
      <BoxText
        title="Preguntas frecuentes"
        text="Información sobre los mates personalizados, políticas de cambio de producto, tamaños de mates, modo de envíos y entregas, curado de mates, información para mayoristas. Todas esas respuestas y muchas más vas a encontrar en esta sección. Perfecto para quién quiere sacarse todas las dudas antes de comprar."
        btnText="Conocé las respuestas"
        /* link={"/faq"} */
      />
      <SocialMedia />
    </>
  );
};

export default Home;
