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

export default function TablaItems({ listaArticulos }) {
  return (
    <CajaTabla>
      <Tabla>
        <thead>
          <Fila className="cabeza">
            <CeldaHead>N°</CeldaHead>
            <CeldaHead>Codigo*</CeldaHead>
            <CeldaHead>Descripcion</CeldaHead>
            <CeldaHead>U/M</CeldaHead>
            <CeldaHead>Categoria</CeldaHead>
            <CeldaHead>Precio</CeldaHead>
          </Fila>
        </thead>
        <tbody>
          {listaArticulos.map((item, index) => {
            return (
              <Fila
                key={index}
                className={`body
                           ${index % 2 ? "impar" : "par"}
                           
                           `}
              >
                <CeldaBody>{index + 1}</CeldaBody>
                <CeldaBody>
                  <Enlace to={"/articulos/" + item.codigo}>
                    {item.codigo}
                  </Enlace>
                </CeldaBody>
                <CeldaBody className="text-start">{item.descripcion}</CeldaBody>
                <CeldaBody>{item.unidadMedida}</CeldaBody>
                <CeldaBody>{item.cat}</CeldaBody>
                <CeldaBody>{item.precio}</CeldaBody>
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
