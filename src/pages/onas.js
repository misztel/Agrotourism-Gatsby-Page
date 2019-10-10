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
import Footer from '../components/Footer/Footer';

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
            Nasze gospodarstwo położone jest na skraju Borów Tucholskich, teren
            rozciąga się nad samym brzegiem jeziora otoczonego lasem. Nad
            jeziorem znajduje się plaża z kąpieliskiem.
          </Paragraph>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container addmarg>
        <Column nopadd xs="12">
          <div className="videoWrapper">
            <iframe
              title="Film promujący Świekatowo"
              width="1492"
              height="849"
              src="https://www.youtube.com/embed/alEl2oV3DvA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container addmarg>
        <Column nopadd xs="12">
          <H2>Do dyspzycji Gości</H2>
          <Paragraph dark>
            Do dyspozycji wczasowiczów oddajemy cały wolnostojący dom. W domu
            gościnnym znajdują się 4 pokoje: dwa czteroosobowe oraz jeden
            dwuosobowe. W każdym pokoju znajduje się łazienka z ubikacją i
            prysznicem. Goście mogą korzystać z aneksu kuchennego, sauny oraz
            dużej sali. Obok domku (od strony jeziora) znajduje się miejsce do
            grillowania, na ognisko, plac zabaw i pomost.
          </Paragraph>
        </Column>
      </Container>
    </Row>
    <Footer />
  </>
);

export default OnasPage;
