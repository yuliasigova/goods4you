import type { Meta, StoryObj } from '@storybook/react';
import '../../app/styles/index.scss'
import { Count } from './Count';

const meta: Meta<typeof Count> = {
    title: 'Molecules/Count',
    component: Count,
  };
  
  export default meta;

  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
        primary: true,
      }
  };

  export const Large: Story = {
    args: {
        primary: false,
      }
  };
  