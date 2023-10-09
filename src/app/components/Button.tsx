import React from "react";

type ButtonProps = {
  label: String;
  iconUrl?: any;
  backgroundColor?: String;
  borderColor?: String;
  textColor?: String;
  widthfull?: Boolean;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  widthfull,
}: ButtonProps) => {
  return (
    <button
      className={`hover:scale-105 duration-200 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor} `
          : "text-white text-lg bg-coral-red"
      } rounded-full ${widthfull && "w-full"} `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon image"
          className="ml-2 rounded-full w-6 h-6"
        />
      )}
    </button>
  );
};

export default Button;
