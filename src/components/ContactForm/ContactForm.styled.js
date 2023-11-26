import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Input = styled.input`
  border: 4px solid lightcyan;
  width: 100%;
  padding: 10px;
`;

const Button = styled.button`
  background-color: lavender;
  border: 1px solid lightcyan;
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  &:hover {
    background-color: lightcyan;
  }
`;
export { Form, Label, Input, Button };
