import { styled } from "styled-components";
import React from "react";
import Theme from "../config/Theme";

export const BotonGeneral = styled.button`
  margin: 5px;
  cursor: pointer;

  border-radius: 5px;
  height: 35px;
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
    border: 1px solid black;
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
  width: 100%;

  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${Theme.neutral.neutral650};
  background-color: ${Theme.complementary.terracotaSuave};
  background-color: ${Theme.neutral.neutral200};
  &:focus {
    /* border: 1px solid ${Theme.secondary.azulBrillante}; */
  }
`;

export const TextAreaGeneral = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${Theme.neutral.neutral650};
  background-color: ${Theme.neutral.neutral200};
  min-height: 80px;
  resize: vertical;
  font-family: Arial, sans-serif;

  &:focus {
    /* border: 1px solid ${Theme.secondary.azulBrillante}; */
  }
`;
