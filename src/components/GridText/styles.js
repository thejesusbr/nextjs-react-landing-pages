import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { SimpleText as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextContainer} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.huge};
      top: -1rem;
      left: -${theme.spacings.xlarge};
      transform: rotate(5deg);
    }

    @media ${theme.media.lteMedium} {
      ${HeadingContainer}::before {
        font-size: ${theme.font.sizes.xlarge};
        top: -0.75rem;
        left: -${theme.spacings.large};
      }
    }
  `}
`;
