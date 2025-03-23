import React from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";
import ImgHardRock from "./../../../public/img/logos opiniones/1.jpg";
import ImgPuntaCana from "./../../../public/img/logos opiniones/2-punta cana.jpg";
import ImgBravo from "./../../../public/img/logos opiniones/3-bravo.jpg";
import ImgInduveca from "./../../../public/img/logos opiniones/4-induveca.jpg";
import ImgUnidos from "./../../../public/img/logos opiniones/5-almacenes unidos.jpg";
import ImgUCE from "./../../../public/img/logos opiniones/6-uce.jpg";
import Img1hardRock from "./../../../public/img/logos opiniones/optimizados/a1-hardRock.png";
import Img2PuntaCanaGroup from "./../../../public/img/logos opiniones/optimizados/a2-puntaCanaGrupo.png";
import Img3Bravo from "./../../../public/img/logos opiniones/optimizados/a3-bravo.png";
import Img4Induveca from "./../../../public/img/logos opiniones/optimizados/a4-induveca.png";
import Img5Unidos from "./../../../public/img/logos opiniones/optimizados/a5-almacenesUnidos.png";
import Img6UCR from "./../../../public/img/logos opiniones/optimizados/a6-uce222.png";

export default function OurClients() {
  const Imagenes = [
    ImgHardRock,
    ImgPuntaCana,
    ImgBravo,
    ImgInduveca,
    ImgUnidos,
    ImgUCE,
  ];
  const Imagenes2 = [
    Img1hardRock,
    Img2PuntaCanaGroup,
    Img3Bravo,
    Img5Unidos,
    Img4Induveca,
    Img6UCR,
  ];
  return (
    <Container>
      {Imagenes2.map((img, index) => (
        <Img key={index} src={img} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background-color: ${Theme.neutral.neutral650};
  padding: 120px 0;
  @media screen and (max-width: 500px) {
    padding: 0 0;
    flex-wrap: wrap;
    height: 400px;
    padding: 25px 0;
  }
`;

const Img = styled.img`
  width: 12.5%;
  /* max-height: 100%; */
  height: 150px;
  object-fit: contain;
  @media screen and (max-width: 500px) {
    width: 30%;
  }
`;
