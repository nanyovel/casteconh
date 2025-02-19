import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ImgLogo from "./../../public/img/logo.png";

export default function Footer() {
  return (
    <Container>
      <Columna className="logo">
        <Img src={ImgLogo} />
        <TituloSara>Casteconh</TituloSara>
        <SubTituloSara>
          Soluciones asépticas para espacios que exigen higiene y seguridad.
        </SubTituloSara>
      </Columna>

      <Columna>
        <Titulo>Sobre Casteconh</Titulo>
        <Lista>
          <Item>¿Quienes somos?</Item>
          <Item>¿Porque elegirnos?</Item>
          <Item>¿Que dicen nuestros clientes?</Item>
          <Item>Historia de nuestra empresa</Item>
          <Item>Nuestro esquipo</Item>
          <Item>Filosofia organizacional</Item>
        </Lista>
      </Columna>

      <Columna>
        <Titulo>Enlaces de interes</Titulo>
        <Lista>
          <Item>Contactos</Item>
          <Item>Donde encontrarnos</Item>
          <Item>Registrate</Item>
          <Item>Preguntas frecuentes</Item>
          <Item>Quejas y reclamaciones</Item>
        </Lista>
        <Titulo>Redes sociales</Titulo>
        <CajaRRSS>
          <Icono icon={faYoutube} />
          <Icono icon={faInstagram} />
          <Icono icon={faLinkedin} />
          <Icono icon={faFacebook} />
        </CajaRRSS>
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

const Container = styled.footer`
  width: 100%;
  height: 500px;
  background-color: ${Theme.primary.mostazaDorado};
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Columna = styled.section`
  width: 25%;
  /* border-left: 2px solid ${Theme.primary.rojoBrillante}; */
  border-right: 2px solid ${Theme.primary.rojoBrillante};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.sinBordes {
    border: none;
  }

  &.logo {
    background-color: ${Theme.primary.azulProfundo};
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
  font-size: 1.2rem;
`;
const Titulo = styled.h3`
  color: ${Theme.primary.azulProfundo};
  width: 100%;
  text-align: start;
  /* font-weight: lighter; */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 14px;
  text-decoration: underline;
  /* font-size: 1rem; */
`;
const Img = styled.img`
  width: 50%;
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
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

  color: ${Theme.primary.azulProfundo};
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
