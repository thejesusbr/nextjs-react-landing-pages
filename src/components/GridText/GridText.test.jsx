import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<GridText />', () => {
  it('should render correctly', () => {
    renderTheme(<GridText {...mock} />);

    expect(
      screen.getByRole('heading', { name: 'Grid Section' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Teste 1' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Teste 2' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Teste 3' }),
    ).toBeInTheDocument();
  });

  it('should render with dark background', () => {
    renderTheme(<GridText {...mock} background={true} />);

    expect(
      screen.getByRole('heading', { name: 'Grid Section' }),
    ).toHaveStyleRule('color', theme.colors.lightColor);
  });

  it('should render with default background', () => {
    renderTheme(
      <GridText
        title={mock.title}
        description={mock.description}
        grid={mock.grid}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Grid Section' }),
    ).toHaveStyleRule('color', theme.colors.darkColor);
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
