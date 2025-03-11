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

        {/* <CajaParallax>
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
        </CajaParallax> */}
        <CajaParallax className=" ">
          <CapaFrosting className=" ">
            <CajaContenido>
              <WrapTextoImg className="reverse">
                <CajaInterna className="cajaImg">
                  <Img src={ImgParallax2} />
                </CajaInterna>
                <CajaInterna className="texto">
                  <TituloLess>Historia</TituloLess>
                  <br />
                  <Parrafo>
                    CASTECONH SRL se fundó el 25 de Marzo de 2020, inicialmente
                    liderada por el Ing. Felipe Antonio Castro Ubiera, quien
                    prestaba servicios como persona física. La demanda creciente
                    de sus clientes exigió contar con más colaboradores, lo que
                    motivó la creación de la empresa. Está compuesta por cuatro
                    hermanos con profesiones diversas: ingeniería civil,
                    contabilidad, administración turística y seguridad
                    cibernética. CASTECONH ofrece productos y servicios de alta
                    calidad en el sector de la construcción, basados en
                    innovación, sostenibilidad y excelencia en el servicio.
                    <br />
                    <br />
                    CASTECONH SRL es una empresa dedicada a ofrecer servicios y
                    productos de calidad superior en la construcción. La empresa
                    se distingue por su enfoque innovador, utilizando
                    tecnologías avanzadas y prácticas sostenibles, lo que
                    asegura construcciones responsables con el medio ambiente.
                    Nuestro compromiso con la excelencia en el servicio se
                    refleja en la atención personalizada y productos de alta
                    calidad.
                  </Parrafo>
                  <br />

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
              Brindar soluciones innovadoras y de alta calidad en revestimientos
              para construcción, mejorando la estética, durabilidad y
              funcionalidad de los espacios. Nos enfocamos en la satisfacción de
              nuestros clientes mediante el uso de materiales sostenibles,
              tecnología avanzada y un equipo de profesionales altamente
              capacitados. Buscamos contribuir al desarrollo del sector con
              prácticas responsables y eficientes, garantizando excelencia en
              cada proyecto.
            </ParrafoCultura>
          </InternaCultura>
          <InternaCultura>
            <TituloCultura>Vision</TituloCultura>
            <ParrafoCultura>
              Ser la empresa líder en soluciones de revestimiento, ofreciendo
              productos y servicios innovadores y sostenibles que transformen
              los espacios con calidad, eficiencia y diseño. Nos comprometemos a
              superar las expectativas de nuestros clientes a través de
              tecnología avanzada, materiales de alta durabilidad y un equipo
              altamente capacitado, contribuyendo al desarrollo de proyectos
              arquitectónicos modernos y funcionales.
            </ParrafoCultura>
          </InternaCultura>
          <InternaCultura>
            <TituloCultura>Valores</TituloCultura>
            <Lista>
              <Elemento>Calidad</Elemento>
              <Elemento>Innovación</Elemento>
              <Elemento>Compromiso</Elemento>
              <Elemento>Sostenibilidad</Elemento>
              <Elemento>Trabajo en equipo</Elemento>
              <Elemento>Seguridad</Elemento>
              <Elemento>Honestidad</Elemento>
            </Lista>
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
  text-align: justify;
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
  width: 33%;
  display: flex;
  justify-content: start;
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
  text-align: justify;
  color: ${Theme.neutral.neutral600};
  line-height: 1.6rem;
  /* color: #282828; */
`;
const Lista = styled.ul`
  text-align: start;
  padding-left: 35%;
  width: 100%;
  font-size: 1.2rem;
  text-align: justify;
  color: ${Theme.neutral.neutral600};
  line-height: 1.6rem;
`;
const Elemento = styled.li``;
