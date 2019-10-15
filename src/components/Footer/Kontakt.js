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
import H2 from '../H2/H2';
import Logo from '../Logo/Logo';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Container from '../Container/Container';
import ContainerFull from '../Container/Full';
import { colors } from '../../utils/colors';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  background-color: ${colors.primary};
  margin-top: 60px;
`;

const StyledTest = styled.div`
  width: 100%;
  display: block;
`;

const Kontakt = () => (
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
      <ContainerFull>
        <StyledTest>
          <Column xs="12" sm="4" md="4" lg="4">
            <StyledTest>
              <div className="daneblock">
                <div className="daneinner">
                  <Logo className="logo-ft" />
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <FontAwesomeIcon icon={faHome} className="icon fa-fw" />
                  <Paragraph className="textset">
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
            </StyledTest>
          </Column>

          <Column xs="12" sm="4" md="4" lg="4">
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

          <Column xs="12" sm="4" md="4" lg="4">
            <StyledTest>
              <div className="daneblock">
                <div className="daneinner">
                  <Paragraph className="textset2">
                    Numer rachunku bankowego:{' '}
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <Paragraph className="textset">
                    Bank Spółdzielczy BGŻ
                  </Paragraph>
                </div>
              </div>
              <div className="daneblock">
                <div className="daneinner">
                  <Paragraph className="textset">
                    89 8168 0007 0009 3611 2000 0012
                  </Paragraph>
                </div>
              </div>
            </StyledTest>
          </Column>
        </StyledTest>
      </ContainerFull>
    </Row>
  </StyledWrapper>
);

export default Kontakt;
