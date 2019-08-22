import React from 'react';
import H1 from '../components/H1/H1';
import H2 from '../components/H2/H2';
import SubPageLayout from '../layout/SubPage';
// import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../components/Container/Container';

const OnasPage = () => (
  <>
    <SubPageLayout>
      <Header />
      <Row>
        <Container>
          <Column nopadd xs="12">
            <H1 centred>O Nas</H1>
          </Column>
        </Container>
      </Row>
    </SubPageLayout>
    <Row>
      <Container addmarg>
        <Column nopadd xs="12">
          <H2>Położenie</H2>
          <Paragraph dark>
            Nasze gospodarstwo agroturystyczne znajduje się w gminie i wsi
            Świekatowo niedalego, bo ok. 30 km od Świecia. Gospodarstwo położone
            jest w malowniczej scenerii na skraju Borów Tucholskich i w pobliżu
            dużego jeziora świekatowskiego. bogatego w różne gatunki ryb.
            Kilkaset metrów od gospodarstwa znajduje się plaża gdzie można kąpać
            się i zadbać w słońcu o piękny kolor swojego ciała. Wszystko jest
            otoczone z jednej strony ładnymi lasami.
          </Paragraph>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container addmarg>
        <Column nopadd xs="12">
          <H2>Do dyspzycji Gości</H2>
          <Paragraph dark>
            Nasze gospodarstwo agroturystyczne znajduje się w gminie i wsi
            Świekatowo niedalego, bo ok. 30 km od Świecia. Gospodarstwo położone
            jest w malowniczej scenerii na skraju Borów Tucholskich i w pobliżu
            dużego jeziora świekatowskiego. bogatego w różne gatunki ryb.
            Kilkaset metrów od gospodarstwa znajduje się plaża gdzie można kąpać
            się i zadbać w słońcu o piękny kolor swojego ciała. Wszystko jest
            otoczone z jednej strony ładnymi lasami.
          </Paragraph>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container addmarg>
        <Column nopadd xs="12">
          <H2>Atrakcje</H2>
          <Paragraph dark>
            Nasze gospodarstwo agroturystyczne znajduje się w gminie i wsi
            Świekatowo niedalego, bo ok. 30 km od Świecia. Gospodarstwo położone
            jest w malowniczej scenerii na skraju Borów Tucholskich i w pobliżu
            dużego jeziora świekatowskiego. bogatego w różne gatunki ryb.
            Kilkaset metrów od gospodarstwa znajduje się plaża gdzie można kąpać
            się i zadbać w słońcu o piękny kolor swojego ciała. Wszystko jest
            otoczone z jednej strony ładnymi lasami.
          </Paragraph>
        </Column>
      </Container>
    </Row>
  </>
);

export default OnasPage;
