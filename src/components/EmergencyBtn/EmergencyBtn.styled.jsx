import styled from 'styled-components';

export const EmergencyButton = styled.button`
  margin: 30px auto 0 auto;
  padding: 5px 20px;

  font-size: 18px;
  color: rgb(238, 238, 238);

  cursor: pointer;

  border: none;
  border-radius: 6px;
  background-color: #aa1919;
  box-shadow: 5px 5px 15px #4a4a4a;

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 8px #4a4a4a;
  }
  &:hover,
  &:focus {
    background: #cc0f0f;
  }
`;
