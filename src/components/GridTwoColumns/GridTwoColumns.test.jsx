import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render a two column grid with background', () => {
    renderTheme(<GridTwoColumns {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
  });

  it('should render a two column grid without background', () => {
    renderTheme(<GridTwoColumns {...mock} background={false} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
  });

  it('should render a two column grid without background (default value)', () => {
    renderTheme(<GridTwoColumns {...mock} background={undefined} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
