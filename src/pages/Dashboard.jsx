import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TituloPage from "../components/TituloPage";
import Theme from "../config/Theme";

import { Link } from "react-router";
import { useDocByCondition } from "../lib/firebaseLibs";
import MenuPestannias from "../components/MenuPestannias";
import { BotonGeneral } from "../components/ElementosGenerales";
import { itemSchema } from "../schema/itemSchema";
import { ES6AFormat } from "../lib/FechaFormat";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import TablaItems from "./ModulosDashboard/TablaItems";
import TablaUsuarios from "./ModulosDashboard/TablaUsuarios";

export default function Dashboard({ userMaster }) {
  const [articulosDB, setArticulosDB] = useState([]);
  const [articulosDBSort, setArticulosDBSort] = useState([]);

  const [usuarios, setUsuarios] = useState([]);
  useDocByCondition("articulos", setArticulosDB);
  useDocByCondition("usuarios", setUsuarios);
  useEffect(() => {
    const newArray = articulosDB.sort(
      (a, b) => Number(a.codigo) - Number(b.codigo)
    );
    console.log(usuarios);
    setArticulosDBSort(newArray);
  }, [articulosDB, usuarios]);
  const [arrayOpciones, setArrayOpciones] = useState([
    {
      select: true,
      nombre: "Articulos",
      key: "articulos",
    },
    {
      select: false,
      nombre: "Add articulo",
      key: "addArticulo",
    },
    {
      select: false,
      nombre: "Usuarios",
      key: "usuarios",
    },
    {
      select: false,
      nombre: "Mensajes",
      key: "mensajes",
    },
  ]);

  const handlePestannias = (e) => {
    let index = Number(e.target.dataset.id);
    setArrayOpciones((prevOpciones) =>
      prevOpciones.map((opcion, i) => ({
        ...opcion,
        select: i === index,
      }))
    );
  };

  // const articulosParsed = ArticulosDBOficial.map((item) => {
  //   return {
  //     ...itemSchema,
  //     ...item,
  //     createdAt: ES6AFormat(new Date()),
  //     createdBy: userMaster.userName,
  //   };
  // });

  const [codigoCreado, setCodigoCreado] = useState(null);
  const crearItem = (codigo) => {
    const nuevoItem = {
      ...itemSchema,
      codigo: String(codigo),
      descripcion: "Nuevo articulo",
      isActived: true,
      createdAt: ES6AFormat(new Date()),
      createdBy: userMaster.userName,
    };
    const articulosCollection = collection(db, "articulos");
    console.log(articulosCollection);

    addDoc(articulosCollection, nuevoItem)
      .then(() => {
        console.log("Documento creado exitosamente");
        setCodigoCreado(codigo);
      })
      .catch((error) => {
        console.error("Error al crear el documento: ", error);
      });
  };

  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const crearCluster = async () => {
    const clusterCollection = collection(db, "grupoDeArticulos");
    try {
      const clusterCreado = await addDoc(clusterCollection, {
        ...clusterSchema,
      });
      setMensajeAlerta("ID creado: " + clusterCreado.id);
    } catch (error) {
      console.log(error);
      setMensajeAlerta("Error con la base de datos.");
    }
  };
  return (
    <>
      <Header userMaster={userMaster} />
      <TituloPage titulo={"Dashboard"} />
      <Contenedor>
        <CajaElements>
          <MenuPestannias
            handlePestannias={handlePestannias}
            arrayOpciones={arrayOpciones}
          />
          {mensajeAlerta && (
            <CajaAlerta>
              <TextoAlerta>{mensajeAlerta}</TextoAlerta>
            </CajaAlerta>
          )}
          {arrayOpciones.find((opcion) => opcion.select).key == "articulos" && (
            <TablaItems listaArticulos={articulosDBSort} />
          )}
          {arrayOpciones.find((opcion) => opcion.select).key == "usuarios" && (
            <TablaUsuarios listaUsuarios={usuarios} />
          )}
          {arrayOpciones.find((opcion) => opcion.select).key ==
            "addArticulo" && (
            <ContenedorAddArticulo>
              <BarraInternaAdditem>
                {!codigoCreado && (
                  <TextoInterno>
                    Proximo codigo a crear:{" "}
                    {articulosDBSort.length > 0
                      ? Number(
                          articulosDBSort[articulosDBSort.length - 1].codigo
                        ) + 1
                      : ""}
                  </TextoInterno>
                )}
                {codigoCreado ? (
                  <TextoInterno>
                    Codigo creado: {codigoCreado}
                    <Enlace
                      className="margin"
                      to={"/articulos/" + codigoCreado}
                    >
                      Ver articulo
                    </Enlace>
                  </TextoInterno>
                ) : (
                  ""
                )}
              </BarraInternaAdditem>
              <BarraInternaAdditem>
                <BotonGeneral
                  onClick={(e) =>
                    crearItem(
                      Number(
                        articulosDBSort[articulosDBSort.length - 1].codigo
                      ) + 1
                    )
                  }
                >
                  Crear item
                </BotonGeneral>
                <BotonGeneral onClick={crearCluster}>
                  Crear Cluster
                </BotonGeneral>
              </BarraInternaAdditem>
            </ContenedorAddArticulo>
          )}
        </CajaElements>
      </Contenedor>
      <Footer />
    </>
  );
}

const Contenedor = styled.div`
  width: 100%;
  min-height: 100px;
  margin-bottom: 100px;
`;
const CajaElements = styled.div`
  border: 1px solid ${Theme.secondary.azulMarino};
  width: 70%;
  margin: auto;
  min-height: 100px;
`;

export const Enlace = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.margin {
    margin: 8px;
  }
`;

const ContenedorAddArticulo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: auto;
  padding: 20px;
  border: 1px solid ${Theme.secondary.azulMarino};
  border-radius: 10px;

  background-color: ${Theme.secondary.azulMarino};
  color: ${Theme.secondary.blanco};
  font-size: 20px;
`;
const BarraInternaAdditem = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #0084ff;
  border: 1px solid black;
`;
const TextoInterno = styled.p`
  color: ${Theme.secondary.blanco};
  font-size: 20px;

  font-weight: 400;
  text-align: center;
  color: white;
`;

const CajaAlerta = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${Theme.primary.rojoCalido};
`;
const TextoAlerta = styled.p`
  color: white;
  font-size: 1.2rem;
`;
//
