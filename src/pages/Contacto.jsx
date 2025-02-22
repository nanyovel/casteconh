import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <>
      <Header />
      <Container>
        <BarraTitulo>
          <Titulo>Contacto</Titulo>
        </BarraTitulo>
      </Container>
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
