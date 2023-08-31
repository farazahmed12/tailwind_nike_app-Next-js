import React from "react";

type ButtonProps = {
  label: String;
  iconUrl: any;
};

const Button = ({ label, iconUrl }: ButtonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none text-lg bg-coral-red rounded-full text-white ">
      {label}
      <img
        src={iconUrl}
        alt="icon image"
        className="ml-2 rounded-full w-6 h-6"
      />
    </button>
  );
};

export default Button;
