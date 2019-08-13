import React from 'react';
import Layout from '../layout/Layout';
import H1 from '../components/H1/H1';
import H2 from '../components/H2/H2';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../components/Container/Container';
import Widok from '../assets/images/widok.jpg';

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
            <Button>O Nas</Button>
          </Column>
        </Container>
      </Row>
    </Layout>
    <Row>
      <Container>
        <Column xs="12" sm="12" md="6" lg="6">
          <img src={Widok} alt="zachód słońca nad jeziorem" />
        </Column>
        <Column xs="12" sm="12" md="6" lg="6">
          <H2>Zacisze Nad Wodą</H2>
          <Paragraph dark>
            Nasze gospodarstwo agroturystyczne znajduję się w urokliwym miejscu
            na skraju Borów Tucholskich. Położone przy jeziorze Świekatowskim z
            wieloma atrakcjami na naszym terenie i w okolicy.
          </Paragraph>
          <Button secondary>Więcej</Button>
        </Column>
      </Container>
    </Row>
  </>
);

export default IndexPage;
