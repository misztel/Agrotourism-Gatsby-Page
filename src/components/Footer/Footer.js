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
// import H1 from '../components/H1/H1';
import H2 from '../H2/H2';
// import Button from '../components/Button/Button';
import Row from '../Row/Row';
import Column from '../Column/Column';
// import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../Container/Container';
import { colors } from '../../utils/colors';
import Paragraph from '../Paragraph/Paragraph';
import Logo from '../Logo/Logo';

const StyledWrapper = styled.div`
  background-color: ${colors.primary};
`;

const StyledCopy = styled.div`
  background-color: ${colors.white};
`;

const Footer = () => (
  <StyledWrapper>
    <Row>
      <Container push>
        <Column xs="12">
          <H2 white centred>
            Kontakt
          </H2>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <Column xs="12" md="4">
          <div className="daneblock">
            <div className="daneinner">
              <Logo className="logo-ft" />
            </div>
          </div>
          <div className="daneblock">
            <div className="daneinner">
              <FontAwesomeIcon icon={faHome} className="icon fa-fw" />
              <Paragraph className="textset">
                {' '}
                ul. Bohaterów Września 25
              </Paragraph>
            </div>
          </div>
          <div className="daneblock">
            <div className="daneinner">
              <FontAwesomeIcon icon={faMailBulk} className="icon fa-fw" />
              <Paragraph className="textset">86-182 Świekatowo</Paragraph>
            </div>
          </div>
        </Column>

        <Column xs="12" md="4">
          <div className="daneblock">
            <div className="daneinner">
              <FontAwesomeIcon icon={faEnvelope} className="icon fa-fw" />
              <Paragraph className="textset">
                agroturystyka.jaroch@o2.pl
              </Paragraph>
            </div>
          </div>
          <div className="daneblock">
            <div className="daneinner">
              <FontAwesomeIcon icon={faPhone} className="icon fa-fw" />
              <Paragraph className="textset">052 332 20 23</Paragraph>
            </div>
          </div>
          <div className="daneblock">
            <div className="daneinner">
              <FontAwesomeIcon icon={faMobileAlt} className="icon fa-fw" />
              <Paragraph className="textset"> 699 365 557</Paragraph>
            </div>
          </div>
        </Column>

        <Column xs="12" md="4">
          <div className="daneblock">
            <Paragraph center>
              {' '}
              Numer rachunku bankowego: <br />
              Bank Spółdzielczy BGŻ <br />
              89 8168 0007 0009 3611 2000 0012
            </Paragraph>
          </div>
        </Column>
      </Container>
    </Row>
    <iframe
      className="map"
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4755.487424466043!2d18.084089645543013!3d53.41940951321702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4702fd44f4b54d4d%3A0x88a36db56061b7c1!2sBohater%C3%B3w+Wrze%C5%9Bnia+25%2C+86-182+%C5%9Awiekatowo!5e0!3m2!1spl!2spl!4v1559305355667!5m2!1spl!2spl"
      width="100%"
      height="450"
      frameBorder="0"
      allowFullScreen
    />
    <StyledCopy>
      <Row>
        <Container>
          <Column xs="12" md="12" className="copy">
            <Paragraph dark x16>
              Copyright © 2019 |{' '}
              <a
                href="http://mmisztela.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polityka Prywatności
              </a>{' '}
            </Paragraph>
            <Paragraph dark x16>
              Created by{' '}
              <a
                href="http://mmisztela.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                mmisztela.pl
              </a>
            </Paragraph>
          </Column>
        </Container>
      </Row>
    </StyledCopy>
  </StyledWrapper>
);

export default Footer;
