import Lottie from 'react-lottie';
import Link from 'next/link';
import {
  Container,
  Wrapper,
  VoltarPagina,
  Texto,
  Imagem,
  ProximaPagina,
} from '../styles/pages/Sobre';

import arrowDown from '../public/img/arrow-down.json';
import coding from '../public/img/coding.json';

const Sobre: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <VoltarPagina>
          <Link href="/">
            <div>
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
            </div>
          </Link>
        </VoltarPagina>
        <Texto>
          <p>
            Atualmente estudando Analise e Desenvolvimento de Sistemas e tenho
            foco em me tornar um desenvolvedor fullstack. Estudo tecnologias que
            vão de encontro com meus objetivos (React.js, Typescript, Node.js,
            React Native). 👨‍💻 <br /> <br />
            Desde criança me perguntando "como aquilo funciona?", foi ai então
            que soube que era a programação que eu queria para mim. E cá estou,
            nesse mundo maravilhoso! 💜 <br /> <br />
            <span>Sempre em busca de novos conhecimentos.</span> 🚀👽
          </p>
        </Texto>
        <Imagem>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: coding,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </Imagem>
        <ProximaPagina>
          <Link href="/contato">
            <div>
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
            </div>
          </Link>
        </ProximaPagina>
      </Wrapper>
    </Container>
  );
};

export default Sobre;
