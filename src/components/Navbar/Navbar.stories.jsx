import React from 'react';
import NavbarComponent from './Navbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navbar',
  component: NavbarComponent,
};

export const Navbar = () => <NavbarComponent />;
