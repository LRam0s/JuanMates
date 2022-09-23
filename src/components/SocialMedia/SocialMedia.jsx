import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import estilos from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <section className={estilos.container}>
      <h2>Nuestras Redes</h2>
      <div className={estilos.socialMedia}>
        <article className={estilos.social}>
          <FaInstagramSquare size={60} />
          <a href="https://www.instagram.com/juanmatesarg">@Juanmatesarg</a>
        </article>
        <article className={estilos.social}>
          <FaFacebookSquare size={60} />
          <a href="https://www.facebook.com/Juanmatesarg">@Juanmatesarg</a>
        </article>
        <article className={estilos.social}>
          <FaTiktok size={60} />
          <a href="https://www.tiktok.com/@juanmatesarg">@Juanmatesarg</a>
        </article>
      </div>
      <Link to="/contact">
        <Button btnText="Contactate con nosotros" />
      </Link>
    </section>
  );
};

export default SocialMedia;
