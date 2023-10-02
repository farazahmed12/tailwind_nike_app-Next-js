import React from "react";
import { services } from "../constants";
import ServicesCard from "./ServicesCard";

const Services = ({}) => {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9 ">
      {services.map((serv, i) => {
        return <ServicesCard key={i} {...serv} />;
      })}
    </div>
  );
};

export default Services;
