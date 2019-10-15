import styled from 'styled-components';

const ContainerFull = styled.div`
  padding: 0 15px;
  display: flex;
  margin: ${props => (props.addmarg ? '30px auto 0 auto' : 'auto')};
  justify-content: ${props => (props.push ? 'space-between' : 'normal')};
  width: 100%;
`;

export default ContainerFull;
