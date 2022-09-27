import React from "react";
import Space from "../Space/Space";
import estilos from "./About.module.css";

const About = () => {
  return (
    <>
      <Space />
      <section className={estilos.container}>
        <div className={estilos.title}>
          <h2
            style={{
              fontSize: 30,
              borderBottom: "solid #b7a986 2px",
              paddingBottom: "1rem",
            }}
          >
            Sobre nosotros
          </h2>
        </div>
        <div className={estilos.about1}>
          <img
            src="https://res.cloudinary.com/dpsc3qokx/image/upload/c_scale,w_600/v1664219768/JuanMates/canada_yd9to2.jpg"
            alt=""
          />
          <article
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p className={estilos.text}>
              Ubicada en el centro mismo de la Ciudad de Córdoba, muy cercano al
              río La Cañada, se encuentra JuanMates Arg. Su acceso privilegiado
              junto a sus años de historia la vuelven una de las visitas
              obligatorias al recorrer el centro de nuestra Ciudad. En nuestro
              showroom podrán encontrar las mejores selecciones de mates como
              también termos, canastas materas, bombillas, y demás elementos
              necesarios para un amante del mate.
            </p>
            <p className={estilos.text}>
              Impulsado por el afán de tomar mates, una tarde me di cuenta que
              mi mate estaba en mal estado. El pobre no solo tenía problemas
              estéticos, no daba más. No me quedo otra que cambiarlo. En la
              búsqueda de un buen mate para reemplazarlo, me inquietó todos los
              modelos que encontraba tanto en internet como en la calle. Es así,
              que después de una larga búsqueda, encontré el indicado. Sí, el
              indicado y lo digo de esta forma porque no solo me gustaba, sino
              que me pareció único para lo que conocía de mates.
            </p>
          </article>
        </div>
        <div className={estilos.about2}>
          <img
            src="https://res.cloudinary.com/dpsc3qokx/image/upload/c_scale,h_453/v1664219767/JuanMates/matecanada_iyexrc.jpg"
            alt=""
          />
          <article
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p className={estilos.text}>
              Como consumidor de mates es algo que lo disfruto mucho, con
              amigos, familia o con cualquier persona. Por eso cuando me
              preguntan “¿Por qué vendes ese tipo de productos?” La respuesta es
              sencilla. Vendemos productos artesanales, porque son únicos,
              exclusivos para aquellos experimentados en el mundo de los mates y
              también para los que empiezan esta tradición que nos acompaña hace
              décadas.
            </p>
            <p className={estilos.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              a tempore fugit! Vero aliquam ipsam recusandae nobis illo! Ad,
              autem. Ratione fugit ea hic nihil amet vitae cum temporibus
              quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quod eum, ducimus laboriosam magni delectus earum repudiandae id
              ab voluptate modi maiores porro, doloribus fugiat expedita impedit
              libero deserunt animi reprehenderit.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
