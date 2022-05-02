import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with dark background', () => {
    renderTheme(
      <SectionBackground background>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        max-width: 120rem;
        margin: auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        background: #f3f3f3;
        color: #0a1128;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <div
        class="c0"
        id=""
      >
        <div
          class="c1"
        >
          <h1>
            Children
          </h1>
        </div>
      </div>
    `);
  });
});
