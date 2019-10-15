import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMobileAlt,
  faHome,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import H1 from '../components/H1/H1';
import SubPageLayout from '../layout/SubPage';
import Header from '../components/Header/Header';
import Wrapper from '../components/Wrapper/Wrapper';
import Row from '../components/Row/Row';
import Column from '../components/Column/Column';
import Container from '../components/Container/Container';
import Widok from '../assets/images/widok.jpg';
import Paragraph from '../components/Paragraph/Paragraph';
import Footer from '../components/Footer/Footer';

const StyledTest = styled.div`
  width: 100%;
  display: block;
`;

const KontaktPage = () => (
  <>
    <SubPageLayout>
      <Header />
      <Row>
        <Container>
          <Column nopadd xs="12">
            <H1 centred>Kontakt</H1>
          </Column>
        </Container>
      </Row>
    </SubPageLayout>
    <Wrapper>
      <Row>
        <Container addmarg wide>
          <StyledTest>
            <Column xs="12" sm="6" md="6" lg="6">
              <div className="daneblock">
                <div className="daneinner">
                  <FontAwesomeIcon icon={faHome} className="icon fa-fw" />
                  <Paragraph dark className="textset">
                    ul. Bohaterów Września 25
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <FontAwesomeIcon icon={faMailBulk} className="icon fa-fw" />
                  <Paragraph dark className="textset">
                    86-182 Świekatowo
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <FontAwesomeIcon icon={faPhone} className="icon fa-fw" />
                  <Paragraph dark className="textset">
                    052 332 20 23
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <FontAwesomeIcon icon={faMobileAlt} className="icon fa-fw" />
                  <Paragraph dark className="textset">
                    {' '}
                    699 365 557
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <FontAwesomeIcon icon={faEnvelope} className="icon fa-fw" />
                  <Paragraph dark className="textset">
                    agroturystyka.jaroch@o2.pl
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <Paragraph dark center>
                  Numer rachunku bankowego: <br />
                  Bank Spółdzielczy BGŻ <br />
                  89 8168 0007 0009 3611 2000 0012
                </Paragraph>
              </div>
            </Column>
            <Column xs="0" sm="6" md="6" lg="6">
              <img src={Widok} alt="Zachód słońca nad jeziorem" />
            </Column>
          </StyledTest>
        </Container>
      </Row>
    </Wrapper>
    <Footer />
  </>
);

export default KontaktPage;
