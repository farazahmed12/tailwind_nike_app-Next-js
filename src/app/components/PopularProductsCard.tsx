import React from "react";
import { star } from "../../../public/icons";

type PopularProductsCardProps = {
  imgURL: any;
  name: String;
  price: String;
};

const PopularProductsCard = ({
  imgURL,
  name,
  price,
}: PopularProductsCardProps) => {
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} className="w-[280px] h-[280px] " />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} height={24} width={24} />
        <p className="font-montserrat text-slate-gray leading-normal text-lg">
          4.5
        </p>
      </div>
      <h3 className="text-2xl font-palanquin font-semibold mt-2 leading-normal">
        {name}
      </h3>
      <p className="text-2xl font-semibold font-montserrat text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
