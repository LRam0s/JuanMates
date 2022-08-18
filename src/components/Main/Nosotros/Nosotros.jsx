import React from "react";

const Nosotros = () => {
  return (
    <section className="d-flex justify-content-center">
      <div
        className="d-flex flex-column align-items-center justify-content-center gap-3 p-3"
        style={{
          maxWidth: "1400px",
          backgroundColor: "#b7a986",
          borderRadius: "10px",
        }}
      >
        <h2>¿Quienes somos?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          aliquam accusamus repellendus nesciunt nihil sit dicta, velit ratione
          corporis optio dignissimos laboriosam quis, a reprehenderit asperiores
          hic consequuntur! Illum, quia!
        </p>
        <a
          href=""
          className="btn"
          style={{ backgroundColor: "#1A181B", color: "white" }}
        >
          Ver más...
        </a>
      </div>
    </section>
  );
};

export default Nosotros;
