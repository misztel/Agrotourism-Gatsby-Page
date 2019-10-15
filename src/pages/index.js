import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import H1 from '../components/H1/H1';
import H2 from '../components/H2/H2';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../components/Container/Container';
import Widok from '../assets/images/widok.jpg';
import Widok2 from '../assets/images/widok2.jpg';
import Footer from '../components/Footer/Footer';
import Kontakt from '../components/Footer/Kontakt';

const StyledTest = styled.div`
  width: 100%;
  display: block;
`;

const IndexPage = () => (
  <>
    <Layout>
      <Header />
      <Row>
        <Container>
          <Column xs="12" sm="12" md="5" lg="5">
            <H1>Zacisze Nad Wodą</H1>
            <Paragraph>
              Nasze gospodarstwo agroturystyczne znajduję się w urokliwym
              miejscu na skraju Borów Tucholskich. Położone przy jeziorze
              Świekatowskim z wieloma atrakcjami na naszym terenie i w okolicy.
            </Paragraph>
            <Link to="/onas">
              <Button>O Nas</Button>
            </Link>
          </Column>
        </Container>
      </Row>
    </Layout>
    <Wrapper>
      <Row>
        <Container addmarg>
          <StyledTest>
            <Column xs="12" sm="6" md="5" lg="5">
              <img src={Widok} alt="Zachód słońca nad jeziorem" />
            </Column>
            <Column xs="12" sm="6" md="6" lg="6" marg>
              <H2>O nas</H2>
              <Paragraph dark>
                Nasze gospodarstwo agroturystyczne znajduje się w gminie i wsi
                Świekatowo. Gospodarstwo położone jest w malowniczej scenerii na
                skraju Borów Tucholskich i w pobliżu dużego jeziora
                Świekatowskiego, bogatego w różne gatunki ryb.
              </Paragraph>
              <Link to="/onas">
                <Button secondary>Więcej</Button>
              </Link>
            </Column>
          </StyledTest>
        </Container>
      </Row>
      <Row>
        <Container addmarg>
          <StyledTest>
            <Column xs="12" sm="6" md="6" lg="6">
              <H2>Okolica</H2>
              <Paragraph dark>
                Nasze gospodarstwo położone jest na skraju Borów Tucholskich,
                teren rozciąga się nad samym brzegiem jeziora. Ponadto w okolicy
                warto zobaczyć stare miasto Chełmno, klasztor w Busławiu, Muzeum
                Borów Tucholskich w Tucholi, Zamek Krzyżaków w Świeciu czy
                ścieżki dydaktyczne w Wozikowie.
              </Paragraph>
            </Column>
            <Column xs="12" sm="6" md="5" lg="5" marg>
              <img src={Widok2} alt="Piękn widok z pomostu" />
            </Column>
          </StyledTest>
        </Container>
      </Row>
    </Wrapper>
    <Kontakt />
    <Footer />
  </>
);

export default IndexPage;
