import React from "react";
import { star } from "../../../public/icons";

type ReviewCardProps = {
  imgURL: String;
  customerName: String;
  rating: Number;
  feedback: String;
};

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full objec-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center text-info">{feedback}</p>
      <div className="mt-6 justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">
          {rating as Number}
        </p>
      </div>
      <h3 className="text-3xl font-palanquin text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
