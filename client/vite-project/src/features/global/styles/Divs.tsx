import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-color: #bbebb7;
  border-style: solid;

`;
export const TytleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LeftDiv = styled.div`
  width: 70%;
  height: 100%;
  border-color: #3498db;
  border-style: solid;

`;

export const RightDiv = styled.div`
  width: 30%;
  height: 100%;
  border-color: #2ecc71;
  border-style: solid;
border-radius : 10px;
justify-items: center;
`;


export const TextContainer = styled.div`
  max-width: 80%;
  word-wrap: break-word; 
  /* Allow the text to break onto the next line if it exceeds the container's width */
`;