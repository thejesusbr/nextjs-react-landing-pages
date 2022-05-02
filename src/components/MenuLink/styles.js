import styled, { css } from 'styled-components';

export const MyStyle = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.font.sizes.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 1.6rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
      transform: scale(0);
    }

    &:hover::after {
      left: 25%;
      width: 50%;
      transform: scale(1);
    }
  `}
`;
