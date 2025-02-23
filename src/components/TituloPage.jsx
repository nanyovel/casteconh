import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";

export default function TituloPage({ titulo }) {
  return (
    <BarraTitulo>
      <Titulo>{titulo}</Titulo>
    </BarraTitulo>
  );
}

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
