import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
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

  :hover {
    color: ${colors.dark};
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  font-weight: bold;
  text-decoration: none;
  color: #dedede;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    color: ${colors.white};
  }

  &.active {
    color: ${colors.white};
  }
`;

const Menu = ({ isOpen }) => (
  <StyledWrapper isOpen={isOpen}>
    <MenuLinksWrapper isOpen={isOpen}>
      <MenuLink>
        <StyledLink activeClassName="active" to="/">
          Strona Główna
        </StyledLink>
      </MenuLink>
      <MenuLink>
        <StyledLink activeClassName="active" to="/onas">
          O Nas
        </StyledLink>
      </MenuLink>
      <MenuLink>
        <StyledLink activeClassName="active" to="/atrakcje">
          Atrakcje
        </StyledLink>
      </MenuLink>
      <MenuLink>
        <StyledLink activeClassName="active" to="/cennik">
          Cennik
        </StyledLink>
      </MenuLink>
      <MenuLink>
        <StyledLink activeClassName="active" to="/galeria">
          Galeria
        </StyledLink>
      </MenuLink>
      <MenuLink>
        <StyledLink activeClassName="active" to="/kontakt">
          Kontakt
        </StyledLink>
      </MenuLink>
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
