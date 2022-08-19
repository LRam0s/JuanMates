import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTiktok } from "react-icons/fa";

const Social = () => {
  return (
    <section className="d-flex justify-content-center align-items-center flex-column gap-5 mt-5">
      <h2>Nuestras redes</h2>
      <div
        className="d-flex justify-content-evenly gap-5 "
        /* style={{ maxWidth: "1400px" }} */
      >
        <article className="d-flex flex-column gap-2 align-items-center">
          <FaInstagramSquare size={60} />
          <a href="https://www.google.com.ar/"> @juanmatesarg</a>
        </article>
        <article className="d-flex flex-column gap-2 align-items-center">
          <FaFacebookSquare size={60} />
          <a href="https://www.google.com.ar/"> @Juanmatesarg</a>
        </article>
        <article className="d-flex flex-column gap-2 align-items-center">
          <FaTiktok size={60} />
          <a href="https://www.google.com.ar/"> @juanmatesarg</a>
        </article>
      </div>
      <a
        href="https://www.google.com.ar/"
        className="btn"
        style={{ backgroundColor: "#1A181B", color: "white" }}
      >
        Contactate con nosotros
      </a>
    </section>
  );
};

export default Social;
