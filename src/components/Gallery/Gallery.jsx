import React from "react";
import Button from "../Button/Button";
import estilos from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={estilos.container}>
      <div className={estilos.gallery}>
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery0_noyg3m.jpg"
          alt=""
          className={estilos.gItem0}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery1_vnghng.jpg"
          alt=""
          className={estilos.gItem1}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery2_wza23n.jpg"
          alt=""
          className={estilos.gItem2}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery3_avhmtc.jpg"
          alt=""
          className={estilos.gItem3}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery4_wahl4i.jpg"
          alt=""
          className={estilos.gItem4}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery5_twz3as.jpg"
          alt=""
          className={estilos.gItem5}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265156/JuanMates/gallery/gallery6_gz2oet.png"
          alt=""
          className={estilos.gItem6}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265157/JuanMates/gallery/gallery7_hunfff.jpg"
          alt=""
          className={estilos.gItem7}
        />
        <img
          src="https://res.cloudinary.com/dpsc3qokx/image/upload/v1661265157/JuanMates/gallery/gallery8_ibgmt3.jpg"
          alt=""
          className={estilos.gItem8}
        />
      </div>
      <Button btnText="Ver todos los productos" />
    </section>
  );
};

export default Gallery;
