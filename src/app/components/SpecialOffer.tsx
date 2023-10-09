import React from "react";
import { offer } from "../../../public/images";
import Button from "./Button";
import { arrowRight } from "../../../public/icons";

const SpecialOffer = () => {
  return (
    <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          <span className="mt-3 text-coral-red inline-block">Special </span>
          Offer
        </h2>
        <p className="mt-14 lg:max-w-lg info-text">
          Discover the latest men's lifestyle and activewear from Nike. Browse
          new footwear and apparel for all levels of activity. Buy Nike in
          Pakistan men's and women's shoes, clothing, and accessories online. A
          wide range of Nike shoes, clothing, and accessories at cheap prices.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Get laced up for training, sport and lifestyle with the latest designs
          of men's shoes and sneakers from Nike.com
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label={"Shop Now"} iconUrl={arrowRight} />
          <Button
            label={"Learn More"}
            backgroundColor={`bg-white`}
            borderColor={"border-slate-gray"}
            textColor={"text-slate-gray"}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
