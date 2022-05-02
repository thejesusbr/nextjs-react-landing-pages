import styled, { css } from 'styled-components';

export const SimpleText = styled.div`
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.normal};
    `}
`;
