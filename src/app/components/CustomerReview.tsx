import React from "react";
import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-palanquin text-center font-bold">
        What Our <span className="text-coral-red">Customer </span>says?
      </h3>
      <p className="info-text max-w-lg m-auto mt-4 text-center">
        Get laced up for training, sport and lifestyle with the latest designs
        of men's shoes and sneakers from Nike.com
      </p>

      <div className="mt-24 flex-1 flex items-center justify-evenly max-lg:flex-col gap-14">
        {reviews.map((item, i) => {
          return (
            <ReviewCard
              imgURL={item.imgURL}
              customerName={item.customerName}
              feedback={item.feedback}
              rating={item.rating}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReview;
