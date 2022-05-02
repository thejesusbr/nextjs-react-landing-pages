import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Importação de fonte movida para index.html, devido ao aviso de mudaça no CSSOM API */
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html
  {
    background: ${({ theme }) => theme.colors.lightColor};
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body
  {
    font-family: ${({ theme }) => theme.font.default};
    font-size: ${({ theme }) => theme.font.sizes.normal};
    color: ${({ theme }) => theme.colors.darkColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6
  {
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-family: ${({ theme }) => theme.font.titles};
    text-transform: uppercase;
    margin: ${({ theme }) => theme.spacings.large} 0;;
  }

  p {
    margin: ${({ theme }) => theme.spacings.normal} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.normal} 0;
    padding: ${({ theme }) => theme.spacings.normal} 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
