import styled, { css } from 'styled-components';

export const MyStyle = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: auto;
    padding: ${theme.spacings.large};
    width: 100%;
  `}
`;
