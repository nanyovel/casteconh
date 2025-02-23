import Theme from "../config/Theme";
import styled from "styled-components";

import React from "react";
import Header from "../components/Header";
import Hero from "./Modulos1Home/Hero";
import Marcas from "./Modulos1Home/Marcas";
import CarrucelMarcas from "./Modulos1Home/CarrucerMarcas";
import Opiniones from "./Modulos1Home/Opiniones";
import Stats from "./Modulos1Home/Stats";
import Footer from "../components/Footer";
import BarraMensaje from "../components/BarraMensaje";

export default function Home() {
  return (
    <Container>
      <Header absolute={true} />
      <Hero />
      <br />
      <Seccion className="bgBlue">
        <CajaParrafo>
          <Parrafo1>
            Casteconh, la empresa líder en venta e instalación de materiales
            asépticos en Republica Dominicana.
          </Parrafo1>
        </CajaParrafo>
      </Seccion>
      <Seccion>
        <WrapTitulo>
          <CajaTitulo>
            <WrapCuadro>
              <CuadroAzul />
            </WrapCuadro>
            <TituloSeccion>Principales marcas:</TituloSeccion>
          </CajaTitulo>
          <Sub_Parrafo>
            Casteconh cuenta con materiales de éxito mundial, certificados
            internacionalmente por su higiene y seguridad. Estos productos
            garantizan alta calidad y confianza, asegurando así un entorno
            seguro y saludable para su uso, posicionando a Casteconh como líder
            en el mercado de Republica Dominicana.
          </Sub_Parrafo>
        </WrapTitulo>
        <WrapModulo className="marcas">
          <Marcas />
        </WrapModulo>
      </Seccion>
      <Seccion className="noPadding">
        <CajaTitulo className="padding">
          <WrapCuadro>
            <CuadroAzul />
          </WrapCuadro>
          <TituloSeccion>Nuestros servicios:</TituloSeccion>
        </CajaTitulo>
        <WrapModulo className="bgDorado">
          <CarrucelMarcas />
          <CarrucelMarcas invertido={true} />
        </WrapModulo>
      </Seccion>

      <Seccion className="noPadding">
        <CajaTitulo className="padding">
          <WrapCuadro>
            <CuadroAzul />
          </WrapCuadro>
          <TituloSeccion>Que dicen nuestros clientes?</TituloSeccion>
        </CajaTitulo>
        <WrapModulo>
          <Opiniones />
        </WrapModulo>
      </Seccion>
      <Seccion className="parallax">
        <WrapModulo className="parallax">
          <Stats />
        </WrapModulo>
      </Seccion>
      <BarraMensaje
        texto="¡Construimos tus sueños!
"
      />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;
const Seccion = styled.div`
  min-height: 300px;
  /* border: 1px solid red; */
  padding: 0 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  &.bgBlue {
    background-color: ${Theme.primary.azulProfundo};
  }
  &.noPadding {
    padding: 0;
  }
  &.parallax {
    padding: 0;
  }
`;
const CajaTitulo = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  /* background-color: blue; */
  &.padding {
    padding: 0 100px;
  }
`;
const WrapCuadro = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 4px;
`;
const CuadroAzul = styled.div`
  width: 50px;
  /* height: 50px; */
  height: 3rem;
  background-color: ${Theme.primary.azulProfundo};
  position: absolute;
  bottom: -7px;
`;
const WrapTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;
const TituloSeccion = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 3.5rem;
  /* text-decoration: underline; */
  color: ${Theme.primary.mostazaDorado};
  font-weight: 400;
  /* background-color: green; */
`;
const Sub_Parrafo = styled.p`
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: ${Theme.primary.azulProfundo};
`;
const CajaParrafo = styled.div`
  width: 100%;
`;
const Parrafo1 = styled.p`
  font-size: 3rem;
  text-align: center;
  color: ${Theme.primary.mostazaDorado};
`;
const WrapModulo = styled.div`
  width: 100%;
  &.bgDorado {
    height: 450px;
    width: 100%;
    background-color: ${Theme.primary.azulProfundo};
    padding: 70px 0;
  }
  &.marcas {
    background-image: repeating-linear-gradient(-45deg, #d5a241, #66522e 350px);
  }
`;
