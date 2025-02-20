import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";

export default function MasterRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </>
  );
}
