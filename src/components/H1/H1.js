import styled from 'styled-components';
import { colors } from '../../utils/colors';

const H1 = styled.h1`
  position: relative;
  font-weight: 800;
  font-size: 30px;
  margin-top: 0.5rem;
  color: ${colors.white};

  ::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: ${colors.primary};
    top: 45px;
  }
`;

export default H1;
