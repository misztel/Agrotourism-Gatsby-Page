import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <StyledWrapper>
      <Logo />
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      <Menu isOpen={isMenuOpen} />
    </StyledWrapper>
  );
};

export default Header;
