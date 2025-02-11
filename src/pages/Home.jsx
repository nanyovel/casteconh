import Theme from "../config/Theme";
import styled from "styled-components";

import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <Container>
      <Header absolute={true} />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;
