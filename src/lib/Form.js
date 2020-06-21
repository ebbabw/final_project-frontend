import styled from 'styled-components/macro'


export const Form = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
border-radius: 2%;
// background-image: url('./Images/water.jpg');
background-color: blue;
// background-size: cover;
width: 100%;

`;

export const FromWrapper = styled.div`


background-color: lightblue;
width: 80%;
height: 500px;


`;

export const FromHeader = styled.form`

margin-top: 10px;
padding-bottom: 10px;
font-size: 20px;
color: white;
`;

export const FromInput = styled.input`

margin-top: 10px;
width: 80%;
font-size: 15px;
Border: none;
border-radius: 25px;
padding: 20px;
height: 3px;
color: black;

&::placeholder {
  font-style: italic;
  font-size: 11px;
}

`;