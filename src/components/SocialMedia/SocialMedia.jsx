import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTiktok } from "react-icons/fa";
import Button from "../Button/Button";
import estilos from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <section className={estilos.container}>
      <h2>Nuestras Redes</h2>
      <div className={estilos.socialMedia}>
        <article className={estilos.social}>
          <FaInstagramSquare size={60} />
          <a href="https://google.com">@Juanmatesarg</a>
        </article>
        <article className={estilos.social}>
          <FaFacebookSquare size={60} />
          <a href="https://google.com">@Juanmatesarg</a>
        </article>
        <article className={estilos.social}>
          <FaTiktok size={60} />
          <a href="https://google.com">@Juanmatesarg</a>
        </article>
      </div>
      <Button btnText="Contactate con nosotros" />
    </section>
  );
};

export default SocialMedia;
