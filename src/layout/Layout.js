import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';
import herobg from '../assets/images/herobg.jpg';

const GlobalStyle = createGlobalStyle`

  body{
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: #fff;
  }

  *, *::before *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: cover;
  background-image: url(${herobg});
  color: ${colors.primary};
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default Layout;
