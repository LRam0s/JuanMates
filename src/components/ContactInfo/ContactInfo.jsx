import React from "react";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import estilos from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "4rem",
      }}
    >
      <h2>Información de contacto</h2>
      <section className={estilos.container}>
        <div className={estilos.mapContainer}>
          <iframe
            title="map"
            className={estilos.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.037161532358!2d-64.1942323843126!3d-31.41310220323748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432987f767c1d45%3A0xeb02e3e5c5c54a2f!2sJuan%20A.%20Lavalleja%2045%2C%20X5000KJB%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1664298527360!5m2!1ses!2sar"
          />
        </div>
        <div className={estilos.contactInfoContainer}>
          <article className={estilos.contactInfo}>
            <FaWhatsapp size={60} color={"green"} />
            <a href="https://api.whatsapp.com/send?phone=PPNNNNNNNNN">
              {" "}
              Hace click acá para chatear con nosotros
            </a>
          </article>
          <article className={estilos.contactInfo}>
            <FaInstagramSquare size={60} color={"#F56040"} />
            <a href="https://www.instagram.com/juanmatesarg">@Juanmatesarg</a>
          </article>
          <article className={estilos.contactInfo}>
            <FaFacebookSquare size={60} color={"blue"} />
            <a href="https://www.facebook.com/Juanmatesarg">@Juanmatesarg</a>
          </article>
          <article className={estilos.contactInfo}>
            <FaTiktok size={60} />
            <a href="https://www.tiktok.com/@juanmatesarg">@Juanmatesarg</a>
          </article>
        </div>
      </section>
    </section>
  );
};

export default ContactInfo;
