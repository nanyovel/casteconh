import React from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";

export default function Opiniones() {
  return (
    <Container>
      <Card>
        <CajaFoto>
          <Avatar src="https://i.ibb.co/gL30H0f8/mr-oficce.png" />
        </CajaFoto>
        <CajaTexto>
          <Nombre>Juan de la Rosa</Nombre>
          <Cargo>Gerente ventas Banco Popular</Cargo>
          <Review>
            Cumplieron con los plazos y el resultado fue impecable. Sin duda,
            volveremos a trabajar con Casteconh en futuros proyectos.
          </Review>
        </CajaTexto>
      </Card>
      <Card>
        <CajaFoto>
          <Avatar src="https://i.ibb.co/r2XtP4Sr/mr-oficce2.png" />
        </CajaFoto>
        <CajaTexto>
          <Nombre>Jose Perez</Nombre>
          <Cargo>Director Grl. Supermercados Bravo</Cargo>
          <Review>
            Estamos satisfechos con el servicio. El equipo demostró alto
            conocimiento en materiales asépticos. Nos asesoraron y la
            instalación fue impecable. La calidad de los mater. Volveremos a
            trabajar con ellos.
          </Review>
        </CajaTexto>
      </Card>
      <Card>
        <CajaFoto>
          <Avatar src="https://img.freepik.com/foto-gratis/retrato-mujer-pelo-gris-moda-jubilacion-posando-aislada-camiseta-negra-manteniendo-brazos-cruzados-estando-buen-humor-mirando-camara-sonrisa-segura-expresando-emociones-positivas_343059-1896.jpg" />
        </CajaFoto>
        <CajaTexto>
          <Nombre>Sandra Gonzalez</Nombre>
          <Cargo>Arquitecta de Cielos Acusticos</Cargo>
          <Review>
            Excelente servicio y productos de alta calidad. La instalación fue
            rápida y profesional. ¡100% recomendados!. Me encantó el trato y
            amabilidad del personal.
          </Review>
        </CajaTexto>
      </Card>
      <Card>
        <CajaFoto>
          <Avatar src="https://i.ibb.co/MxLPc3Kf/mr-young.png" />
        </CajaFoto>
        <CajaTexto>
          <Nombre>Miguel Angel Santana</Nombre>
          <Cargo>Director comercial Grupo Ramos</Cargo>
          <Review>
            Materiales duraderos y perfectos para garantizar un ambiente
            higiénico. El equipo fue muy atento y resolvió todas nuestras dudas.
          </Review>
        </CajaTexto>
      </Card>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;
const Card = styled.div`
  min-width: 40%;
  width: 40%;
  height: 250px;
  display: flex;
  box-shadow: ${Theme.config.sombra};
  border-radius: 4px;
  overflow: hidden;
`;
const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CajaFoto = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: start;
`;
const CajaTexto = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5px;
`;
const Nombre = styled.h2`
  color: ${Theme.primary.mostazaDorado};
`;
const Cargo = styled.h3`
  color: ${Theme.neutral.neutral650};
  margin-bottom: 10px;
`;
const Review = styled.p``;
