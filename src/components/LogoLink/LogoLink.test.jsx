import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text="Logo Text" link="#target" />);
    expect(
      screen.getByRole('heading', { name: 'Logo Text' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Logo Text' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink text="Logo Text" link="#target" imgSrc="image.png" />,
    );
    expect(
      screen.getByRole('heading', { name: 'Logo Text' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Logo Text' })).toHaveAttribute(
      'src',
      'image.png',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text="Logo Text" link="#target" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
