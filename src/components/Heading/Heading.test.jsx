import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Título</Heading>);
    const heading = screen.getByRole('heading', { name: 'Título' });
    expect(heading).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with light color', () => {
    renderTheme(<Heading darkBG={true}>Título</Heading>);
    const heading = screen.getByRole('heading', { name: 'Título' });
    expect(heading).toHaveStyle({
      color: theme.colors.lightColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('should render with correct heading sizes', () => {
    /* small */
    renderTheme(<Heading size="small">Pequeno</Heading>);
    const headingSmall = screen.getByRole('heading', { name: 'Pequeno' });
    expect(headingSmall).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.font.sizes.large,
      'text-transform': 'none',
    });

    /* normal */
    renderTheme(<Heading size="normal">Normal</Heading>);
    const headingNormal = screen.getByRole('heading', { name: 'Normal' });
    expect(headingNormal).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });

    /* large */
    renderTheme(<Heading size="large">Grande</Heading>);
    const headingLarge = screen.getByRole('heading', { name: 'Grande' });
    expect(headingLarge).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.font.sizes.xxlarge,
      'text-transform': 'none',
    });

    /* huge */
    renderTheme(<Heading size="huge">Enorme</Heading>);
    const headingHuge = screen.getByRole('heading', { name: 'Enorme' });
    expect(headingHuge).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });

  it('should render smaller sizes in small screens', () => {
    /* huge */
    const { rerender } = renderTheme(<Heading size="huge">Enorme</Heading>);
    const headingHuge = screen.getByRole('heading', { name: 'Enorme' });
    expect(headingHuge).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });

    /* large */
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="large">Título</Heading>
      </ThemeProvider>,
    );
    expect(headingHuge).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: theme.media.lteMedium,
    });

    /* normal */
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="normal">Título</Heading>
      </ThemeProvider>,
    );
    expect(headingHuge).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: theme.media.lteMedium,
    });

    /* small */
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="small">Título</Heading>
      </ThemeProvider>,
    );
    expect(headingHuge).toHaveStyleRule('font-size', theme.font.sizes.large, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Título</Heading>);
    const heading = screen.getByRole('heading', { name: 'Título' });
    expect(heading).toHaveStyle({
      color: theme.colors.darkColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { rerender, container } = renderTheme(<Heading>Título</Heading>);
    const heading = screen.getByRole('heading', { name: 'Título' });
    const h1 = container.querySelector('h1');
    expect(h1.tagName.toLowerCase()).toBe('h1');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as="h2">Título</Heading>
      </ThemeProvider>,
    );
    const h2 = container.querySelector('h2');
    expect(h2.tagName.toLowerCase()).toBe('h2');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as="h3">Título</Heading>
      </ThemeProvider>,
    );
    const h3 = container.querySelector('h3');
    expect(h3.tagName.toLowerCase()).toBe('h3');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as="h4">Título</Heading>
      </ThemeProvider>,
    );
    const h4 = container.querySelector('h4');
    expect(h4.tagName.toLowerCase()).toBe('h4');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as="h5">Título</Heading>
      </ThemeProvider>,
    );
    const h5 = container.querySelector('h5');
    expect(h5.tagName.toLowerCase()).toBe('h5');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as="h6">Título</Heading>
      </ThemeProvider>,
    );
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<Heading>Título</Heading>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: #0a1128;
        font-size: 4rem;
        text-transform: none;
      }

      @media (max-width:768px) {
        .c0 {
          font-size: 3.2rem;
        }
      }

      <div>
        <h1
          class="c0"
        >
          Título
        </h1>
      </div>
    `);
  });
});
