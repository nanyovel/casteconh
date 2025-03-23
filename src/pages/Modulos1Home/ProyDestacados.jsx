import React from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";
import ImgQuirofano1 from "./../../../public/img/sliderHome/quirofano1.jpg";
import ImgQuirofano2 from "./../../../public/img/sliderHome/quirofano.webp";
import ImgQuirofano3 from "./../../../public/img/sliderHome/quirofano2.jpg";
import ImgQuirofano4 from "./../../../public/img/sliderHome/quirofano3.webp";
import ImgQuirofano5 from "./../../../public/img/sliderHome/quirofano4.jpg";

export default function ProyDestacados() {
  return (
    <Container>
      <Card>
        <CajaImg>
          <Img src={ImgQuirofano1} />
        </CajaImg>
        <CajaTitulo>
          <Titulo> Hard Rock Hotel & Casino Punta Cana</Titulo>
        </CajaTitulo>
      </Card>
      <Card>
        <CajaImg>
          <Img src={ImgQuirofano2} />
        </CajaImg>
        <CajaTitulo>
          <Titulo>Induveca Santiago</Titulo>
        </CajaTitulo>
      </Card>
      <Card>
        <CajaImg>
          <Img src={ImgQuirofano3} />
        </CajaImg>
        <CajaTitulo>
          <Titulo>Bravo Sarasota</Titulo>
        </CajaTitulo>
      </Card>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    gap: 5px;
  }
`;
const Card = styled.div`
  width: calc(25% - 10px);
  min-height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${Theme.config.sombra};
  transition: ease 0.1s all;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 3px 7px 11px 0px #d5a241;
  }
  @media screen and (max-width: 800px) {
    width: calc(33% - 5px);
  }
  @media screen and (max-width: 700px) {
    width: 55%;
  }
  @media screen and (max-width: 600px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const CajaImg = styled.div`
  width: 100%;
  height: 250px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CajaTitulo = styled.div`
  padding: 20px;
`;
const Titulo = styled.h2`
  color: ${Theme.primary.azulProfundo};
  font-size: 1.7rem;
`;
