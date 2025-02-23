import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import TituloPage from "../components/TituloPage";
import Theme from "../config/Theme";
import { servicios } from "../lib/Servicios";

export default function Service() {
  return (
    <>
      <Header />
      <Container>
        <TituloPage titulo={"Servicios"} />
        <WrapCard>
          {servicios.map((ser, index) => {
            return (
              <LogoTrack key={index}>
                <Logo>
                  <Img src={ser.icono} />
                  <Titulo>{ser.nombre}</Titulo>
                </Logo>
              </LogoTrack>
            );
          })}
        </WrapCard>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;

  margin-bottom: 50px;
`;
const WrapCard = styled.div`
  padding: 0 45px;
  min-height: 300px;
  width: 100%;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div``;

const LogoTrack = styled.div`
  display: flex;
  /* flex: 1 1 calc(15% - 15px); */
  width: 20%;
  flex-basis: 1 1;
`;
// Cada logo
const Logo = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${Theme.config.sombra};
  padding: 8px;
`;
const Img = styled.img`
  width: 100%;
`;
const Titulo = styled.h2`
  font-size: 1.5rem;
  color: ${Theme.primary.azulProfundo};
  text-align: center;
`;
