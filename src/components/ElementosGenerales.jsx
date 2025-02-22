import { styled } from "styled-components";
import React from "react";
import Theme from "../config/Theme";

export const BotonGeneral = styled.button`
  margin: 10px;
  cursor: pointer;

  border-radius: 5px;
  min-width: 100px;
  padding: 5px;
  border: 1px solid transparent;
  outline: none;
  font-size: 1rem;
  background-color: ${Theme.complementary.terracotaSuave};
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;
  color: white;

  &:hover {
    color: ${Theme.complementary.terracotaSuave};
    cursor: pointer;
    background-color: #ffffff;
  }

  &:active {
    color: white;
    background-color: #955124;
  }
  &:focus {
    border: 1px solid ${Theme.secondary.azulBrillante};
  }
`;
export const InputGeneral = styled.input`
  border: 1px solid ${Theme.neutral.neutral600};
  outline: none;
  height: 30px;
  border-radius: 4px;
  padding: 5px;
  background-color: ${Theme.neutral.blancoHueso};

  /* width: 200px; */
  min-width: 180px;
  &:focus {
    border: 1px solid ${Theme.secondary.azulBrillante};
  }
`;
