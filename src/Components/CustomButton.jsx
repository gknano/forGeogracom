import styled from '@emotion/styled';

import React from 'react';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  max-height: 100%;
  max-width: 50%;
  height: 70%;
  width: 9vmax;
  z-index: 3;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background: transparent;
  &:hover {
    background-color: #f6f1f100;
    border: 1px solid rgb(198, 198, 198);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: grey
    border: 1px solid rgb(204, 204, 204);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) inset;
  }
  &:focus {
    outline: none;
  }
`;
// стилизованая кнопка, которая принимает на вход слушатель для события onClick и children
export const CustomButton = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
