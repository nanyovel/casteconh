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
        <SubContainer>
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
        </SubContainer>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;

  margin-bottom: 50px;
`;
const SubContainer = styled.div`
  padding: 0 200px;
  @media screen and (max-width: 1100px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;
const WrapCard = styled.div`
  /* padding: 0 45px; */
  min-height: 300px;
  width: 100%;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;
const Card = styled.div``;

const LogoTrack = styled.div`
  display: flex;
  /* flex: 1 1 calc(15% - 15px); */
  width: 15%;
  flex-basis: 1 1;
  /* border: 1px solid red; */
  @media screen and (max-width: 1300px) {
    width: calc(25% - 15px);
  }
  @media screen and (max-width: 750px) {
    width: calc(33% - 15px);
    padding-bottom: 8px;
  }
  @media screen and (max-width: 650px) {
    width: calc(50% - 15px);
  }
  @media screen and (max-width: 600px) {
    width: calc(50% - 10px);
  }
`;
// Cada logo
const Logo = styled.div`
  /* margin: 0 15px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${Theme.config.sombra};
  /* padding: 8px; */
  width: 100%;
  @media screen and (max-width: 750px) {
    padding: 8px;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Titulo = styled.h2`
  font-size: 1.5rem;
  color: ${Theme.primary.azulProfundo};
  text-align: center;
  @media screen and (max-width: 1100px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
`;
