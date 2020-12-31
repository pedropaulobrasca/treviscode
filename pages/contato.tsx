import Lottie from 'react-lottie';
import Link from 'next/link';
import { FiMail, FiUser } from 'react-icons/fi';
import { MouseEvent } from 'react';

import {
  Container,
  Wrapper,
  VoltarPagina,
  ContatoImage,
  Content,
  Input,
  Button,
  Footer,
} from '../styles/pages/Contato';

import arrowDown from '../public/img/arrow-down.json';
import contactImage from '../public/img/contact-img.json';
import contact from '../public/img/contact.json';

const handleSubmit = (e: MouseEvent) => {
  e.preventDefault();
  alert('asdas');
};

const Contato: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <VoltarPagina
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Link href="/sobre">
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
        <ContatoImage>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: contact,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </ContatoImage>
        <Content>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: contactImage,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
          <form onSubmit={handleSubmit}>
            <Input>
              <FiUser />
              <input type="text" placeholder="Nome" />
            </Input>
            <Input>
              <FiMail />
              <input type="email" placeholder="E-mail" />
            </Input>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Mensagem"
            />
            <Button type="submit" whileHover={{ scale: 1.1 }}>
              Enviar
            </Button>
          </form>
        </Content>
        <Footer>
          <p>
            Feito com 💙 por <span>Trevis Code</span>
          </p>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Contato;
