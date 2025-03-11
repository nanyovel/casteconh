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
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  color: ${Theme.primary.azulProfundo};
  padding: 5px;
`;
const Icono = styled.img`
  width: 40px;
`;
const Titulo = styled.h2``;
