import * as React from 'react';
import styled from '@emotion/styled';

import { dimensions } from '../Styles/variables';

const StyledPage = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: ${dimensions.containerPadding}rem;
`;

// создаем универсальный контейнер для страниц
export const PageContainer = ({ children, className, style }) => (
  <StyledPage className={className} style={style}>
    {children}
  </StyledPage>
);
