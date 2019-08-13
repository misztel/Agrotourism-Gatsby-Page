import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

const StyledLogo = styled.div`
  font-size: 1em;
  color: ${colors.white};
  z-index: 9999;
  font-family: 'Courgette', sans-serif;
  padding: 10px;
`;

const Logo = () => <StyledLogo>Logo</StyledLogo>;

export default Logo;
