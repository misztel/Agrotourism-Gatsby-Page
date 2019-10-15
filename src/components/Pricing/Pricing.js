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
// import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div``;

const StyledTable = styled.table`
  width: 100%;
  font-size: 18px;
  color: ${colors.dark};
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0px;
`;

const StyledTableCell = styled.td`
  padding: 12px 24px 12px 24px;
  border: solid 2px ${colors.primary};

  :nth-child(2) {
    text-align: center;
    font-weight: 600;
  }
`;

const StyledTest = styled.div`
  width: 100%;
  display: block;
`;

const Pricing = () => (
  <StyledWrapper>
    <Row>
      <Container push>
        <Column xs="12">
          <H2 centred>Noclegi</H2>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <StyledTest>
          <Column sm="12" md="10" marg>
            <StyledTable>
              <tbody>
                <tr>
                  <StyledTableCell>
                    {' '}
                    osoba dorosła/doba (pobyt 1-2 doby){' '}
                  </StyledTableCell>
                  <StyledTableCell> 40 zł </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell>
                    {' '}
                    osoba dorosła/doba (pobyt powyżej dwóch dób){' '}
                  </StyledTableCell>
                  <StyledTableCell> 35 zł </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell> dzieci do lat 7/doba </StyledTableCell>
                  <StyledTableCell> 17 zł </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell> dzieci do lat 2/doba </StyledTableCell>
                  <StyledTableCell> 8 zł </StyledTableCell>
                </tr>
              </tbody>
            </StyledTable>
          </Column>
        </StyledTest>
      </Container>
    </Row>
    <Row>
      <Container push>
        <Column xs="12">
          <H2 centred>Obiad</H2>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <StyledTest>
          <Column sm="12" md="10" marg>
            <StyledTable>
              <tbody>
                <tr>
                  <StyledTableCell> osoba dorosła </StyledTableCell>
                  <StyledTableCell> 20 zł </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell> dzieci do lat 7 </StyledTableCell>
                  <StyledTableCell> 7,50 zł </StyledTableCell>
                </tr>
              </tbody>
            </StyledTable>
          </Column>
        </StyledTest>
      </Container>
    </Row>
    <Row>
      <Container push>
        <Column xs="12">
          <H2 centred>Kolacja</H2>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <StyledTest>
          <Column sm="12" md="10" marg>
            <StyledTable>
              <tbody>
                <tr>
                  <StyledTableCell> osoba dorosła </StyledTableCell>
                  <StyledTableCell> 14 zł </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell> dzieci do lat 7 </StyledTableCell>
                  <StyledTableCell> 7 zł </StyledTableCell>
                </tr>
              </tbody>
            </StyledTable>
          </Column>
        </StyledTest>
      </Container>
    </Row>
    <Row>
      <Container push>
        <Column xs="12">
          <H2 centred>Śniadanie</H2>
        </Column>
      </Container>
    </Row>
    <Row>
      <Container>
        <StyledTest>
          <Column sm="12" md="10" marg>
            <StyledTable>
              <tbody>
                <tr>
                  <StyledTableCell>
                    osoba dorosła/doba (pobyt 1-2 doby)
                  </StyledTableCell>
                  <StyledTableCell> 14 zł </StyledTableCell>
                </tr>
                <tr>
                  <StyledTableCell> dzieci do lat 7 </StyledTableCell>
                  <StyledTableCell> 7 zł </StyledTableCell>
                </tr>
              </tbody>
            </StyledTable>
          </Column>
        </StyledTest>
      </Container>
    </Row>
  </StyledWrapper>
);

export default Pricing;
