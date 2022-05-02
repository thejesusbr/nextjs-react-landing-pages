import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.large};
    ${mediaQueryFontSmall(theme)};
  `,
  normal: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${mediaQueryFontNormal(theme)};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    ${mediaQueryFontLarge(theme)};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaQueryFontHuge(theme)};
  `,
};

const mediaQueryFontSmall = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.large};
  }
`;

const mediaQueryFontNormal = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.large};
  }
`;

const mediaQueryFontLarge = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.large};
  }
`;

const mediaQueryFontHuge = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, darkBG, size, uppercase }) => css`
    color: ${darkBG ? theme.colors.lightColor : theme.colors.darkColor};
    ${titleSizes[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
