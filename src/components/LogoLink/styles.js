import styled, { css } from 'styled-components';

export const MyStyle = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;
    align-items: center;

    img {
      max-height: 3rem;
    }
  `}
`;
