import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";

export default function BarraMensaje({ texto }) {
  return (
    <Container>
      <Texto>{texto}</Texto>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 80px;
  align-content: center;
  background-color: ${Theme.primary.azulProfundo};

  text-align: center;
  margin-bottom: 5px;
`;
const Texto = styled.h2`
  color: ${Theme.primary.mostazaDorado};
  color: white;
  font-size: 2.5rem;
`;
