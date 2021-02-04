import React from 'react';
import styled from '@emotion/styled';
const StyledInput = styled.input`
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
`;

// стилизованный инпут и лейбл
export const CustomInput = (props) => {
  const { labelText, ...inputProps } = props;
  return (
    <label>
      {labelText}
      <StyledInput {...inputProps} />
    </label>
  );
};
