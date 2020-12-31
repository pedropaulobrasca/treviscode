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
  flex-direction: column;

  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const Imagem = styled(motion.div)``;

export const Descricao = styled(motion.p)`
  margin-top: 60px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #ffffff;

  span {
    color: #ff004d;
  }

  margin-bottom: 50px;
`;

export const ProximaPagina = styled(motion.div)`
  position: fixed;
  bottom: 0;
  margin-bottom: 50px;

  div {
    cursor: pointer;
  }
`;
