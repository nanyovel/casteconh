import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TituloPage from "../components/TituloPage";

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <Container>
        <TituloPage titulo={"Servicios"} />
        <WrapService>
          <CardService></CardService>
        </WrapService>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;
const WrapService = styled.div``;
const CardService = styled.div``;
