import React from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";

export default function PorqueElegirnos() {
  return (
    <Container>
      <Wrap>
        <i>
          <Texto>
            &ldquo;Somos una empresa con una amplia trayectoria y experiencia en
            construcción, ofrecemos soluciones integrales y personalizadas,
            utilizando tecnología de vanguardia, manteniendo altos estándares de
            calidad y sostenibilidad. Nos destacamos porque brindamos una
            atención personalizada y respaldo postventa, garantizando un
            acompañamiento continuo en cada etapa del proyecto.&rdquo;
          </Texto>
        </i>
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 60%;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
const Texto = styled.div`
  font-size: 1.6rem;
  color: ${Theme.neutral.neutral650};
  line-height: 2.5rem;
  font-style: italic;
  text-align: justify;
`;
