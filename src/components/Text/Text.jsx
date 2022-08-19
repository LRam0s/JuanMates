import React from "react";

export const Text = (prop) => {
  return (
    <section>
      <p className={prop.estilo}>{prop.text}</p>
    </section>
  );
};
