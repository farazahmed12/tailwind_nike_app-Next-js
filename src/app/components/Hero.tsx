import React from "react";
import Button from "./Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full border-2 border-red-500 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 text-coral-red inline-block">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike, arrivals, Quality comfort and innovation for
          your active life.{" "}
        </p>
        <Button label={"Shop Now"} iconUrl={"/icons/arrow-right.svg"} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((item, i) => (
            <div className=" " key={i}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
