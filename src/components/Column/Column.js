import styled from 'styled-components';

function getWidth(span) {
  if (span) {
    const width = (span / 12) * 100;
    return `width: ${width}%;`;
  }
  return false;
}

const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%;')}
  padding: ${props => (props.nopadd ? '0px' : '0px 15px')};

  @media (min-width: 768px) {
    ${({ sm }) => sm && getWidth(sm)}
  }
  @media (min-width: 992px) {
    ${({ md }) => md && getWidth(md)}
  }
  @media (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)}
  }
`;

export default Column;
