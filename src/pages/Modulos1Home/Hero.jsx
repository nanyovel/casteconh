import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";
import ImgQuirofano1 from "./../../../public/img/sliderHome/quirofano1.jpg";
import ImgQuirofano2 from "./../../../public/img/sliderHome/quirofano.webp";
import ImgQuirofano3 from "./../../../public/img/sliderHome/quirofano2.jpg";
import ImgQuirofano4 from "./../../../public/img/sliderHome/quirofano3.webp";
import ImgQuirofano5 from "./../../../public/img/sliderHome/quirofano4.jpg";
import { BotonGeneral } from "../../components/ElementosGenerales";

export default function Hero() {
  const items = [
    {
      titulo: "Soluciones Asépticas",
      subTitulo:
        "Protege tu entorno con nuestros materiales de alta calidad, diseñados para cumplir con los estándares más exigentes de higiene y seguridad.",
      rutaImg: ImgQuirofano1,
    },
    {
      titulo: "Durabilidad",
      subTitulo:
        "Ofrecemos revestimientos y soluciones especializadas para mantener tus instalaciones limpias y libres de contaminación.",
      rutaImg: ImgQuirofano2,
    },
    {
      titulo: "Instalación Profesional",
      subTitulo:
        "Nuestro equipo experto garantiza una instalación impecable para entornos estériles, industriales y de salud.",
      rutaImg: ImgQuirofano3,
    },
    {
      titulo: "Ambientes Limpios",
      subTitulo:
        "Eleva los estándares de tu empresa con superficies fáciles de limpiar, resistentes y diseñadas para el cumplimiento normativo.",
      rutaImg: ImgQuirofano4,
    },
    {
      titulo: "Protección y Calidad",
      subTitulo:
        "Trabajamos con los mejores materiales para crear espacios libres de bacterias, ideales para hospitales, laboratorios e industrias alimentarias.",
      rutaImg: ImgQuirofano5,
    },
  ];
  const [imagenes, setImagenes] = useState([...items]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [claseColocar, setClaseColocar] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      // setHasFrosting(false);
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [imagenes]);

  // Frostin  inicial
  useEffect(() => {
    setTimeout(() => {
      setClaseColocar("colocar");
    }, 1000);
  }, [activeIndex]);

  return (
    <ContainerPadre>
      <Container>
        {imagenes.map((foto, index) => (
          <React.Fragment key={index}>
            <Imagen
              key={index}
              src={foto.rutaImg}
              alt={`Hero image ${index + 1}`}
              $isActive={index === activeIndex}
            />
            <Frosting className={index === activeIndex ? claseColocar : ""}>
              <CajaTexto $isActive={index === activeIndex}>
                <WrapLogoNombre>
                  <Titulo1>{foto.titulo}</Titulo1>
                </WrapLogoNombre>
                <WrapSubtitulo>
                  <SubTitulo>{foto.subTitulo}</SubTitulo>
                </WrapSubtitulo>
                <CajaBtn>
                  <BtnSimple>Mas info.</BtnSimple>
                </CajaBtn>
              </CajaTexto>
            </Frosting>
          </React.Fragment>
        ))}
      </Container>
    </ContainerPadre>
  );
}

const ContainerPadre = styled.div`
  /* padding-top: 100px; */
  height: 100vh;
  /* position: absolute; */
  /* top: 0; */
  /* background-color: black; */
  background-color: ${Theme.primary.azulSuave};
  width: 100vw;
  margin-bottom: 150px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const Imagen = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  width: 100%;
  height: 100%;
  transition: opacity 1.5s ease-in-out;
  object-fit: cover;
`;

// Cristal opaco
const Frosting = styled.div`
  width: 55%;
  height: 50%;
  background-color: #000;
  background-color: ${Theme.primary.mostazaDorado};
  opacity: 0;
  position: absolute;
  right: 50%;
  top: 25%;
  /* left: -400px; */
  /* background-color: #3498db; */
  /* clip-path: polygon(0% 0%, 30% 0%, 100% 100%, 0% 100%); */
  transition: all 1s ease;
  &.colocar {
    opacity: 0.9;
    right: -50px;
  }
  box-shadow: ${Theme.config.sombra};
`;

const CajaTexto = styled.div`
  width: 500px;
  min-height: 100px;
  /* background-color: blue; */
  position: absolute;
  top: ${(props) => (props.$isActive ? "100px" : "0")};
  left: 20px;
  /* bottom: 100%; */
  /* opacity: ${(props) => (props.$isActive ? 1 : 0)}; */
  transition: all 1.5s ease;
  /* transition: top 1.4s ease; */
  background-color: #000000b0;
  background-color: ${Theme.primary.azulProfundo};
  /* background-color: red; */
  border-radius: 5px;
  box-shadow: ${Theme.config.sombra};
  z-index: 100;
`;
const WrapLogoNombre = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: center;
  /* gap: 15px; */
  flex-direction: column;
`;

const Titulo1 = styled.h1`
  font-size: 3rem;
  /* font-weight: 200; */
  color: white;
  white-space: nowrap;
`;
const WrapSubtitulo = styled.div`
  width: 100%;
  min-height: 50px;
`;
const SubTitulo = styled.h2`
  /* background-color: black; */
  width: 100%;
  text-align: center;
  color: white;
  font-weight: 400;
`;
const CajaBtn = styled.div`
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
`;
const BtnSimple = styled(BotonGeneral)`
  z-index: 10000;
`;
