import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgLogo from "./../../public/img/logo.png";
import { Link, NavLink } from "react-router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ absolute }) {
  return (
    <Container className={absolute ? "absolute" : ""}>
      <CajaInterna className="izq">
        <CajaLogo>
          <Img src={ImgLogo} />
        </CajaLogo>
        <CajaNombreNegocio>
          <NombreNegocio>CASTECONH</NombreNegocio>
        </CajaNombreNegocio>
      </CajaInterna>
      <CajaInterna className="der">
        <NavList>
          <Lista>
            <Elementos>
              <Enlaces to={"/"}>Inicio</Enlaces>
            </Elementos>
            <Elementos>
              <Enlaces to={"/servicios"}>Servicios</Enlaces>
            </Elementos>
            <Elementos>
              <Enlaces to={"/productos"}>Productos</Enlaces>
            </Elementos>
            <Elementos>
              <Enlaces to={"/nosotros"}>Nosotros</Enlaces>
            </Elementos>
            <Elementos>
              <Enlaces to={"/contacto"}>Contacto</Enlaces>
            </Elementos>
            {/* <Elementos>
              <Enlaces to={"/login"}>Iniciar Sesion</Enlaces>
            </Elementos> */}
            {/* <Elementos className="registrarse">
              <Enlaces to={"/registro"} className="registrarse">
                Registrarse
              </Enlaces>
            </Elementos> */}
          </Lista>
        </NavList>
      </CajaInterna>
    </Container>
  );
}
const Icono = styled(FontAwesomeIcon)`
  /* color: white; */
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${Theme.primary.azulProfundo};
  padding: 0 200px;
  display: flex;
  opacity: 0.9;
  z-index: 100;
  &.absolute {
    position: absolute;
    top: 0;
  }
`;
const CajaInterna = styled.div`
  width: 50%;
  height: 100%;
  &.izq {
    display: flex;
  }
`;
const CajaLogo = styled.div`
  height: 100%;
`;
const Img = styled.img`
  border-radius: 50%;
  height: 100%;
`;
const CajaNombreNegocio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NombreNegocio = styled.h1`
  color: ${Theme.primary.mostazaDorado};
  /* font-weight: 400; */
`;
const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${Theme.primary.mostazaDorado};
`;
const Lista = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;
const Elementos = styled.li`
  /* border: 1px solid red; */
  align-content: center;
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
`;
