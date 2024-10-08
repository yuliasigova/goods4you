import type { Meta, StoryObj } from '@storybook/react';
import '../../app/styles/index.scss'

import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Atoms/Input',
    component: Input,
  };
  
  export default meta;

  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
      aria: 'Enter a search value',
      placeholder: 'Search by title',
      name: 'search',
      type: 'text'
      }
  };

  export const Password: Story = {
    args: {
      aria: 'Enter password',
      placeholder: 'Password',
      name: 'password',
      type: 'password'
      }
  };

 
  