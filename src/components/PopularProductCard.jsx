import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[260px] h-[260px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={20} height={20} />
        <p className="font-montserrat text-lg leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-lg leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-md text-coral-red font-semibold leading-normal font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
