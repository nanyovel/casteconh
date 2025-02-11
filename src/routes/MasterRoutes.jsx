import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";

export default function MasterRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
