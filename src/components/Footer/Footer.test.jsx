import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer footerHtml="<h1>Children</h1>" />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(
      <Footer footerHtml="<h1>Children</h1>" />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        margin: auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        background: #f3f3f3;
        text-align: center;
        border-top: 0.1rem solid #a02b2d;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <footer
        class="c0"
      >
        <div
          class="c1 c2"
        >
          <div
            class="c3 c4"
          >
            <h1>
              Children
            </h1>
          </div>
           
        </div>
      </footer>
    `);
  });
});
