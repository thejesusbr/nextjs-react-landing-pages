import styled, { css } from 'styled-components';
import { MyStyle as SectionContainerStyle } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const toggleVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    border-bottom: 1px solid ${theme.colors.secondaryColor};
    background: ${theme.colors.lightColor};
    transition: all 300ms ease-in-out;

    > ${SectionContainerStyle} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && toggleVisible(theme)}

      > ${SectionContainerStyle} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacings.huge};
        display: flex;
        justify-items: center;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.huge} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.lightColor};
    border: 1px solid ${theme.colors.lightColor};
    opacity: 0.7;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    cursor: pointer;

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
