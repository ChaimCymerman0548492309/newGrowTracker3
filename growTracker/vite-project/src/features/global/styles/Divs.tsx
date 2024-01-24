import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  overflow: auto;
  

`;
export const TytleContainer = styled.div`
  display: flex;
  text-align: center;
 
`;

export const LeftDiv = styled.div`
  width: 70%;
  height: 100%;
  flex-direction: column;
  /* flex-grow: 3; */
  /* border-color: #3498db; */
  /* border-style: solid; */

`;

export const RightDiv = styled.div`
border-color: #3498db;
border-style: solid;
/* flex-grow: 1; */
width: 30%;
height: 50%;
`;


export const TextContainer = styled.div`
  max-width: 80%;
  word-wrap: break-word; 
  /* Allow the text to break onto the next line if it exceeds the container's width */
`;