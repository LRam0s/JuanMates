import React from "react";
import BoxText from "../BoxText/BoxText";
import Carrousel from "../Carrousel/Carrousel";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";
import SocialMedia from "../SocialMedia/SocialMedia";
import Space from "../Space/Space";

const Home = () => {
  return (
    <>
      <Space />
      <Carrousel />
      <Info />
      <BoxText
        title="¿Quiénes somos?"
        text="El mate se disfruta tanto solo como en compañía, ya que tener un mate en la mano se vuelve ese amigo que te acompaña durante el día. Nuestro objetivo es que todos los amantes del mate, como nosotros, puedan tener los elementos de mayor calidad y al mejor precio para poder disfrutar del momento de tomarse un mate."
        btnText="Ver más..."
        link="/about"
      />
      <Gallery />
      <BoxText
        title="Preguntas frecuentes"
        text="Información sobre los mates personalizados, políticas de cambio de producto, tamaños de mates, modo de envíos y entregas, curado de mates, información para mayoristas. Todas esas respuestas y muchas más vas a encontrar en esta sección. Perfecto para quién quiere sacarse todas las dudas antes de comprar."
        btnText="Conocé las respuestas"
        link="/faq"
      />
      <SocialMedia />
    </>
  );
};

export default Home;
