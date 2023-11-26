import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: lavender;
  border: 1px solid lightcyan;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    background-color: lightcyan;
  }
`;
export { Li, Button };
