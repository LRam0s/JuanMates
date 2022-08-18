import Carousel from "react-bootstrap/Carousel";
import mate1 from "./img/mate1.jpg";
import mate2 from "./img/mate2.jpg";
import mate3 from "./img/mate3.jpg";
import bombilla1 from "./img/bombilla1.jpg";
import bombilla2 from "./img/bombilla2.jpg";
import bombilla3 from "./img/bombilla3.jpg";
import termo1 from "./img/termo1.jpg";
import termo2 from "./img/termo2.jpg";
import termo3 from "./img/termo3.jpg";
import canasta1 from "./img/canasta1.jpg";
import canasta2 from "./img/canasta2.jpg";
import canasta3 from "./img/canasta3.jpg";

const Carrousel = () => {
  return (
    <section className="d-flex justify-content-center">
      <Carousel>
        <Carousel.Item interval={5000}>
          <a
            href="https://www.google.com.ar/"
            className="d-flex gap-3 flex-wrap"
          >
            <img src={mate1} alt="First slide" />
            <img src={mate2} alt="First slide" />
            <img src={mate3} alt="First slide" />
            <Carousel.Caption>
              <h3>Mates</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <a
            href="https://www.google.com.ar/"
            className="d-flex gap-3 flex-wrap"
          >
            <img src={bombilla1} alt="Second slide" />
            <img src={bombilla2} alt="Second slide" />
            <img src={bombilla3} alt="Second slide" />
            <Carousel.Caption>
              <h3>Bombillas</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <a
            href="https://www.google.com.ar/"
            className="d-flex gap-3 flex-wrap"
          >
            <img src={termo1} alt="Third slide" />
            <img src={termo2} alt="Third slide" />
            <img src={termo3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Termos</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <a href="https://www.google.com.ar/" className="d-flex gap-3">
            <img src={canasta1} alt="Second slide" />
            <img src={canasta2} alt="Second slide" />
            <img src={canasta3} alt="Second slide" />
            <Carousel.Caption>
              <h3>Canasta Matera</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Carrousel;
