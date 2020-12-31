import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.52%, #000000 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.74)),
    linear-gradient(0deg, rgba(255, 0, 77, 0.71), rgba(255, 0, 77, 0.71)),
    url('/img/background-home-min.jpg') no-repeat;
  background-blend-mode: normal, saturation, overlay, normal;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const VoltarPagina = styled(motion.div)`
  position: fixed;
  top: 0;
  margin-top: 50px;
  transform: rotate(180deg);

  div {
    cursor: pointer;
  }
`;

export const Texto = styled(motion.div)`
  max-width: 652px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  span {
    font-weight: bold;
  }

  @media (max-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
    max-width: 100%;
    width: 100%;
  }
`;

export const Imagem = styled(motion.div)`
  max-width: 597.41px;

  @media (max-width: 1200px) {
    visibility: hidden;
    display: none;
  }
`;

export const ProximaPagina = styled(motion.div)`
  position: fixed;
  bottom: 0;
  margin-bottom: 50px;

  div {
    cursor: pointer;
  }
`;
