import React from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";
import ImgGlasliner from "./../../../public/img/marcas/Glasliner.png";
import ImgPlysto from "./../../../public/img/marcas/logoPolysto.svg";
import ImgKeyRin from "./../../../public/img/marcas/keyresin-logo.png";

export default function Productos() {
  return (
    <Container>
      <Img src={ImgGlasliner} />
      <Img src={ImgPlysto} />
      <Img src={ImgKeyRin} />
      {/* <CajaSlider></CajaSlider> */}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  position: relative;
`;

const Img = styled.img`
  padding: 15px;
  width: 25%;
  height: 400px;
  object-fit: contain;
  box-shadow: ${Theme.config.sombra};
  transition: ease all 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const CajaSlider = styled.div`
  height: 550px;
  width: 400px;
  background-color: red;
  position: fixed;
  top: 80px;
  left: 20px;
`;
// const TituloSlide
