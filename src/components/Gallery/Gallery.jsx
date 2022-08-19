import React from "react";
import gallery0 from "./img/gallery0.jpg";
import gallery1 from "./img/gallery1.jpg";
import gallery2 from "./img/gallery2.jpg";
import gallery3 from "./img/gallery3.jpg";
import gallery4 from "./img/gallery4.jpg";
import gallery5 from "./img/gallery5.jpg";
import gallery6 from "./img/gallery6.png";
import gallery7 from "./img/gallery7.jpg";
import gallery8 from "./img/gallery8.jpg";
import estilos from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className="d-flex justify-content-center flex-column align-items-center gap-4">
      <div className={estilos.galleryContainer}>
        <img className={estilos.gItem0} src={gallery0} alt="" />
        <img className={estilos.gItem1} src={gallery1} alt="" />
        <img className={estilos.gItem2} src={gallery2} alt="" />
        <img className={estilos.gItem3} src={gallery3} alt="" />
        <img className={estilos.gItem4} src={gallery4} alt="" />
        <img className={estilos.gItem5} src={gallery5} alt="" />
        <img className={estilos.gItem6} src={gallery6} alt="" />
        <img className={estilos.gItem7} src={gallery7} alt="" />
        <img className={estilos.gItem8} src={gallery8} alt="" />
      </div>
      <div>
        <a
          href="https://www.google.com.ar/"
          className="btn"
          style={{ backgroundColor: "#1A181B", color: "white" }}
        >
          Ver todos los productos
        </a>
      </div>
    </section>
  );
};

export default Gallery;
