import styled, { CSSProperties } from 'styled-components';

interface CustomTitleProps {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
}

const getTitleFontSize = (size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
  switch (size) {
    case 'h1':
      return '96px';
    case 'h2':
      return '72px';
    case 'h3':
      return '48px';
    case 'h4':
      return '36px';
    case 'h5':
      return '24px';
    case 'h6':
      return '18px';
    default:
      return '48px'; // גודל ברירת מחדל
  }
};

export const CustomTitle = styled.h1<CustomTitleProps>`
  width: 1098px;
  height: 108px;
  flex-shrink: 0;
  color: ${({ color }) => color || '#0C2706'};
  font-family: 'Carter One', cursive;
  font-size: ${({ size }) => getTitleFontSize(size)};
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 75% */

`;

