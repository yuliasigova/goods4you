import type { Meta, StoryObj } from '@storybook/react';
import '../../app/styles/index.scss';
import { IconButton } from './IconButton';
import IconCart from '../../shared/assets/svg/cart.svg?react'
import IconClose from '../../shared/assets/svg/close.svg?react'


const meta:Meta<typeof IconButton>  = {
  title: 'Atoms/Button with icon',
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {

    render: () => {
       
        return (<IconButton aria='button' disabled={false}>
            <IconCart/>
             </IconButton>);
      },
};

export const Disabled: Story = {

  render: function Render() {
     
      return (
      <IconButton aria='button' disabled={true}>
            <IconCart/>
           </IconButton>)
    },
};

export const Secondary: Story = {

  render: function Render() {
     
      return (
      <IconButton primary={false} aria='button' disabled={false}>
          <IconClose/>
           </IconButton>)
    },
};






