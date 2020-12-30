import { motion } from 'framer-motion';
import Image from 'next/image';
import Lottie from 'react-lottie';
import Link from 'next/link';

import {
  Container,
  Wrapper,
  Imagem,
  Descricao,
  ProximaPagina,
} from '../styles/pages/Home';

import arrowDown from '../public/img/arrow-down.json';

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Imagem
          animate={{ x: [-1000, 0] }}
          transition={{ ease: 'easeOut', duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/img/me.png" alt="Pedro" width={182.65} height={165.27} />
        </Imagem>
        <Descricao
          animate={{ x: [1000, 0] }}
          transition={{ ease: 'easeOut', duration: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          👋 <br /> Olá, sou <span>Pedro</span>. <br /> Desenvolvedor Web e
          Mobile.
        </Descricao>
        <ProximaPagina>
          <Link href="/contato">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: arrowDown,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              height={50}
              width={60}
            />
          </Link>
        </ProximaPagina>
      </Wrapper>
    </Container>
  );
};

export default Home;
