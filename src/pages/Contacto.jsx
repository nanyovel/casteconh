import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";

export default function Contacto() {
  return (
    <>
      <Header />
      <Container>
        <BarraTitulo>
          <Titulo>Contacto</Titulo>
        </BarraTitulo>

        <CajaParallax>
          <CapaFrosting>
            <CajaContenido>
              <WrapTextoImg>
                <CajaInterna>
                  <MapaGoogle
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.0523470595954!2d-68.4428370229441!3d18.66164681964713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf3718e1b49321%3A0x9a8dd17d487c617b!2sCASTECONH!5e0!3m2!1ses-419!2sdo!4v1739970822753!5m2!1ses-419!2sdo"
                    // width="600"
                    // height="450"
                    //   style="border:0;"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </CajaInterna>
                <CajaInterna className="form">
                  <FormContact />
                </CajaInterna>
              </WrapTextoImg>
            </CajaContenido>
          </CapaFrosting>
        </CajaParallax>
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;
const BarraTitulo = styled.div`
  background-color: ${Theme.primary.mostazaDorado};
  height: 200px;
  width: 100%;
  align-content: center;
  margin: 100px 0;
`;
const Titulo = styled.h2`
  color: ${Theme.primary.azulProfundo};
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: lighter;
`;

const CajaParallax = styled.div`
  width: 100%;
  height: 600px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url("./../../public/img/receid.jpg");
  margin-bottom: 100px;
  &.dorado {
    background-image: url("./../../public/img/receid2.jpg");
  }
`;
const CapaFrosting = styled.div`
  background-color: rgba(7, 14, 24, 0.868);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px); /* Aplica el desenfoque */
  -webkit-backdrop-filter: blur(1px);
  padding: 20px 120px;
  align-content: center;
  &.dorado {
    background-color: rgba(32, 23, 3, 0.762);
  }
`;

const CajaContenido = styled.div`
  width: 100%;
  min-height: 200px;
  @media screen and (max-width: 1100px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (max-width: 850px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  justify-content: center;

  &.reverse {
    flex-direction: row-reverse;
    margin-bottom: 180px;
    @media screen and (max-width: 970px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 970px) {
    flex-direction: column-reverse;
  }
`;

const CajaInterna = styled.div`
  width: 48%;
  &.form {
    display: flex;
    align-items: center;
  }
  &.cajaImg {
    position: relative;
    overflow: hidden;
    box-shadow: ${Theme.config.sombra};

    &:hover .hover {
      transform: translateX(0%);
    }
    @media screen and (max-width: 970px) {
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.svg {
    width: 80%;
  }
  &.vertical {
    /* width: 100%; */
  }
`;
const Parrafo = styled.p`
  line-height: 1.6rem;
  font-size: 1.2rem;
  color: white;
`;
const CajaForm = styled.div`
  height: 100%;
  width: 100%;
`;
const MapaGoogle = styled.iframe`
  width: 100%;
  margin: 0;
  display: block;
  /* margin: auto; */
  height: 500px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
`;
