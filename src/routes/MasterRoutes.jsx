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
import Productos from "../pages/Productos";
import { Perfil } from "../pages/Perfil";
import Dashboard from "../pages/Dashboard";
import ArticulosView from "../view/ArticulosView";

export default function MasterRoutes({ userMaster, dbArticulos }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home userMaster={userMaster} />} />
        <Route
          path="/nosotros"
          element={<Nosotros userMaster={userMaster} />}
        />
        <Route
          path="/contacto"
          element={<Contacto userMaster={userMaster} />}
        />
        <Route
          path="/servicios"
          element={<Service userMaster={userMaster} />}
        />
        <Route
          path="/productos"
          element={<Productos userMaster={userMaster} />}
        />

        <Route path="/perfil" element={<Perfil userMaster={userMaster} />} />
        <Route path="/login" element={<Login userMaster={userMaster} />} />
        <Route
          path="/registro"
          element={<Registrarse userMaster={userMaster} />}
        />
        <Route
          path="/recuperar"
          element={<ResetPassword userMaster={userMaster} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard userMaster={userMaster} />}
        />
        <Route
          path="/articulos/:id"
          element={
            <ArticulosView userMaster={userMaster} dbArticulos={dbArticulos} />
          }
        />
      </Routes>
    </>
  );
}
