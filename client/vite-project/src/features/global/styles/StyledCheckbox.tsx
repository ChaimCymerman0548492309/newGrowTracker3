import React from 'react';
import styled from 'styled-components';
export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 4px;
    cursor: pointer;
  }

  &:checked::before {
    background-color: #000;
    border-color: #fff;
  }
`