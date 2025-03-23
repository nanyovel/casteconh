import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ImgLogo from "./../../public/img/logo.png";
import { servicios } from "../lib/Servicios";
import { Link } from "react-router";

export default function Footer() {
  return (
    <Container>
      <Columna>
        <CajaSeccion>
          <Titulo>Servicios</Titulo>
          <Lista>
            {servicios.map((ser, index) => {
              return (
                <Item className="noStyle" key={index}>
                  {ser.nombre}
                </Item>
              );
            })}
          </Lista>
        </CajaSeccion>
      </Columna>
      <Columna className="logo">
        <Enlaces to={"/"} className="logo">
          <Img src={ImgLogo} />
          <TituloSara>Casteconh</TituloSara>
          <SubTituloSara>
            Soluciones asépticas para espacios que exigen higiene y seguridad.
          </SubTituloSara>
        </Enlaces>
        <CajaSeccion className="redes">
          <CajaRRSS>
            <Enlaces
              to={
                "https://api.whatsapp.com/send?phone=+18494877649&text=Hola,%20equipo%20Casteconh.%20Quisiera,%20por%20favor,%20ser%20asistido."
              }
            >
              <Icono icon={faWhatsapp} />
            </Enlaces>
            <Enlaces
              to={
                "https://www.instagram.com/casteconh?igsh=MTVrMXptemlneGJpNQ%3D%3D"
              }
            >
              <Icono icon={faInstagram} />
            </Enlaces>
            <Enlaces to={"https://www.facebook.com/casteconh"}>
              <Icono icon={faFacebook} />
            </Enlaces>
          </CajaRRSS>
        </CajaSeccion>
        <CajaSeccion className="border">
          <Titulo>Enlaces de interes</Titulo>
          <Lista>
            <Item>
              <Enlaces to={"/nosotros"}>¿Quiénes somos?</Enlaces>
            </Item>
            <Item>
              <Enlaces to={"/#porqueElefi"}>¿Por qué elegirnos?</Enlaces>
            </Item>
            <Item>
              <Enlaces to={"/nosotros"}>Historia de nuestra empresa</Enlaces>
            </Item>
            <Item>
              <Enlaces to={"/productos"}>Productos</Enlaces>
            </Item>
            <Item>
              <Enlaces to={"/servicios"}>Servicios</Enlaces>
            </Item>
          </Lista>
        </CajaSeccion>
        <CajaSeccion>
          {/* <Titulo>Enlaces de interes</Titulo> */}
          <Lista></Lista>
        </CajaSeccion>
      </Columna>
      <Columna className="sinBordes">
        <MapaGoogle
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0523470595954!2d-68.4428370229441!3d18.66164681964713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf3718e1b49321%3A0x9a8dd17d487c617b!2sCASTECONH!5e0!3m2!1ses-419!2sdo!4v1739970822753!5m2!1ses-419!2sdo"
          width="600"
          height="450"
          //   style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Columna>
    </Container>
  );
}
console.log(window.screen.width);
const Container = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${Theme.primary.mostazaDorado};
  display: flex;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    /* background-color: transparent; */
    border: 2px solid black;
  }
`;
const Enlaces = styled(Link)`
  font-size: 1.1rem;
  font-size: 15px;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  &.registrarse {
    border: 2px solid ${Theme.primary.mostazaDorado};
    border-radius: 4px;
    padding: 8px;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:target {
    text-decoration: underline;
    cursor: pointer;
  }

  &.log {
    display: flex;
    flex-direction: column;
  }
  &.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    margin-bottom: 15px;
    width: 100%;
    padding-top: 17px;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Columna = styled.section`
  width: 33%;
  /* border-left: 2px solid ${Theme.primary.rojoBrillante}; */
  border-right: 2px solid ${Theme.primary.rojoBrillante};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.sinBordes {
    border: none;
    @media screen and (max-width: 1050px) {
      border: 2px solid black;
    }
  }

  &.logo {
    background-color: ${Theme.primary.azulProfundo};
    /* padding: 10px; */
  }
  @media screen and (max-width: 1050px) {
    width: 90%;
    border: 2px solid black;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    border: none;
    padding: 0 15px;
  }
`;
const TituloSara = styled.h1`
  color: ${Theme.primary.azulProfundo};
  color: white;
  font-size: 2.5rem;
`;
const SubTituloSara = styled.h2`
  color: white;
  font-weight: 400;

  width: 100%;
  text-align: center;
  font-size: 1rem;
  white-space: wrap;
`;
const Titulo = styled.h3`
  color: white;
  width: 100%;
  text-align: start;
  /* font-weight: lighter; */
  font-size: 18px;
  /* font-weight: 400; */
  letter-spacing: 2px;
  margin-bottom: 14px;
  text-decoration: underline;
  /* font-size: 1rem; */
`;
const Img = styled.img`
  width: 30%;
  border-radius: 50%;
`;
const Lista = styled.ul`
  color: ${Theme.neutral.neutral600};
  color: white;
  /* border: 1px solid white; */
  width: 100%;
  padding-left: 30px;
  margin-bottom: 30px;
`;
const Item = styled.li`
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &.noStyle {
    list-style: circle;
    &:hover {
      text-decoration: none;
      cursor: auto;
    }
  }
`;

const MapaGoogle = styled.iframe`
  width: 95%;
  margin: 0;
  display: block;
  /* margin: auto; */
  height: 500px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
`;

const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  height: 60px;
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

  color: ${Theme.primary.mostazaDorado};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${Theme.secondary.mostazaClaro};
    color: ${Theme.neutral.neutral650};
  }
`;
const CajaSeccion = styled.div`
  &.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    margin-bottom: 15px;
  }
  &.redes {
    width: 100%;
    padding: 6px;
  }
  &.border {
    border: 1px solid white;
    border-radius: 4px;
    padding: 8px;
    width: 90%;
  }
`;
