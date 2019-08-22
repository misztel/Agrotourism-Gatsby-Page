import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const StyledHamburger = styled.button`
  padding: 18px;
  margin: 14px;
  border: none;
  position: relative;
  background: none;
  z-index: 9999;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;

const InnerHamburger = styled.div`
  width: 20px;
  height: 2px;
  position: relative;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : colors.white)};
  transition: background-color 0.25s ease-in-out;

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0px;
    width: 20px;
    height: 2px;
    background-color: ${colors.white};
    transition: transform 0.25s ease-in-out;
  }

  ::before {
    top: -6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '6px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }
  ::after {
    top: 6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-6px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isOpen: false,
};

export default Hamburger;
