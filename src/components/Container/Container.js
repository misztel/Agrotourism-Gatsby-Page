import styled from 'styled-components';

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  margin: auto;

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
