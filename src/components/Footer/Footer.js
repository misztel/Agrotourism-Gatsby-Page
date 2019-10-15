import React from 'react';
import styled from 'styled-components';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Container from '../Container/Container';
import { colors } from '../../utils/colors';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  background-color: ${colors.primary};
`;

const StyledCopy = styled.div`
  background-color: ${colors.white};
`;
const StyledTest = styled.div`
  width: 100%;
  display: block;
`;

const Footer = () => (
  <StyledWrapper>
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
          <StyledTest>
            <Column xs="12" sm="6" className="copy">
              <Paragraph dark x16>
                Copyright © 2019
              </Paragraph>
            </Column>
            <Column xs="12" sm="6" className="copy right">
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
          </StyledTest>
        </Container>
      </Row>
    </StyledCopy>
  </StyledWrapper>
);

export default Footer;
