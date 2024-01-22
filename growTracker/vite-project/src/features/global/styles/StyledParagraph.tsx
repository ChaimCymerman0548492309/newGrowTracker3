import styled from 'styled-components';

interface StyledParagraphProps {
  fontSize?: string;
  textcolor?: string;
  fontFamily?: string;
  fontSizeCustom?: string;
  fontstyles?: string;
  fontWeight?: number;
  lineheight?: string;
}

type ParegraphProps = {
  children: ReactNode
  component?: string;
  fontSize?: string;
  textcolor?: string;
  fontFamily?: string;
  fontSizeCustom?: string;
  fontstyles?: string;
  fontWeight?: number;
  lineheight?: string;
  display?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  justifyContent?: string
  alignItems?: string;
}

interface ParagraphProps {
  children: React.ReactNode;
  component: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  textcolor?: string;
  fontSize?: string;
  fontFamily?: string;
  fontSizeCustom?: string;
  fontstyles?: string;
  fontWeight?: string;
  lineheight?: string;
  display?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-family: ${({ fontFamily }) => fontFamily || 'Carter One'};
  font-family: 'Carter One', cursive;
  font-style: normal;
  font-size: ${(props) => props.fontSizeCustom || '20px'};
  font-style: ${(props) => props.fontstyles || 'bo'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineheight || '3px'};
  color: ${(props) => props.textcolor || '#25880C'};
`;

export const StyledLabel = styled.label<StyledParagraphProps>`
  font-family: ${({ fontFamily }) => fontFamily || 'Carter One'};
  font-family: 'Carter One', cursive;
  font-style: normal;
  font-size: ${(props) => props.fontSizeCustom || '20px'};
  font-style: ${(props) => props.fontstyles || 'bo'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineheight || '3px'};
  color: ${(props) => props.textcolor || '#0c0c0c'};
  
`;
export const ParagraphTestComponnet = styled.label<ParegraphProps>`
  font-family: ${({ fontFamily }) => fontFamily || 'Carter One'};
  font-family: 'Carter One', cursive;
  font-style: normal;
  font-size: ${(props) => props.fontSizeCustom || '20px'};
  font-style: ${(props) => props.fontstyles || 'bo'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineheight || '3px'};
  color: ${(props) => props.textcolor || '#0c0c0c'};
  display: ${(props) => props.display };
  text-align: ${(props) => props.textAlign };
  width: ${(props) => props.width };
  height: ${(props) => props.height };
  justify-content: ${(props) => props.justifyContent };
  align-items: ${(props) => props.alignItems };
  
`;

import { FC, ReactNode } from 'react';

export const Paragraph: FC<ParagraphProps> = ({
  children,
  component,
  textcolor,
  fontSize,
  fontFamily,
  fontSizeCustom,
  fontstyles,
  fontWeight,
  lineheight,
  display,
  textAlign,
  width,
  height,
  justifyContent,
}) => {
  return (
    <ParagraphTestComponnet
      as={component}
      textcolor={textcolor}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontSizeCustom={fontSizeCustom}
      fontstyles={fontstyles}
      fontWeight={fontWeight}
      lineheight={lineheight}
      display={display}
      textAlign={textAlign}
      width={width}
      height={height}
      justifyContent={justifyContent}
    >
      {children}
    </ParagraphTestComponnet>
  );
};