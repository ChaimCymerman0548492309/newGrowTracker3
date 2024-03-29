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
  font-family: ${({ fontFamily }) => fontFamily || 'Carter One'};
  font-family: 'Carter One', cursive;
  font-style: normal;
  font-size: ${(props) => props.fontSizeCustom || '20px'};
  font-style: ${(props) => props.fontStyle || 'bo'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || '3px'};
  color: ${(props) => props.textColor || '#25880C'};
`;

export const StyledLabel = styled.label<StyledParagraphProps>`
  font-family: ${({ fontFamily }) => fontFamily || 'Carter One'};
  font-family: 'Carter One', cursive;
  font-style: normal;
  font-size: ${(props) => props.fontSizeCustom || '20px'};
  font-style: ${(props) => props.fontStyle || 'bo'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || '3px'};
  color: ${(props) => props.textColor || '#0c0c0c'};
`;

import { FC, ReactNode } from 'react';

type ParegraphProps = {
  children: ReactNode
  component?: string;
  fontSize?: string;
  textColor?: string;
  fontFamily?: string;
  fontSizeCustom?: string;
  fontStyle?: string;
  fontWeight?: number;
  lineHeight?: string;
}

export const Paregraph : FC<ParegraphProps>= ({children, component, textColor})=>{
  return <StyledParagraph as={component} textColor={textColor}>{children}</StyledParagraph>
}