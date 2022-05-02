import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render container', () => {
    const { container } = renderTheme(
      <SectionContainer>Children</SectionContainer>,
    );
    const theContainer = screen.getByText('Children');
    expect(theContainer).toHaveStyle({ 'max-width': '120rem' });
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <SectionContainer>Children</SectionContainer>,
    );
    const theContainer = screen.getByText('Children');
    expect(theContainer).toMatchInlineSnapshot(`
      .c0 {
        max-width: 120rem;
        margin: auto;
        padding: 3.2rem;
        width: 100%;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
