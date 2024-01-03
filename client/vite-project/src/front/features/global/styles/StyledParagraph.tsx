import styled from 'styled-components';

interface StyledParagraphProps {
  fontSize?: string;
  textColor?: string;
  fontFamily?: string;
  fontSizeCustom?: string;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: string;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-family: ${({fontFamily}) => fontFamily || 'Carter One'};
  font-size: ${(props) => props.fontSizeCustom || '20px'};
  font-style: ${(props) => props.fontStyle || 'bo'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || '33px'};
  color: ${(props) => props.textColor || '#25880C'};
`;

