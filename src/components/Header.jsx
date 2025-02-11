import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgLogo from "./../../public/img/logo.png";

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
            <Elementos>Home</Elementos>
            <Elementos>Servicios</Elementos>
            <Elementos>Productos</Elementos>
            <Elementos>Nosotros</Elementos>
            <Elementos>Contactos</Elementos>
            <Elementos>Cuenta</Elementos>
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
const Elementos = styled.li`
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
