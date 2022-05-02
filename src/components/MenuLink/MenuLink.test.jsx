import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink url={'http://localhost'}>Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink url={'http://localhost'} newTab>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <MenuLink url={'http://localhost'}>Children</MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
