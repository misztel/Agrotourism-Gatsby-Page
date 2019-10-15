import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Paragraph = styled.p`
  font-size: ${props => (props.x16 ? '16px' : '18px')};
  line-height: 30px;
  text-align: ${props => (props.center ? 'center' : 'justify')};
  color: ${props => (props.dark ? colors.dark : colors.white)};
  margin-bottom: ${props => (props.bottom ? '40px' : '0')};
`;
export default Paragraph;
