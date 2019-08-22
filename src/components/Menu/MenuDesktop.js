import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '../../utils/colors';

const StyledWrapper = styled.div`
  border: none;
  position: relative;
  background: none;
  z-index: 9999;

  @media (max-width: 992px) {
    display: none;
  }
`;

const MenuLinksWrapper = styled.ul`
  margin: 0px;
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  transition: opacity 0.25s ease-in-out;
  transition-delay: 0.25s;
  list-style: none;
  justify-content: flex-end;
`;

const MenuLink = styled.li`
  padding: 10px 10px;
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

const MenuDesktop = () => (
  <StyledWrapper>
    <MenuLinksWrapper>
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

export default MenuDesktop;
