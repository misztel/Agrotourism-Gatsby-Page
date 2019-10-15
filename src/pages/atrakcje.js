import React from 'react';
import styled from 'styled-components';
import H1 from '../components/H1/H1';
import SubPageLayout from '../layout/SubPage';
// import H2 from '../components/H2/H2';
// import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Kontakt from '../components/Footer/Kontakt';

const StyledTest = styled.div`
  width: 100%;
  display: block;
`;

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
    <Wrapper>
      <Row>
        <Container addmarg>
          <Column nopadd xs="12">
            <Paragraph dark bottom>
              Dla naszych Gości mamy wiele atrakcji zarówno dla osób chcących
              aktywnie spędzać czas oraz dla takich którzy potrzebują
              wyciszenia. Położenie oraz dostępne sprzęty pozwolą Państwu na
              udane spędzenie wolnego czasu.
            </Paragraph>
          </Column>
        </Container>
      </Row>
      <Row>
        <Container>
          <StyledTest>
            <Column className="atrakcje" nopadd xs="12" sm="6">
              <ul>
                <li>sala z piłkarzykami, bilardem, ping-pongiem, </li>
                <li>boiska do siatkówki, piłki nożnej, piłki plażowej</li>
                <li>pomost dla wędkarzy</li>
                <li>łowienie i wędzenie ryb</li>
                <li>biesiada przy ognisku z kiełbaskami i karkówką</li>
                <li>plac zabaw dla dzieci</li>
              </ul>
            </Column>
            <Column className="atrakcje" nopadd xs="12" sm="6">
              <ul>
                <li>korzystanie ze sprzętu wodnego (łódka, rower, kajak)</li>
                <li>boiska do siatkówki, piłki nożnej, piłki plażowej</li>
                <li>pomost dla wędkarzy</li>
                <li>łowienie i wędzenie ryb</li>
                <li>biesiada przy ognisku z kiełbaskami i karkówką</li>
                <li>plac zabaw dla dzieci</li>
              </ul>
            </Column>
          </StyledTest>
        </Container>
      </Row>
    </Wrapper>
    <Kontakt />
    <Footer />
  </>
);

export default AtrakcjePage;
