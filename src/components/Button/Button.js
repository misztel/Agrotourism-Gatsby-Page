import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Button = styled.button`
  font-size: 1em;
  line-height: 1.5;
  font-weight: 500;
  border: 2px ${colors.primary} solid;
  padding: 0.25rem 0.95rem;
  border-radius: 1.2rem;
  margin: 0 0 2rem 0;
  background-color: ${props =>
    props.secondary ? 'transparent' : colors.primary};
  color: ${props => (props.secondary ? colors.primary : colors.white)};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: ${props =>
      props.secondary ? colors.primary : colors.secondary};
    border-color: ${props =>
      props.secondary ? colors.primary : colors.secondary};
    color: ${colors.white};
  }
`;

export default Button;
