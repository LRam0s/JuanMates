import React from "react";

const Faq = () => {
  return (
    <section className="d-flex justify-content-center mt-5">
      <div
        className="d-flex flex-column align-items-center justify-content-center gap-3 p-3"
        style={{
          maxWidth: "1400px",
          backgroundColor: "#b7a986",
          borderRadius: "10px",
        }}
      >
        <h2>Preguntas frecuentes</h2>
        <p>
          Información sobre los mates personalizados, políticas de cambio de
          producto, tamaños de mates, modo de envíos y entregas, curado de
          mates, información para mayoristas. Todas esas respuestas y muchas más
          vas a encontrar en esta sección. Perfecto para quién quiere sacarse
          todas las dudas antes de comprar.
        </p>
        <a
          href="https://www.google.com.ar/"
          className="btn"
          style={{ backgroundColor: "#1A181B", color: "white" }}
        >
          Conocé las respuestas
        </a>
      </div>
    </section>
  );
};

export default Faq;
