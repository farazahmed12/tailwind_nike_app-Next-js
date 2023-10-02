import React, { useState, useEffect } from "react";
import { products } from "../constants";
import PopularProductsCard from "./PopularProductsCard";

export default function PopularProducts() {
  return (
    <section id="products">
      <div className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red ">Popular </span>Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Explore top-notch quality with our website. Discover the latest
            popular Products
          </p>
          <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((prd, i) => {
              return <PopularProductsCard key={i} {...prd} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
