import React from "react";
import Space from "../Space/Space";
import estilos from "./Faq.module.css";

const Faq = () => {
  return (
    <>
      <Space />
      <section className={estilos.container}>
        <section className={estilos.title}>
          <h2
            style={{
              fontSize: 30,
              borderBottom: "solid #b7a986 2px",
              paddingBottom: "1rem",
            }}
          >
            Preguntas Frecuentes
          </h2>
        </section>

        <div className={estilos.question}>
          <h4 className={estilos.subtitle}>Mates Personalizados</h4>
          <ul className={estilos.list}>
            <li>
              Realizamos grabados personalizados en mates con virolas de acero o
              alpaca, ya que son de la mejor calidad (no se oxidan ni desgastan)
              y el grabado perdura en el tiempo.
            </li>
            <li>Realizamos frases, nombres o fechas.</li>
            <li>
              Se puede añadir algún dibujo pequeño que entre en el tamaño de la
              virola, ej: un corazón,una pelota, un auto, etc, pedimos que
              tengan el dibujo vectorizado para poder grabar de lo contrario no
              realizamos el trabajo de editar imágenes. De pedirnos un motivo
              que no esté vectorizado no nos responsabilizamos por el resultado
              (vectorizado o no recomendamos no solicitar imágenes muy pequeñas
              o con muchos detalles).
            </li>
            <li>
              Los grabados personalizados los tenemos listos en 3 días hábiles,
              pedir con anticipación.
            </li>
            <li>
              Coordinar por medio de wpp o Instagram el tipo de letra y diseño
              del mate a personalizar, ante no especificar tipo de letra o
              diseño no nos responsabilizamos por el resultado del producto.
            </li>
            <li>
              FECHAS DE MAYOR DEMANDA (Ej: Día de la madre). Pedir con bastante
              tiempo de anticipación para poder cumplir con cada pedido a
              tiempo.
            </li>
          </ul>
        </div>
        <div className={estilos.question}>
          <h4 className={estilos.subtitle}>Envíos y entregas</h4>
          <span style={{ fontSize: "1.2rem" }}>
            Información para Ciudad de Córdoba
          </span>
          <ul className={estilos.list}>
            <li>
              Realizamos envíos a domicilio con cadetería dentro de Córdoba
              capital con fecha y hora a acordar con el cliente, aceptamos pago
              en efectivo en el momento, cadetería lleva el pedido listo para
              entregar, no lleva productos para elegir.
            </li>
            <li>
              Hacemos entregas en Lavalleja 45 Barrio centro, de 11:00 hs a
              19:00 hs en horario a acordar, de lunes a viernes, sábado de 13:00
              hs a 19:00 hs.
            </li>
            <li>
              Pueden enviar un cadete/comisionista a retirar su pedido y que
              abone en el momento, siempre en horario a acordar.
            </li>
          </ul>
          <span style={{ fontSize: "1.2rem" }}>
            Información para envíos nacionales e internacionales
          </span>
          <ul className={estilos.list}>
            <li>
              Realizamos envíos por medio de correo argentino, pueden elegir si
              retirar por sucursal o que el paquete les llegue a domicilio,
              estamos despachando con un máximo de 3 días hábiles.
            </li>
            <li>Envios a todo el mundo por medio de empresa DHL.</li>
          </ul>
        </div>
        <div className={estilos.question}>
          <h4 className={estilos.subtitle}>Cambios de producto</h4>
          <ul className={estilos.list}>
            <li>
              Una vez entregado el producto hay un máximo de 7 días para
              realizar cambios, siempre y cuando tenga constancia que este
              producto fue comprado en Juanmatesarg.
            </li>
            <li>
              Los cambios son realizados solo en el caso de que el producto
              posea algún tipo de falla que impida el uso del mismo.
            </li>
            <li>
              Los cambios son por el mismo producto/modelo,en caso de no haber
              stock disponible ofrecemos un producto por el mismo valor.
            </li>
            <li>
              Los cambios por modelos, tamaños o por defecto los hacemos
              solamente en nuestro showroom, Lavalleja 45 barrio centro (Córdoba
              capital) en horario y fecha a acordar, para constatar que
              efectivamente el producto posea un fallo proveniente de fabrica.
            </li>
            <li>
              Aquellos cambios que no puedan realizarse en Lavalleja 45 barrio
              centro (Córdoba capital) y dependan estos de un envío deberán ser
              abonados por quién adquiera el producto.
            </li>
            <li>
              Reembolso de dinero: La devolución de dinero ya sea por retracto
              de compra o por falla técnica se realizará dependiendo del método
              de pago utilizado en la compra y el monto a devolver.
            </li>
          </ul>
          <span style={{ fontSize: "1.2rem" }}>
            Para mayor especificaciones consultar Términos y condiciones.
          </span>
        </div>
        <div className={estilos.question}>
          <h4 className={estilos.subtitle}>Tamaño de mates</h4>
          <ul className={estilos.list}>
            <li>
              Los mates son de porongo (calabaza), al ser un fruto natural
              cambian de forma y de tamaños, ningún mate es igual al otro.
            </li>
            <li>
              Las fotos son de mates propios editadas de muestra de cada
              producto, pueden variar en sus tamaños, especificar si así se
              desea un tamaño en particular.
            </li>
          </ul>
        </div>
        <div className={estilos.question}>
          <h4 className={estilos.subtitle}>
            Información para compras mayoristas
          </h4>
          <ul className={estilos.list}>
            <li>
              La lista de precios mayorista se actualiza sin previo aviso,
              consultar el precio actual antes de pasarnos pedido o realizar el
              pago.
            </li>
            <li>
              Los productos artesanales de nuestra tienda varían en formas y
              tamaños, trabajamos con frutos naturales como por ej las calabazas
              y esto significa que ningúna es igual a la otra. Las imágenes que
              observa en nuestra tienda son referenciales al modelo que desee
              adquirir, lo cual no quiere decir que sea enviado exactamente el
              mismo (tamaño color y forma).
            </li>
            <li>
              El comprador puede elegir el producto por su cuenta en nuestro
              showroom en edificio en Lavalleja 45 barrio centro (Córdoba
              capital), atención en horario a acordar, de lo contrario se envia
              el stock disponible.
            </li>
            <li>
              En caso de querer adquirir algún producto con algún detalle en
              particular (tamaño,color,forma,etc) deberá ser informado antes de
              que se arme/cierre el pedido.
            </li>
            <li>
              Una vez realizada la lista del pedido y abonado el total del mismo
              tenemos un plazo de 10 días hábiles en entregar/enviar el pedido
              acordado.
            </li>
            <li>
              Las encomiendas son despachadas en cajas reforzadas, envueltas y
              cerradas de manera perfecta para que ningun producto sufra daño
              alguno y todo llegué a destino en perfectas condiciones, en caso
              de observar que el paquete recibido posee algún tipo de daño
              deberá realizar su reclamo al servicio de envíos dónde retiro
              dicho paquete.
            </li>
          </ul>
          <span style={{ fontSize: "1.2rem" }}>
            Nuestros productos son controlados al despacharse y se pide
            compromiso de ser controlados a la hora de recibir.
          </span>
        </div>

        <div className={estilos.question}>
          <h4 className={estilos.subtitle}>Términos y Condiciones</h4>
          <p className={estilos.text}>
            Las presentes disposiciones generales serán aplicables y regirán
            para poder operar en el/los sitio/s y/o bien hacer uso de los
            servicios que se ofrecen en a) https://juanmates.netlify.app/ b) en
            instagram, @https://www.instagram.com/juanmatesarg/. (Ambos en
            adelante, indistintamente, “el sitio” ). El usuario de este sitio,
            al ingresar al mismo, acepta y declara conocer los presentes
            Términos y Condiciones de uso del mismo, los cuales se detallan a
            continuación. De no aceptar estos Términos y Condiciones deberá
            abstenerse a continuar operando en el sitio. La vigencia de los
            presentes Términos y Condiciones se mantendrá mientras se encuentren
            los mismos publicados en “el sitio” pudiendo modificarlos "el sitio"
            sin previo aviso. En virtud de ello se recomienda al usuario que
            revise periódicamente los presentes Términos y Condiciones.
            Cualquier modificación que se introduzca estará vigente a partir de
            su publicación en “el sitio” y el uso del sitio con posterioridad a
            la modificación implica aceptación de dichos cambios por parte del
            usuario. Podrán operar en “el sitio” personas que sean capaces para
            contratar conforme lo establecido por el Código Civil y leyes
            aplicables (en adelante el usuario). No podrán hacer uso del sitio
            aquellas personas que no tengan dicha capacidad legal. Este sitio
            constituye una plataforma virtual a través de la cual cualquier
            usuario registrado en él puede comprar los productos que se ofrezcan
            en el mismo y que se encuentren disponibles, conforme las
            condiciones que a continuación se detallarán. La información
            contenida en la misma no implica recomendación ni asesoramiento de
            ningún tipo, siendo información de carácter de general. En el sitio
            pueden existir enlaces que permitan al usuario acceder a sitios de
            terceros. De existir dichos enlaces, los mismos no podrán
            interpretarse como asociación de ningún tipo entre el sitio y dichos
            terceros. El usuario declara conocer que el acceso a otros sitios
            implicará someterse a los términos y condiciones de los mismos, que
            podrán ser distintos al presente.
          </p>
          <span style={{ fontSize: "1.2rem" }}>
            REGLAS PARA EL USO DEL SITIO WEB: https://juanmates.netlify.app/
          </span>
          <span style={{ fontSize: "1.2rem" }}>
            El usuario y "el sitio" están de acuerdo en que la utilización del
            sitio web https://juanmates.empretienda.com.ar/ se sujetará a las
            siguientes reglas:
          </span>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Compra
            </span>
          </article>
          <p className={estilos.text}>
            Para poder realizar compras el usuario interesado deberá registrarse
            en el sitio consignando la totalidad de información personal que se
            requiera. El usuario se obliga a que la información que consignará
            en todo momento, tanto al registrarse en el sitio como al efectuar
            una compra, y/o en cualquier otra ocasión en que deba consignarse
            información, será correcta y fehaciente, comprometiéndose a
            actualizar la misma en caso de ser necesario, y haciéndose
            enteramente responsable por los daños y perjuicios que pudiera
            causar la inclusión de cualquier información incorrecta o imprecisa
            que consigne al registrarse, incluyendo cualquier gasto en que
            pudiera incurrir el sitio como consecuencia de ello. Asimismo, el
            usuario reconoce y acepta que las claves o contraseñas que consigne
            serán de uso personal y se obliga a no divulgar las mismas. En caso
            en que el usuario detecte el uso no autorizado por un tercero de su
            contraseña o clave, se obliga a notificar de inmediato al sitio de
            dicha circunstancia. El sitio ha sido diseñado para que cualquier
            consumidor pueda realizar en él compras de los productos que en el
            mismo se ofrecen sujeto al stock disponible al momento de la compra.
            En https://juanmates.netlify.app/ el usuario del sitio podrá
            consultar cómo realizar compras en él. Los unicos medios por los
            cuales Juanmatesarg comercializa productos es a través del sitio
            web, pagina de instagram y facebook. El usuario declara conocer y
            aceptar que al momento de confirmar la operación que efectúe está
            constituirá una operación de compra-venta, aplicándose a las mismas
            todas las normas legales correspondientes a ella.
          </p>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Disponibilidad de Stock
            </span>
          </article>
          <p className={estilos.text}>
            El consumidor declara conocer que en virtud del dinamismo del sitio
            y que en el mismo pueden estar efectuando operaciones muchos
            consumidores a la vez, puede suceder que al momento de concretar la
            operación el producto ya no se encuentre disponible. Asimismo, una
            compra podrá no ser concretada en función del stock de mercadería
            disponible y/o por no haber sido aprobada la operación por la
            entidad emisora de la tarjeta de crédito con la que el consumidor
            opere y/o por no obtener el sitio la aprobación de la empresa
            contratada a tal efecto a los fines de evaluar el riesgo crediticio
            del usuario, etc. Las razones referidas, han sido enumeradas al mero
            título ejemplificativo. Asimismo, el consumidor reconoce aceptar que
            el sitio podrá requerirle datos adicionales con el objeto de poder
            concretar la operación. En caso de no confirmarse la operación, el
            sitio comunicará al usuario de dicha circunstancia mediante el envío
            de un correo electrónico que será cursado por el sitio.
          </p>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Envíos y costos
            </span>
          </article>
          <p className={estilos.text}>
            Las formas de envío dependerán de la ubicación geográfica del
            domicilio de entrega del comprador o usuario. El usuario deberá
            recibir personalmente la mercadería adquirida exhibiendo su DNI como
            condición para recibirla, o bien podrá recibir la mercadería un
            tercero mediante la presentación del DNI del usuario comprador o de
            la persona que el usuario haya designado como receptor (como por
            ejemplo, si se tratara de un regalo). Al concretar la operación, el
            usuario se está obligando a revisar la mercadería al momento de
            recibirla en la locacion que éste consigne. La firma del remito
            correspondiente implicará la aceptación de la mercadería adquirida,
            sin perjuicio de los derechos que al usuario le asisten conforme la
            ley. <br />
            Durante el período de rebajas y promociones los pedidos pueden
            tardar un poco más en ser procesados. Los períodos de entrega son
            indicativos y, por consiguiente, no se consideran fechas límite
            estrictas. El mero hecho de haber excedido un período de entrega no
            le dará ningún derecho de compensación. <br />
            Dependiendo del tipo de compra que realice el usuario y las
            condiciones vigentes, la operación podrá tener o no costo de envío.{" "}
            <br />
            Cualquier costo adicional que se genere como consecuencia de errores
            en el ingreso de datos por parte del Usuario, así como también de
            problemas que se deban a su exclusiva actuación, correrán por cuenta
            del comprador.
          </p>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Forma de pago de los productos
            </span>
          </article>
          <p className={estilos.text}>
            Las formas de pago disponibles se encuentran detalladas en
            https://juanmates.netlify.app/ las cuales podrán variar a mera
            discreción del sitio. Cualquier variación al respecto será
            expresamente indicada en el referido link.
          </p>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Términos adicionales
            </span>
          </article>
          <p className={estilos.text}>
            Ocasionalmente Juanmatesarg podrá revisar, actualizar y/o agregar a
            los Términos y Condiciones de Uso del presente contrato provisiones
            adicionales relativas a áreas específicas o nuevos servicios que se
            proporcionen en o a través del sitio web
            https://juanmates.netlify.app/ los cuales serán publicados en las
            áreas específicas o nuevos servicios de dicho sitio para su lectura
            y aceptación. El usuario reconoce y acepta que dichos términos
            adicionales forman parte integrante del presente contrato.
          </p>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Terminación
            </span>
          </article>
          <p className={estilos.text}>
            Juanmatesarg se reserva el derecho, a su exclusiva discreción, y sin
            necesidad de aviso o notificación al usuario, para a) Terminar
            definitivamente el presente contrato y b) Descontinuar o dejar de
            publicar definitivamente el sitio web https://juanmates.netlify.app/
            sin responsabilidad alguna para Juanmatesarg.
          </p>
          <article>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Notificaciones
            </span>
          </article>
          <p className={estilos.text}>
            Todas las notificaciones vinculadas con los presentes Términos y
            Condiciones se considerarán notificadas a los usuarios con la mera
            publicación de las mismas en el sitio.
          </p>
        </div>
      </section>
    </>
  );
};

export default Faq;
