import React from 'react';
import H1 from '../components/H1/H1';
import SubPageLayout from '../layout/SubPage';
// import H2 from '../components/H2/H2';
// import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';

const AtrakcjePage = () => (
  <>
    <SubPageLayout>
      <Header />
      <Row>
        <Container>
          <Column nopadd xs="12">
            <H1 centred>Atrakcje</H1>
          </Column>
        </Container>
      </Row>
    </SubPageLayout>
    <Row>
      <Container addmarg>
        <Column nopadd xs="12">
          <Paragraph dark>
            Dla naszych Gości mamy wiele atrakcji zarówno dla osób chcących
            aktywnie spędzać czas oraz dla takich którzy potrzebują wyciszenia.
            Położenie oraz dostępne sprzęty pozwolą Państwu na udane spędzenie
            wolnego czasu.
          </Paragraph>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <Column className="atrakcje" nopadd md="6" xs="12">
          <ul>
            <li>sala z piłkarzykami, bilardem, ping-pongiem, </li>
            <li>boiska do siatkówki, piłki nożnej, piłki plażowej</li>
            <li>pomost dla wędkarzy</li>
            <li>łowienie i wędzenie ryb</li>
            <li>biesiada przy ognisku z kiełbaskami i karkówką</li>
            <li>plac zabaw dla dzieci</li>
          </ul>
        </Column>
        <Column className="atrakcje" nopadd md="6" xs="12">
          <ul>
            <li>korzystanie ze sprzętu wodnego (łódka, rower, kajak)</li>
            <li>boiska do siatkówki, piłki nożnej, piłki plażowej</li>
            <li>pomost dla wędkarzy</li>
            <li>łowienie i wędzenie ryb</li>
            <li>biesiada przy ognisku z kiełbaskami i karkówką</li>
            <li>plac zabaw dla dzieci</li>
          </ul>
        </Column>
      </Container>
    </Row>
    <Footer />
  </>
);

export default AtrakcjePage;
