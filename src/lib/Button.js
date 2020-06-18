import styled from 'styled-components/macro'

export const Button = styled.button`
  font-family: bold Roboto Condensed, sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: 8px;
  color: white;
  width: 150px;
  height: 40px;
  border: 0px;
  margin: 10px;
  background: ${props => props.background || "#6200EE"};
  &:hover {
    background: ${props => props.background || "#6200EE"};
    opacity: 90%;
    box-shadow: 0 8px 10px -6px black;
  }
`;
