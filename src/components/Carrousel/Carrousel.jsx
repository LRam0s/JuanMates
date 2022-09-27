import React, { useEffect, useState } from "react";
import estilos from "./Carrousel.module.css";
import { images, title, link } from "../../mock/carrousel";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const Carrousel = (autoPlay = true) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedTitle, setSelectedTitle] = useState(title[0]);
  const [selectedLink, setSelectedLink] = useState(link[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewContent(selectedIndex, images);
      selectNewContent(selectedIndex, title);
      selectNewContent(selectedIndex, link);
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
    setSelectedLink(link[nextIndex]);
  };

  const previous = () => {
    selectNewContent(selectedIndex, images, false);
    selectNewContent(selectedIndex, title, false);
    selectNewContent(selectedIndex, link, false);
  };

  const next = () => {
    selectNewContent(selectedIndex, images);
    selectNewContent(selectedIndex, title);
    selectNewContent(selectedIndex, link);
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
          <Link
            to={`/products/category/${selectedLink}`}
            className={estilos.carrouselImgContainer}
          >
            <img
              className={estilos.carrouselImg}
              src={selectedImage[0]}
              alt=""
            />
            <img
              className={estilos.carrouselImg}
              src={selectedImage[1]}
              alt=""
            />
            <img
              className={estilos.carrouselImg}
              src={selectedImage[2]}
              alt=""
            />
          </Link>

          <button className={estilos.button} onClick={next}>
            <GrNext size={50} />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Carrousel;
