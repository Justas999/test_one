import React from 'react';

const Button = ({ buttonCss, text }) => {
  return <button className={buttonCss}>{text}</button>;
};

export default Button;
