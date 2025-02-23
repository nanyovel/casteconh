import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgParallax from "./../../public/img/receid.jpg";
import ImgParallax2 from "./../../public/img/receid2.jpg";
import TituloPage from "../components/TituloPage";

export default function Nosotros() {
  return (
    <>
      <Header />
      <Container>
        <TituloPage titulo={"Sobre nosotros"} />

        <CajaParallax>
          <CapaFrosting>
            <CajaContenido>
              <WrapTextoImg>
                <CajaInterna className="cajaImg">
                  <Img src={ImgParallax} />
                </CajaInterna>
                <CajaInterna className="texto">
                  <TituloLess>Acerca de nuestra empresa</TituloLess>
                  <br />
                  <Parrafo>
                    En Casteconh, nos especializamos en la venta e instalación
                    de materiales asépticos para garantizar espacios limpios,
                    seguros y funcionales. Nuestra prioridad es ofrecer
                    soluciones innovadoras que cumplan con los más altos
                    estándares de calidad, brindando a nuestros clientes la
                    confianza y tranquilidad que necesitan.
                    <br />
                    <br />
                    Creemos que la responsabilidad es clave en nuestro trabajo,
                    por eso cumplimos con cada entrega de manera puntual y
                    eficiente, asegurando la durabilidad y eficacia de nuestras
                    instalaciones.
                  </Parrafo>
                  <br />
                  <Parrafo>
                    Apostamos por la innovación como un pilar fundamental,
                    adaptándonos a las necesidades cambiantes de la industria y
                    utilizando las tecnologías más avanzadas para optimizar
                    nuestros servicios. Nuestro equipo está compuesto por
                    profesionales altamente capacitados que trabajan con pasión
                    y dedicación para ofrecer soluciones a la medida de cada
                    cliente.
                  </Parrafo>
                  <br />
                </CajaInterna>
              </WrapTextoImg>
            </CajaContenido>
          </CapaFrosting>
        </CajaParallax>
        <CajaParallax className="dorado ">
          <CapaFrosting className="dorado ">
            <CajaContenido>
              <WrapTextoImg className="reverse">
                <CajaInterna className="cajaImg">
                  <Img src={ImgParallax2} />
                </CajaInterna>
                <CajaInterna className="texto">
                  <TituloLess>Historia</TituloLess>
                  <br />
                  <Parrafo>
                    Casteconh nace en el 2017 como una solución a la necesidad
                    de cubrir de manera eficiente los requerimientos de espacios
                    asépticos en diversos sectores. Desde el inicio, nuestro
                    objetivo ha sido ofrecer soluciones innovadoras que
                    garanticen higiene, seguridad y funcionalidad en cada
                    proyecto.
                    <br />
                    <br />
                    Hemos crecido a lo largo de los años, consolidándonos como
                    un referente en la industria. A medida que evolucionamos,
                    incorporamos nuevas tecnologías y mejoramos constantemente
                    nuestros procesos para asegurar que cada cliente reciba el
                    mejor servicio y productos que se adapten a sus necesidades.
                  </Parrafo>
                  <br />
                  <Parrafo>
                    Hoy en día, Casteconh se continúa expandiendo, manteniendo
                    su esencia, eficiencia e innovación. Nuestra historia es el
                    reflejo de un esfuerzo constante por superar expectativas y
                    contribuir al desarrollo de espacios más seguros.
                  </Parrafo>
                  <br />
                </CajaInterna>
              </WrapTextoImg>
            </CajaContenido>
          </CapaFrosting>
        </CajaParallax>

        <TituloLess className="filosofia">Filosofia organizacional</TituloLess>
        <CajaCultura>
          <InternaCultura>
            <TituloCultura>Mision</TituloCultura>
            <ParrafoCultura>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate placeat quam veritatis repellat delectus consequuntur
              adipisci omnis quia maiores labore quod blanditiis vel, doloribus
              distinctio at dignissimos, fuga facere suscipit.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae minima reprehenderit culpa modi necessitatibus labore
              nemo nostrum animi at, rerum consectetur praesentium fugiat
              dolorum aut esse porro nulla, facere inventore.
            </ParrafoCultura>
          </InternaCultura>
          <InternaCultura>
            <TituloCultura>Vision</TituloCultura>
            <ParrafoCultura>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate placeat quam veritatis repellat delectus consequuntur
              adipisci omnis quia maiores labore quod blanditiis vel, doloribus
              distinctio at dignissimos, fuga facere suscipit.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae minima reprehenderit culpa modi necessitatibus labore
              nemo nostrum animi at, rerum consectetur praesentium fugiat
              dolorum aut esse porro nulla, facere inventore.
            </ParrafoCultura>
          </InternaCultura>
          <InternaCultura>
            <TituloCultura>Valores</TituloCultura>
            <ParrafoCultura>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate placeat quam veritatis repellat delectus consequuntur
              adipisci omnis quia maiores labore quod blanditiis vel, doloribus
              distinctio at dignissimos, fuga facere suscipit.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae minima reprehenderit culpa modi necessitatibus labore
              nemo nostrum animi at, rerum consectetur praesentium fugiat
              dolorum aut esse porro nulla, facere inventore.
            </ParrafoCultura>
          </InternaCultura>
        </CajaCultura>
      </Container>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;
const BarraTitulo = styled.div`
  background-color: ${Theme.primary.mostazaDorado};
  height: 200px;
  width: 100%;
  align-content: center;
  margin: 100px 0;
`;
const Titulo = styled.h2`
  color: ${Theme.primary.azulProfundo};
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: lighter;
`;
const CajaParallax = styled.div`
  width: 100%;
  height: 600px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("/img/receid.jpg");
  margin-bottom: 100px;
  &.dorado {
    background-image: url("/img/receid2.jpg");
  }
`;
const CapaFrosting = styled.div`
  background-color: rgba(7, 14, 24, 0.868);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px); /* Aplica el desenfoque */
  -webkit-backdrop-filter: blur(1px);
  padding: 20px 120px;
  align-content: center;
  &.dorado {
    background-color: rgba(32, 23, 3, 0.762);
  }
`;

//

const CajaContenido = styled.div`
  width: 100%;
  min-height: 200px;
  @media screen and (max-width: 1100px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (max-width: 850px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  &.reverse {
    flex-direction: row-reverse;
    margin-bottom: 180px;
    @media screen and (max-width: 970px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 970px) {
    flex-direction: column-reverse;
  }
`;
const CajaInterna = styled.div`
  width: 48%;
  &.texto {
    align-content: center;
    @media screen and (max-width: 970px) {
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  &.cajaImg {
    position: relative;
    overflow: hidden;
    box-shadow: ${Theme.config.sombra};

    &:hover .hover {
      transform: translateX(0%);
    }
    @media screen and (max-width: 970px) {
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.svg {
    width: 80%;
  }
  &.vertical {
    /* width: 100%; */
  }
`;
const Parrafo = styled.p`
  line-height: 1.6rem;
  font-size: 1.2rem;
  color: white;
`;

const TituloLess = styled.h3`
  font-size: 2rem;
  text-decoration: underline;
  color: ${Theme.primary.mostazaDorado};
  /* color: white; */
  &.filosofia {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const CajaCultura = styled.div`
  width: 100%;
  display: flex;
  padding: 0 200px;
  gap: 10px;
`;
const InternaCultura = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TituloCultura = styled.h3`
  width: 100%;
  font-size: 2rem;
  color: ${Theme.primary.azulProfundo};
  text-align: center;
  text-decoration: underline;
  margin-bottom: 5px;
`;
const ParrafoCultura = styled.p`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  color: ${Theme.neutral.neutral600};
  line-height: 1.6rem;
  /* color: #282828; */
`;
