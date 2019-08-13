import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.5s ease-in-out;
`;

const MenuLinksWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.25s ease-in-out;
  transition-delay: 0.25s;
`;

const MenuLink = styled.li`
  padding: 10px 20px;
  list-style: none;
  font-weight: bold;
  color: ${colors.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    color: ${colors.dark};
  }
`;

const Menu = ({ isOpen }) => (
  <StyledWrapper isOpen={isOpen}>
    <MenuLinksWrapper isOpen={isOpen}>
      <MenuLink> Home </MenuLink>
      <MenuLink> O Nas </MenuLink>
      <MenuLink> Atrakcje </MenuLink>
      <MenuLink> Kontakt </MenuLink>
    </MenuLinksWrapper>
  </StyledWrapper>
);

Menu.propTypes = {
  isOpen: PropTypes.bool,
};

Menu.defaultProps = {
  isOpen: false,
};

export default Menu;
