import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";

export default function CardStats({ qty, img, titulo }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // Duración en milisegundos
    const increment = qty / (duration / 16); // Aumento por frame (asumiendo 60fps)

    const interval = setInterval(() => {
      start += increment;
      if (start >= qty) {
        start = qty;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16); // Aproximadamente 60fps

    return () => clearInterval(interval);
  }, [qty]);
  return (
    <Card>
      <Img src={img} />
      <QtyCreciente>{count}</QtyCreciente>
      <Titulo>{titulo}</Titulo>
    </Card>
  );
}

const Card = styled.div`
  width: 250px;
  height: 70%;
  border: 1px solid ${Theme.primary.azulProfundo};
  box-shadow: ${Theme.config.sombra};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 670px) {
    width: 170px;
    height: 170px;
  }
  @media screen and (max-width: 560px) {
    width: 80%;
  }
`;
const Img = styled.img`
  width: 40%;
  @media screen and (max-width: 560px) {
    width: 90px;
  }
`;
const QtyCreciente = styled.h2`
  font-size: 2.4rem;
  color: #22427a;
  color: #fff;
`;
const Titulo = styled.h2`
  color: ${Theme.primary.azulProfundo};
  font-size: 1.4rem;
  @media screen and (max-width: 850px) {
    font-size: 1rem;
  }
`;
