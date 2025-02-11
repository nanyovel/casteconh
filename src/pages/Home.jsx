import Theme from "../config/Theme";
import styled from "styled-components";

import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container>
      <Header absolute={true} />
      <Hero />
      <Seccion>
        <CajaParrafo>
          <Parrafo1>
            Casteconh, la empresa líder en la venta e instalación de materiales
            asépticos en Republica Dominicana.
          </Parrafo1>
        </CajaParrafo>
      </Seccion>
      {/* <Seccion></Seccion> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
  align-items: center;
  background-color: ${Theme.primary.azulProfundo};
`;
const TituloSeccion = styled.h2`
  width: 100%;
  text-align: start;
  font-size: 3rem;
  text-decoration: underline;
  color: ${Theme.primary.mostazaDorado};
`;
const CajaParrafo = styled.div`
  width: 100%;
`;
const Parrafo1 = styled.p`
  font-size: 3rem;
  text-align: center;
  color: ${Theme.primary.mostazaDorado};
`;
const Punto = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${Theme.primary.azulProfundo};
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
`;
