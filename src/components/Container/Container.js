import styled from 'styled-components';

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  margin: ${props => (props.addmarg ? '30px auto 0 auto' : 'auto')};
  justify-content: ${props => (props.push ? 'space-between' : 'normal')};

  @media (min-width: 992px) {
    width: 920px;
    padding: 0 20px;
  }

  @media (min-width: 1200px) {
    width: 1160px;
    padding: 0 20px;
  }
`;

export default Container;
