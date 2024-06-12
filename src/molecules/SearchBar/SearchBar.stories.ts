import type { Meta, StoryObj } from '@storybook/react';
import '../../app/styles/index.scss'
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
    title: 'Molecules/SearchBar',
    component: SearchBar,
    // ...
  };
  export default meta;

  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
        primary: true,
      }
  };

 
  