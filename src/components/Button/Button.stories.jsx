import React from 'react';
import ButtonComponent from './Button';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
Button.args = {
  onClick: action('button-clicked'),
  children: 'Defektuzko botoia',
  disabled: false,
};
