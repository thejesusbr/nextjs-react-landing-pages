import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti aliquam porro quidem assumenda sapiente consequatur aperiam molestias reiciendis tempore perferendis reprehenderit unde? Quas hic vitae, impedit veritatis itaque molestias!`,
    imgSrc: 'assets/img/graphic_designer.webp',
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    imgSrc: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
