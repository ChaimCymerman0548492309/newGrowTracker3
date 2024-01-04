import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
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
  flex: 3;
  border-color: #2ecc71;
  border-style: solid;
border-radius : 10px;
`;


export const TextContainer = styled.div`
  max-width: 80%;
  word-wrap: break-word; 
  /* Allow the text to break onto the next line if it exceeds the container's width */
`;