import React from "react";
import styled from "styled-components";
import {
  CajaTablaGroup,
  CeldaHeadGroup,
  CeldasBodyGroup,
  FilasGroup,
  TablaGroup,
} from "../../components/GrupoTabla";
import { Link } from "react-router";

export default function TablaUsuarios({ listaUsuarios }) {
  return (
    <CajaTabla>
      <Tabla>
        <thead>
          <Fila className="cabeza">
            <CeldaHead>N°</CeldaHead>
            <CeldaHead>Nombre</CeldaHead>
            <CeldaHead>Apellido</CeldaHead>
            <CeldaHead>Correo</CeldaHead>
          </Fila>
        </thead>
        <tbody>
          {listaUsuarios.map((item, index) => {
            return (
              <Fila
                key={index}
                className={`body
                           ${index % 2 ? "impar" : "par"}
                           
                           `}
              >
                <CeldaBody>{index + 1}</CeldaBody>
                <CeldaBody>{item.nombre}</CeldaBody>
                <CeldaBody>{item.apellido}</CeldaBody>
                <CeldaBody className="text-start">{item.correo}</CeldaBody>
              </Fila>
            );
          })}
        </tbody>
      </Tabla>
    </CajaTabla>
  );
}

const CajaTabla = styled(CajaTablaGroup)``;
const Tabla = styled(TablaGroup)``;
const Fila = styled(FilasGroup)``;
const CeldaHead = styled(CeldaHeadGroup)``;
const CeldaBody = styled(CeldasBodyGroup)`
  &.text-start {
    text-align: start;
  }
`;
const Enlace = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.margin {
    margin: 8px;
  }
`;
