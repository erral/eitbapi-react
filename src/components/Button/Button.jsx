import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.scss';
const Button = ({ children, ...props }) => {
  return (
    <BootstrapButton className="button-color" {...props}>
      {children}
    </BootstrapButton>
  );
};

export default Button;
