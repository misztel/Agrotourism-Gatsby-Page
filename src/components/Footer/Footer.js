import React from 'react';
import styled from 'styled-components';
// import H1 from '../components/H1/H1';
import H2 from '../H2/H2';
// import Button from '../components/Button/Button';
import Row from '../Row/Row';
import Column from '../Column/Column';
// import Paragraph from '../components/Paragraph/Paragraph';
import Container from '../Container/Container';
import { colors } from '../../utils/colors';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  background-color: ${colors.primary};
`;

const Footer = () => (
  <StyledWrapper>
    <Row>
      <Container push>
        <Column xs="12">
          <H2 white centred>
            {' '}
            Kontakt
          </H2>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <Column xs="12" md="4">
          <Paragraph>Zacisze Nad Wodą</Paragraph>
          <Paragraph>icon ul. Bohaterów Września 25</Paragraph>
        </Column>
        <Column xs="12" md="4">
          <Paragraph>icon 86-182 Świekatowo</Paragraph>
          <Paragraph>icon 86-182 Świekatowo</Paragraph>
        </Column>
        <Column xs="12" md="4">
          <Paragraph>icon 86-182 Świekatowo</Paragraph>
          <Paragraph>icon 86-182 Świekatowo</Paragraph>
        </Column>
      </Container>
    </Row>
  </StyledWrapper>
);

export default Footer;
