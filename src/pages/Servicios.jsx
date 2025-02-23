import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import TituloPage from "../components/TituloPage";

export default function Servicios() {
  return (
    <>
      <Header />
      <Container>
        <TituloPage titulo={"Servicios"} />
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;
