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

  img{
    width: 100%;
  }

  *, *::before *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 400px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  background-image: url(${herobg});
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 500px inset;
  background-position-y: 50%;
  color: ${colors.primary};
`;

const SubPageLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

export default SubPageLayout;
