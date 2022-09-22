import React from "react";
import estilos from "./Loader.module.css";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
  return (
    <div className={estilos.loading}>
      <PropagateLoader color="#2b2b2b" />
      <p>Cargando..</p>
    </div>
  );
};

export default Loader;
