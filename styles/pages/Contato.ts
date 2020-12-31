import styled from 'styled-components';
import { motion } from 'framer-motion';
import { shade } from 'polished';

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

export const VoltarPagina = styled(motion.div)`
  position: fixed;
  top: 0;
  margin-top: 50px;
  transform: rotate(180deg);

  div {
    cursor: pointer;
  }
`;

export const ContatoImage = styled(motion.div)`
  max-width: 680.08px;
  margin-top: 100px;
`;

export const Content = styled(motion.div)`
  display: flex;
  width: 100%;

  svg {
    max-width: 641px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    & div,
    textarea,
    button {
      margin-top: 26px;
    }

    textarea {
      width: 340px;
      height: 149px;
      background: #00aeff;
      border-radius: 10px;
      border: 0;
      padding: 20px;
      color: #fff;
    }

    textarea::placeholder {
      color: #fff;
      font-size: 14px;
    }
  }
`;

export const Button = styled(motion.button)`
  width: 340px;
  height: 56px;
  background: #3a82f3;
  border-radius: 10px;
  border: 0;

  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #ffffff;

  transition: background 0.2s;

  &:hover {
    color: ${shade(0.5, '#fff')};
    background: ${shade(0.5, '#3a82f3')};
  }
`;

export const Input = styled(motion.div)`
  width: 340px;
  height: 56px;
  background: #00aeff;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 20px;
    width: 25px;
    height: 25px;
  }

  input {
    width: 100%;
    margin: 0 20px;
    background: none;
    border: 0;
    color: #fff;
    font-size: 14px;
  }

  input::placeholder {
    color: #fff;
    font-size: 14px;
  }
`;

export const Footer = styled(motion.div)``;
