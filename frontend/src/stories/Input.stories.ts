import type { Meta, StoryObj } from '@storybook/svelte';

import Input from '../lib/form/Input.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    placeholder: { control: 'text' }
  },
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blank: Story = {
  args: {
    type: 'text',
    name: 'Any',
  },
};

