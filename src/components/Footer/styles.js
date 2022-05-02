import styled, { css } from 'styled-components';
import { SimpleText as TextComponent } from '../TextComponent/styles';
import { MyStyle as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.lightColor};
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.secondaryColor};
    a {
      color: inherit;
      text-decoration: none;
    }
    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
