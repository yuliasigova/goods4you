import type { Meta, StoryObj } from '@storybook/react';
import '../../app/styles/index.scss';
import { Button } from './Button';


const meta:Meta<typeof Button>  = {
  title: 'Atoms/Button',
  component: Button,
}

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary:false,
    children: 'Button',
  },
};

