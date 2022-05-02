import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.lightColor};
    border: 1px solid ${theme.colors.lightColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.font.sizes.xlarge};
    height: ${theme.font.sizes.xlarge};
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;

    & svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
