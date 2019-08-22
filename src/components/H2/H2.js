import styled from 'styled-components';
import { colors } from '../../utils/colors';

const H2 = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 2rem;
  margin-top: 2rem;
  display: ${props => (props.centred ? 'flex' : 'block')};
  justify-content: ${props => (props.centred ? 'center' : 'left')};
  color: ${props => (props.white ? colors.white : colors.dark)};

  ::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${props => (props.white ? colors.dark : colors.primaty)};
    top: 45px;
  }
`;

export default H2;
