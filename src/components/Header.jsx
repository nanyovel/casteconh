import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgLogo from "./../../public/img/logo.png";
import { Link, NavLink } from "react-router";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";

export default function Header({ absolute, userMaster }) {
  const auth = getAuth();
  const usuario = auth.currentUser;
  return (
    <Container className={absolute ? "absolute" : ""}>
      <CajaInterna className="izq">
        <Enlaces to={"/"} className="logo">
          <CajaLogo>
            <Img src={ImgLogo} />
          </CajaLogo>
          <CajaNombreNegocio>
            <NombreNegocio>CASTECONH</NombreNegocio>
          </CajaNombreNegocio>
        </Enlaces>
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

            {!usuario && (
              <Elementos>
                <Enlaces to={"/login"}>Iniciar Sesion</Enlaces>
              </Elementos>
            )}
            {/* <Elementos className="registrarse">
              <Enlaces to={"/registro"} className="registrarse">
                Registrarse
              </Enlaces>
            </Elementos> */}
            {userMaster?.permisos.includes("accessDashboard") && (
              <Elementos>
                <Enlaces to={"/dashboard"}>Dashboard</Enlaces>
              </Elementos>
            )}
          </Lista>
          {userMaster && (
            <Enlaces className={"perfil"} to={"/perfil"}>
              <CajaPerfil>
                {/* {userMaster.urlFotoPerfil ? ( */}
                {userMaster ? (
                  <CajaAvatar>
                    <ImgAvatar src={userMaster.urlFotoPerfil} />
                    {/* <ImgAvatar src={'https://firebasestorage.googleapis.com/v0/b/caelossoficial.appspot.com/o/avatars%2FfotoPerfiljperez?alt=media&token=92293807-c372-490d-a633-9a14d7f38dcf'} /> */}
                  </CajaAvatar>
                ) : (
                  <CajaAvatar>
                    <ImgAvatar className="icon" src={Theme.config.userMale} />
                  </CajaAvatar>
                )}

                <CajaNombrePerfil>
                  <NombrePerfil>{userMaster.nombre}</NombrePerfil>
                </CajaNombrePerfil>
              </CajaPerfil>
            </Enlaces>
          )}
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
  padding: 0 100px;
  display: flex;
  opacity: 0.9;
  z-index: 100;
  &.absolute {
    position: absolute;
    top: 0;
  }
  @media screen and (max-width: 1100px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 900px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CajaInterna = styled.div`
  width: 50%;
  height: 100%;
  &.izq {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 800px) {
    height: 50%;
    width: auto;
  }
`;
const CajaLogo = styled.div`
  height: 100%;

  display: flex;
  overflow: hidden;
  justify-content: center;
  @media screen and (max-width: 800px) {
    /* height: 40%; */
    width: 50px;
  }
  align-items: center;
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
  @media screen and (max-width: 390px) {
    gap: 10px;
  }
  @media screen and (max-width: 340px) {
    gap: 8px;
  }
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
  &.logo {
    display: flex;
    text-decoration: none;
  }
  @media screen and (max-width: 340px) {
    font-size: 14px;
  }
`;

//
const CajaPerfil = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ease 0.2s all;

  @media screen and (max-width: 620px) {
    display: flex;
    /* flex-direction: row; */
    border: 1px solid black;
    margin: 5px;
    border-radius: 4px;
    padding: 3px;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: ${Theme.config.sombra};
  }
`;

const CajaAvatar = styled.div`
  width: 40px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;
const ImgAvatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  image-rendering: auto;

  border-radius: 50%;
`;
const CajaNombrePerfil = styled.div``;
const NombrePerfil = styled.h3`
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
`;
