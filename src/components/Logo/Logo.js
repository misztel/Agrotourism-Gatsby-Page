import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

const StyledLogo = styled.div`
  font-size: 1.3em;
  color: ${colors.white};
  z-index: 9999;
  font-family: 'Courgette', cursive;
  padding: 20px 0;
`;

const Logo = () => <StyledLogo>Zacisze Nad Wodą</StyledLogo>;

export default Logo;
