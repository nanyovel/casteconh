import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Login from "../auth/Login";
import Registrarse from "../auth/Registrarse";
import ResetPassword from "../auth/ResetPassword";
import Service from "../pages/Service";

export default function MasterRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Service />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registrarse />} />
        <Route path="/recuperar" element={<ResetPassword />} />
      </Routes>
    </>
  );
}
