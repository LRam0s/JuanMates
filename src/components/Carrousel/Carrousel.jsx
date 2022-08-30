import React, { useEffect, useState } from "react";
import estilos from "./Carrousel.module.css";
import { images, title } from "../../mock/carrousel";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carrousel = (autoPlay = true) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedTitle, setSelectedTitle] = useState(title[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewContent(selectedIndex, images);
      selectNewContent(selectedIndex, title);
    }, 10000);
    return () => clearInterval(interval);
  });

  const selectNewContent = (index, content, next = true) => {
    const condition = next
      ? selectedIndex < content.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : content.length - 1;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
    setSelectedTitle(title[nextIndex]);
  };

  const previous = () => {
    selectNewContent(selectedIndex, images, false);
    selectNewContent(selectedIndex, title, false);
  };

  const next = () => {
    selectNewContent(selectedIndex, images);
    selectNewContent(selectedIndex, title);
  };

  return (
    <section className={estilos.container}>
      <article className={estilos.carrouselContainer}>
        <div className={estilos.textContainer}>
          <h2>{selectedTitle}</h2>
        </div>
        <div className={estilos.carrouselImgContainer}>
          <button className={estilos.button} onClick={previous}>
            <GrPrevious size={50} />
          </button>
          <img className={estilos.carrouselImg} src={selectedImage[0]} alt="" />
          <img className={estilos.carrouselImg} src={selectedImage[1]} alt="" />
          <img className={estilos.carrouselImg} src={selectedImage[2]} alt="" />
          <button className={estilos.button} onClick={next}>
            <GrNext size={50} />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Carrousel;
//VER COMO CARAJO HACER FADE DE TODAS LAS TARJETAS CADA VEZ QUE LAS TENGO QUE CAMBIAR
