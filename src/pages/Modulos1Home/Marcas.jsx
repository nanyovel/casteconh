import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";
import ImgGlasliner from "./../../../public/img/marcas/Glasliner.png";
import ImgPlysto from "./../../../public/img/marcas/logoPolysto.svg";
import ImgKeyRin from "./../../../public/img/marcas/keyresin-logo.png";
import { BotonGeneral } from "../../components/ElementosGenerales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Marcas() {
  const [sliderMostrar, setSliderMostrar] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollMax = 1650;
      const scrollMin = 800;
      if (scrollTop > scrollMax || scrollTop < scrollMin) {
        setSliderMostrar("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Img onClick={() => setSliderMostrar("glasliner")} src={ImgGlasliner} />
      <Img onClick={() => setSliderMostrar("polysto")} src={ImgPlysto} />

      <CajaGlasliner className={sliderMostrar == "glasliner" ? "mostrar" : ""}>
        <CajaTitulo>
          <TituloSlide>Glasliner</TituloSlide>
          <Xcerrar onClick={() => setSliderMostrar("")}>
            <Icono icon={faX} />
          </Xcerrar>
        </CajaTitulo>
        <Subtitulo>¿Que es?</Subtitulo>
        <Parrafo>
          Glasliner es un laminado plástico aséptico, que cumple con los más
          altos requisitos para recubrir, proteger y decorar.
        </Parrafo>
        <br />
        <Subtitulo>Principales usos</Subtitulo>
        <Lista>
          <Elementos>Plantas químicas</Elementos>
          <Elementos>Procesadora alimentos.</Elementos>
          <Elementos>Supermercados</Elementos>
          <Elementos>Restaurantes</Elementos>
          <Elementos>Hospitales</Elementos>
          <Elementos>Laboratorios</Elementos>
          <Elementos>Baños</Elementos>
        </Lista>
        <br />
        <Subtitulo>Ventajas</Subtitulo>
        <Lista>
          <Elementos>Higiene: Cero formacion de honos y bacterias.</Elementos>
          <Elementos>
            Bajo Mantenimiento: 100% lavable, fácil de limpiar y no
            requerimiento de pintura externa.
          </Elementos>
          <Elementos>Economía: Inversión a bajo coste.</Elementos>
        </Lista>
        <CajaBtn>
          <BtnSimple>Comprar</BtnSimple>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBtn>
      </CajaGlasliner>

      <CajaPolysto className={sliderMostrar == "polysto" ? "mostrar" : ""}>
        <CajaTitulo>
          <TituloSlide>Polysto</TituloSlide>
          <Xcerrar onClick={() => setSliderMostrar("")}>
            <Icono icon={faX} />
          </Xcerrar>
        </CajaTitulo>
        <Subtitulo>¿Que es?</Subtitulo>
        <Parrafo>
          Polysto es una marca de altos estandares a nivel mundial, encargada de
          la fabricacion de materiales asepticos de contruccion.
        </Parrafo>
        <br />
        <Subtitulo>Productos</Subtitulo>
        <Lista>
          <Elementos>Paredes asepticas</Elementos>
          <Elementos>Techos asepticos.</Elementos>
          <Elementos>Zocalos asepticos</Elementos>
          <Elementos>Soldaduras quimicas</Elementos>
          <Elementos>Otros</Elementos>
        </Lista>
        <br />
        <Subtitulo>Ventajas</Subtitulo>
        <Lista>
          <Elementos>Alta resistencia al impacto.</Elementos>
          <Elementos>Superficie fácil de limpiar, lisa y no porosa</Elementos>
          <Elementos>
            Resistente a productos químicos, contra agentes de limpieza
            agresivos y productos químicos como sal, ácidos, sangre, almidón y
            ácido láctico
          </Elementos>
          <Elementos>Sin espacios huecos.</Elementos>
          <Elementos>Instalación rápida.</Elementos>
        </Lista>
        <CajaBtn>
          <BtnSimple>Comprar</BtnSimple>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBtn>
      </CajaPolysto>
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
  background-color: ${Theme.primary.azulProfundo};

  background-color: #002050f4;
  position: fixed;

  z-index: 10;
  padding: 15px;
  box-shadow: ${Theme.config.sombra};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10px);
  transition: ease all 0.2s;
  top: 80px;
`;
const CajaGlasliner = styled(CajaSlider)`
  right: 0;
  left: auto;
  transform: translate(110%);

  opacity: 0.1;
  &.mostrar {
    opacity: 1;
    transform: translate(0%);
    right: 20px;
  }
`;
const CajaPolysto = styled(CajaSlider)`
  right: auto;
  left: 0;
  transform: translate(-110%);

  opacity: 0.1;
  &.mostrar {
    opacity: 1;
    transform: translate(0%);
    left: 20px;
  }
`;
const CajaTitulo = styled.div`
  position: relative;
`;
const TituloSlide = styled.h2`
  color: ${Theme.primary.mostazaDorado};
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 15px;
`;
const Xcerrar = styled.p`
  position: absolute;
  right: 0;
  top: 35%;
  border: 1px solid ${Theme.secondary.azulBrillante};
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: red;
  &:hover {
    border: 1px solid white;
    color: white;
  }
`;
const Icono = styled(FontAwesomeIcon)`
  color: inherit;
`;
const Parrafo = styled.p`
  color: #fff;
  padding-left: 20px;
`;
const Subtitulo = styled.h3`
  color: ${Theme.primary.mostazaDorado};
`;
const Lista = styled.ul`
  color: #fff;
  padding-left: 20px;
`;
const Elementos = styled.li``;
const CajaBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
const BtnSimple = styled(BotonGeneral)``;
