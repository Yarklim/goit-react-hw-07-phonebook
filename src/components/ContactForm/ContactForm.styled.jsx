import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const InputStyled = styled.input`
	margin-bottom: 20px;
	padding: 5px;
`

export const Button = styled.button`
  padding: 5px 20px;

  font-size: 18px;
  color: rgb(238, 238, 238);

  cursor: pointer;

  border: none;
  border-radius: 6px;
  background-color: #3a4043;
  box-shadow: 5px 5px 15px #4a4a4a;

  &:active {
    transform: scale(0.95);
	box-shadow: 2px 2px 8px #4a4a4a;
  }
  &:hover,
  &:focus {
    background: #325959;
  }
`;