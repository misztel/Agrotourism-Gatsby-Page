import styled from 'styled-components';
import { colors } from '../../utils/colors';

const H2 = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 2rem;
  margin-top: 2rem;
  color: ${colors.dark};

  ::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${colors.primary};
    top: 45px;
  }
`;

export default H2;
