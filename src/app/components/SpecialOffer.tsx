import React from "react";
import { offer } from "../../../public/images";

const SpecialOffer = () => {
  return (
    <div className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <img
        src={offer}
        width={773}
        height={687}
        className="object-contain w-full "
      />
    </div>
  );
};

export default SpecialOffer;
