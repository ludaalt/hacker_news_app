import React from 'react';

interface Button {
  title: string;
  buttonFunction?: any;
  component?: any;
  to?: any;
}

const Button = ({ title, buttonFunction }: Button) => {
  return (
    <button className="button" onClick={buttonFunction}>
      {title}
    </button>
  );
};

export default Button;
