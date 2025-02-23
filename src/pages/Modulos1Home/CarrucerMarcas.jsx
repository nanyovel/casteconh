import React from "react";
import styled, { keyframes } from "styled-components";
import Theme from "../../config/Theme";
import { servicios } from "../../lib/Servicios";

export default function CarrucelMarcas({ invertido }) {
  const duplicatedService = [
    ...servicios,
    ...servicios,
    ...servicios,
    ...servicios,
    ...servicios,
    ...servicios,
    ...servicios,
  ];
  return (
    <Container>
      <LogoTrack $invertido={invertido}>
        {duplicatedService.map((servicio, index) => (
          <Logo key={index}>
            <Img src={servicio.icono} alt={`Logo ${index + 1}`} />
            <Titulo>{servicio.nombre}</Titulo>
          </Logo>
        ))}
      </LogoTrack>
    </Container>
  );
}
const Container = styled.div`
  /* overflow: hidden; */
  width: 100%;
  display: flex;
  align-items: center;
  height: 150px;
`;

const scroll = (invertido) => keyframes`
  0% {
    transform: translateX(0);
    /* transform: translateX(${invertido ? "0%" : "0"});; */
  }
  100% {
    /* transform: translateX(-100%); */
    transform: translateX(${invertido ? "100%" : "-100%"});
  }
`;
const LogoTrack = styled.div`
  display: flex;
  right: ${(props) => (props.$invertido ? "0" : "auto")};
  position: absolute;
  width: calc(200%);
  flex-direction: ${(props) => (props.$invertido ? "row-reverse" : "row")};
  animation: ${(props) => scroll(props.$invertido)} 25s linear infinite;
`;
// Cada logo
const Logo = styled.div`
  flex: 0 0 auto;
  width: 220px; /* Ajusta el tamaño del logo */
  height: 110px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${Theme.config.sombra};
  padding: 8px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
const Img = styled.img`
  width: 70px;
`;
const Titulo = styled.h2`
  font-size: 1rem;
  text-decoration: center;
  color: ${Theme.primary.mostazaDorado};
`;
