import React, { useState } from "react";
import styled from "styled-components";

import Theme from "../config/Theme";
import {
  BotonGeneral,
  InputGeneral,
  TextAreaGeneral,
} from "./ElementosGenerales";

export default function FormContact({ userMaster }) {
  const initialValue = {
    ...{},
  };
  const [datos, setDatos] = useState({ ...initialValue });
  const handleInput = (e) => {
    const { value, name } = e.target;
    setDatos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const enviarMensaje = async () => {
    try {
      const docRef = collection(db, "mensajes");
      await addDoc(docRef, {
        ...datos,
        createdAt: ES6AFormat(new Date()),
        timestamp: Timestamp.fromDate(new Date()),
        userId: userMaster?.id ? userMaster.id : "",
      });
      setDatos({ ...initialValue });
      setMensajeEnviado(true);
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      {mensajeEnviado && <Parrafo>Gracias, su mensaje sera atendido.</Parrafo>}
      <CajaInput>
        <TituloInput>Nombre</TituloInput>
        <Input
          type="text"
          value={datos.nombre}
          name="nombre"
          onChange={(e) => handleInput(e)}
          placeholder="Nombre"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Telefono</TituloInput>
        <Input
          type="text"
          onChange={(e) => handleInput(e)}
          name="telefono"
          value={datos.telefono}
          placeholder="Telefono"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Correo</TituloInput>
        <Input
          type="text"
          onChange={(e) => handleInput(e)}
          name="correo"
          value={datos.correo}
          placeholder="Correo"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Mensaje</TituloInput>
        <TextArea
          type="text"
          onChange={(e) => handleInput(e)}
          name="mensaje"
          value={datos.mensaje}
          placeholder="Mensaje"
        />
      </CajaInput>
      <BtnSimple onClick={() => enviarMensaje()}>Enviar</BtnSimple>
    </Container>
  );
}

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 100%;
  /* display: inline-block; */
  /* width: 400px; */
  margin: auto;
  border: 1px solid ${Theme.secondary.azulBrillante};
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    min-width: 300px;
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    width: 260px;
    min-width: 250px;
  }
`;
const CajaInput = styled.div`
  width: 100%;
`;
const TituloInput = styled.p`
  color: ${Theme.complementary.terracotaSuave};
  color: #d5a241;
  /* color: red; */
`;
const Input2 = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: white;
  background-color: ${Theme.complementary.terracotaSuave};
`;
const Input = styled(InputGeneral)``;
const TextArea = styled(TextAreaGeneral)``;
const TextArea2 = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 5px;
  color: white;
  background-color: ${Theme.complementary.terracotaSuave};
  min-height: 80px;
  resize: vertical;
`;
const BtnSimple = styled(BotonGeneral)`
  border: 1px solid ${Theme.primary.azulProfundo};
`;

const Parrafo = styled.p`
  color: ${Theme.primary.azulProfundo};
  font-weight: bold;
`;
