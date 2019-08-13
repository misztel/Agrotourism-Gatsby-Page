import styled from 'styled-components';
import { colors } from '../../utils/colors';

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  text-align: justify;
  color: ${props => (props.dark ? colors.dark : colors.white)};
`;
export default Paragraph;
