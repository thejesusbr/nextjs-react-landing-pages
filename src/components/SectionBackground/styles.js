import styled, { css } from 'styled-components';

const activateBackground = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.lightColor};
`;

export const MyStyle = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.lightColor};
    color: ${theme.colors.darkColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
    ${background && activateBackground(theme)}
  `}
`;
