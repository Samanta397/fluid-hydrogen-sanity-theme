import React from 'react';
import pkg from 'react';
const {JSX} = pkg;

type ButtonProps = {
  icon?: JSX.Element;
  text?: string;
}

const Button = ({icon, text}: ButtonProps) => {
  return (
    <button type={'button'} className={"cursor-pointer w-[44px] h-[44px] flex justify-center items-center"}>
      {icon}
    </button>
  );
};

export default Button;