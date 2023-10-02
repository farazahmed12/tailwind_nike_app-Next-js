import React from "react";
import Button from "./Button";
import { shoe8 } from "../../../public/images";

const SuperQuality = () => {
  return (
    <section id="about-us">
      <div className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
        <div className="flex flex-1 flex-col">
          <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
            We Provide You
            <span className="mt-3 text-coral-red inline-block">Super </span>
            <span className="mt-3 text-coral-red inline-block">Qualtiy </span>
            Shoes
          </h2>
          <p className="mt-14 lg:max-w-lg info-text">
            Discover the latest men's lifestyle and activewear from Nike. Browse
            new footwear and apparel for all levels of activity. Buy Nike in
            Pakistan men's and women's shoes, clothing, and accessories online.
            A wide range of Nike shoes, clothing, and accessories at cheap
            prices.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Get laced up for training, sport and lifestyle with the latest
            designs of men's shoes and sneakers from Nike.com
          </p>
          <div className="mt-11 ">
            <Button label={"View Details"} />
          </div>
        </div>

        <div className=" flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            className="object-contain "
            width={570}
            height={522}
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
