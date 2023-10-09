import React from "react";
import Button from "./Button";

const Subscribe = () => {
  return (
    <div
      className="max-container flex justify-between items-center flex-col gap-10 "
      id="contact-us"
    >
      <h2 className=" font-palanquin sm:text-4xl text-2xl capitalize leading-[20px] sm:leading-[68px] font-bold w-full text-center ">
        Sign Up for{" "}
        <span className="mt-3 text-coral-red inline-block">
          Updates and News Letter
        </span>
      </h2>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"Subscribe"} widthfull={true} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
