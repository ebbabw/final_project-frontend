import styled from 'styled-components/macro'


export const FromHeader = styled.header`

  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 20px;
  color: white;
  text-align: center;
  `;

export const InputWrapper = styled.div`
   
    margin-left: 60px;

`;

export const FromInput = styled.input`

  margin-top: 30px;
  width: 200px;
  font-size: 15px;
  Border: none;
  border-radius: 25px;
  background-color: rgb(255, 255, 255, 0.2);
  padding: 20px;
  height: 3px;
  color: black;
  -webkit-box-shadow: 0px 9px 5px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 9px 5px -4px rgba(0,0,0,0.75);
  box-shadow: 0px 9px 5px -4px rgba(0,0,0,0.75);

  &::placeholder {
   font-style: italic;
   font-size: 12px;
   color: black;
}


`;