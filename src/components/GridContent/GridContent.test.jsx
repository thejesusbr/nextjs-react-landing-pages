import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render', () => {
    renderTheme(<GridContent {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
