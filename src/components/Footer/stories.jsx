import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="#target">☢ Projeto e Programação: Unincor Media Creative ☢</a></p>`,
  },
  argTypes: {
    footerHtml: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
