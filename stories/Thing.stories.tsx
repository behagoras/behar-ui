import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing, Props, BeharTable } from '../src';
import { BeharTableProps } from '../src/components/BeharTable/BeharTable.types';

const meta: Meta = {
  title: 'Welcome',
  component: BeharTable,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<BeharTableProps> = (args) => <BeharTable
  {...args}
/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  rows: [{
    cells: [
      { content: 'world', key: 'world' },
      'Frozen yoghurt',
      159,
    ],
  },
  ],
  headers:[
    { cell: 'name', key: 'name' },
    { cell: 'calories', key: 'calories' },
    { cell: 'hello', key: 'hello' },
  ]
} as BeharTableProps
