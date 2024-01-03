import styled from 'styled-components';

interface StyledParagraphProps {
  fontSize?: string;
  textColor?: string;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-size: ${(props) => props.fontSize || '16px'};
  color: ${(props) => props.textColor || '#333'};
  /* Add more dynamic styles using props as needed */
`;
