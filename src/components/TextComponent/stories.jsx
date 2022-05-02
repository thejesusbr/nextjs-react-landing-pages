import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit
    amet consectetur adipisicing elit.
    Sapiente dolore impedit repellat ab hic.
     Beatae, eum non! Porro incidunt cum
     exercitationem, nobis saepe, sapiente
     numquam id voluptate cupiditate, tenetur modi?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ 'max-width': '640px' }}>
      <TextComponent {...args} />
    </div>
  );
};
