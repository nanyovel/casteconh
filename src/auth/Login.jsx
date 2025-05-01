import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TituloPage from "../components/TituloPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { BotonGeneral, InputGeneral } from "../components/ElementosGenerales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { autenticar } from "../firebase/firebaseConfig";
import { ModalLoading } from "../components/ModalLoading";

export default function Login({ userMaster }) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  auth.languageCode = "es";
  const [autenticado, setAunteticado] = useState(false);
  const [datosParseados, setDatosParseados] = useState(false);
  const [dispatchAlerta, setDispatchAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  useEffect(() => {
    let continuarAqui = true;
    setAunteticado(true);
    if (auth.currentUser?.emailVerified == true) {
      continuarAqui = false;
      navigate("/");
    } else if (auth.currentUser?.emailVerified == false) {
      continuarAqui = false;
      navigate("/");
    }
    if (continuarAqui) {
      setDatosParseados(true);
    }
  }, [auth.currentUser, navigate]);

  const initialDatos = {
    correo: "",
    password: "",
  };
  const [datos, setDatos] = useState({
    ...initialDatos,
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Si existe algun campo vacio
    let correoParsed = datos.correo.replace(" ", "");
    if (correoParsed == "" || datos.password == "") {
      setMensajeAlerta("Llena todos los campos.");
      setTipoAlerta("error");
      setDispatchAlerta(true);
      return;
    }
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(
        autenticar,
        correoParsed,
        datos.password
      );
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-credential":
          setMensajeAlerta("Datos incorrectos.");
          setTipoAlerta("error");
          setDispatchAlerta(true);
          break;
        case "auth/invalid-email":
          setMensajeAlerta("Email no existe.");
          setTipoAlerta("error");
          setDispatchAlerta(true);
          break;
        default:
          setMensajeAlerta("Error con la base de datos");
          setTipoAlerta("error");
          setDispatchAlerta(true);
          break;
      }
      setIsLoading(false);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [hasAlerta, setHasAlerta] = useState(false);
  return (
    <>
      <Header userMaster={userMaster} />

      <CajaContenido>
        <TituloPage titulo="Inicio de sesion" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <WrapInputs>
            <CajaInput>
              <TituloInput>Correo electronico</TituloInput>
              <Input
                value={datos.correo}
                onChange={(e) => handleInputs(e)}
                name="correo"
                placeholder="Email"
                type="text"
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Contraseña</TituloInput>
              <CajaInternaInput>
                <Input
                  value={datos.password}
                  onChange={(e) => handleInputs(e)}
                  name="password"
                  placeholder="Contraseña"
                  type={showPassword ? "text" : "password"}
                />
                <CajaEye>
                  <IconoEye
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </CajaEye>
              </CajaInternaInput>
            </CajaInput>
            {hasAlerta && (
              <CajaErrorAlEnviar>
                <Parrafo className="danger">{mensajeAlerta}</Parrafo>
              </CajaErrorAlEnviar>
            )}

            <CajaInput className="btn">
              <BtnSimple type="submit" onClick={(e) => handleSubmit(e)}>
                Iniciar sesion
              </BtnSimple>
            </CajaInput>
            <CajaInput className="links">
              <Enlaces to={"/registro"}>Registrarse</Enlaces>
              <Enlaces to={"/recuperar"}>Olvide mi contraseña</Enlaces>
            </CajaInput>
          </WrapInputs>
        </form>
        {isLoading && <ModalLoading />}
      </CajaContenido>
      <Footer />
    </>
  );
}

const CajaContenido = styled.div`
  min-height: 200px;
`;

const WrapInputs = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
  margin: auto;
  /* border: 1px solid ${Theme.secondary.azulBrillante}; */
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  @media screen and (max-width: 600px) {
    min-width: 200px;
    width: auto;
  }
`;
const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 8px;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const Enlaces = styled(Link)`
  color: ${Theme.neutral.neutral600};
  display: block;
  position: relative;
  transition: color 25ms;
  border-bottom: 3px solid transparent;
  &:hover {
    color: ${Theme.neutral.neutral500};
    border-bottom: 3px solid;
  }

  text-decoration: none;
`;
const TituloInput = styled.p`
  color: ${Theme.neutral.neutral650};
`;
const Input2 = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${Theme.secondary.azulBrillante};
  background-color: ${Theme.complementary.terracotaSuave};
  input::placeholder {
    color: gray; /* Cambia el color del placeholder */
    opacity: 1; /* Asegura que el color se vea bien en algunos navegadores */
  }
`;
const Input = styled(InputGeneral)``;
const BtnSimple = styled(BotonGeneral)`
  /* height: 40px; */
`;
const CajaEye = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  /* background-color: red; */
`;

const IconoEye = styled(FontAwesomeIcon)`
  color: ${Theme.primary.mostazaDorado};
  cursor: pointer;
`;
const CajaInternaInput = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const CajaErrorAlEnviar = styled.div`
  width: 100%;
`;
const Parrafo = styled.p`
  width: 100%;
  &.danger {
    color: red;
  }
`;
