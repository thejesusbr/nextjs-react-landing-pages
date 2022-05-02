import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo Text',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    link: { type: 'string' },
  },
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

ImageOnly.args = {
  imgSrc: 'assets/img/logo.png',
};
