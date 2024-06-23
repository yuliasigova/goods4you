import type { Meta, StoryObj } from '@storybook/react';
import '../../app/styles/index.scss'
import { Count } from './Count';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { IProductDetails } from '../../shared/types/ProductTypes';

const meta: Meta<typeof Count> = {
    title: 'Molecules/Count',
    component: Count,
    decorators: [
      (Story) => (
      <Provider store={store}>
      <Story />
      </Provider>)]
  };
  
  export default meta;

  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
        primary: true,
        product: {id:1, stock:2} as IProductDetails,
        quantity: 5,
      }
  };

  export const Large: Story = {
    args: {
        primary: false,
        product: {id:1, stock:2} as IProductDetails,
        quantity: 5,
      }
  };
  