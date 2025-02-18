import React from "react";
import styled, { keyframes } from "styled-components";
import Theme from "../../config/Theme";

export default function CarrucelMarcas({ invertido }) {
  const servicios = [
    {
      icono: "https://i.ibb.co/S4wms8vC/escalera.png",
      nombre: "Diseño de interiores",
    },
    {
      icono: "https://i.ibb.co/pB4vzhkf/inspeccion-de-ventanas.png",
      nombre: "Diseño de exteriores",
    },
    {
      icono: "https://i.ibb.co/HDCcKdwK/trabajadores.png",
      nombre: "Contruccion ligera",
    },
    {
      icono:
        "https://firebasestorage.googleapis.com/v0/b/breakkoi.firebasestorage.app/o/casteconh%2Fbulbo.png?alt=media&token=cf45769f-0083-4ea6-99b9-fe23e9cd549a",
      nombre: "Instalaciones electricas",
    },
    {
      icono: "https://i.ibb.co/Cp0dNvyw/climatizacion.png",
      nombre: "Climatizacion",
    },
    {
      icono: "https://i.ibb.co/PZDZc8cN/proteccion.png",
      nombre: "Materiales asepticos",
    },
    {
      icono: "https://i.ibb.co/fzpgWjT9/muro.png",
      nombre: "Revestimientos asepticos.",
    },
    {
      icono: "https://i.ibb.co/fzpgWjT9/muro.png",
      nombre: "Revestimientos decorativos.",
    },
  ];

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
  height: 100px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${Theme.config.sombra};

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
