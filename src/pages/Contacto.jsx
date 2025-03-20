import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import TituloPage from "../components/TituloPage";

export default function Contacto() {
  return (
    <>
      <Header />
      <Container>
        <TituloPage titulo={"Contacto"} />

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
  @media screen and (max-width: 970px) {
    height: auto;
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
  @media screen and (max-width: 970px) {
    padding: 20px 60px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 30px;
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
  @media screen and (max-width: 650px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  justify-content: center;

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
  @media screen and (max-width: 970px) {
    width: 90%;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
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
