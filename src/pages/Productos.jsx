import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TituloPage from "../components/TituloPage";
import { Products } from "../lib/Products";

export default function Productos() {
  const mitad1 = Products.filter((prod, index) => index < Products.length / 2);
  const mitad2 = Products.filter((prod, index) => index >= Products.length / 2);
  return (
    <>
      <Header />
      <Container>
        <TituloPage titulo={"Productos"} />
        <Contenido>
          <CajaInterna className="izq">
            {mitad1.map((produc, index) => {
              return (
                <Card key={index}>
                  <Icono src={produc.icono} />
                  <Titulo>{produc.nombre}</Titulo>
                </Card>
              );
            })}
          </CajaInterna>
          <CajaInterna className="der">
            {mitad2.map((produc, index) => {
              return (
                <Card key={index}>
                  <Icono src={produc.icono} />
                  <Titulo>{produc.nombre}</Titulo>
                </Card>
              );
            })}
          </CajaInterna>
        </Contenido>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-bottom: 130px;
`;
const Contenido = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  padding: 0 200px;
  @media screen and (max-width: 1150px) {
    padding: 0 75px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 650px) {
    padding: 0 25px;
    gap: 10px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    padding: 0 10px;
    gap: 0;
  }
`;
const CajaInterna = styled.div`
  width: calc(50% - 15px);
  min-height: 200px;
  &.izq {
    /* background-color: green; */
  }
  &.der {
    /* background-color: blue; */
  }
  @media screen and (max-width: 650px) {
    width: calc(50% - 10px);
  }
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  color: ${Theme.primary.azulProfundo};
  padding: 5px;
  @media screen and (max-width: 650px) {
    gap: 10px;
  }
`;
const Icono = styled.img`
  width: 40px;
`;
const Titulo = styled.h2`
  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
