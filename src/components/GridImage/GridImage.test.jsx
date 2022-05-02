import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridImage />', () => {
  it('should render with background', () => {
    renderTheme(<GridImage {...mock} background={true} />);
    expect(
      screen.getByRole('heading', { name: 'Image Grid' }),
    ).toBeInTheDocument();
  });

  it('should render when no sectionId is provided', () => {
    renderTheme(
      <GridImage {...mock} sectionId={undefined} background={true} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Image Grid' }),
    ).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
