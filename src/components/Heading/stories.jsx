import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  args: {
    children: 'Título Escuro',
  },
  argTypes: {
    children: { type: 'string', control: 'text' },
  },
};

export const LightBG = (args) => <Heading {...args} />;

export const DarkBG = (args) => <Heading {...args} />;
DarkBG.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
DarkBG.args = {
  darkBG: true,
  children: 'Título Claro',
};
