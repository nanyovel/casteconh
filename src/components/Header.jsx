import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgLogo from "./../../public/img/logo.png";
import { Link, NavLink } from "react-router";

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
              <Enlaces to={"/contactos"}>Contactos</Enlaces>
            </Elementos>
            <Elementos>
              <Enlaces to={"/cuenta"}>Cuenta</Enlaces>
            </Elementos>
          </Lista>
        </NavList>
      </CajaInterna>
    </Container>
  );
}

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
  height: 100%;
  color: ${Theme.primary.mostazaDorado};
`;
const Lista = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;
const Elementos = styled.li``;

const Enlaces = styled(Link)`
  font-size: 1.1rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:target {
    text-decoration: underline;
    cursor: pointer;
  }
`;
