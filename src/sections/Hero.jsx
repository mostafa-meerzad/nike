import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-md font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-6 font-palanquin text-[5rem] leading-[6.5rem]  max-sm:text-[4rem] max-sm:leading-[5.3rem]   font-bold ">
          <span className="  xl:whitespace-nowrap relative z-10 lg:pr-10  bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block">Nike </span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-md leading-7 mt-4 mb-7 sm:max-w-sm">
          Discover stylish Nike arrivals, quality, comfort and innovation for
          your active life.
        </p>

        <Button label={"Shop now"} iconUrl={arrowRight} />

        <div className="flex justify-start items-start w-full mt-14 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-[2rem] font-bold">
                {stat.value}
              </p>
              <p className="leading-3 font-montserrat text-slate-gray text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center bg-primary bg-hero bg-color bg-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoeImg}
          alt="big shoe 1"
          width={500}
          height={400}
          className="object-contain relative z-10"
        />

        <div className="absolute -bottom-[10%] sm:left-[10%] max-sm:px-6 flex gap-4 sm:gap-6 ">
          {shoes.map((shoe) => (
            <ShoeCard
              imageURL={shoe}
              bigShoeImg={bigShoeImg}
              changeBigShoeImg={setBigShoeImg}
              key={shoe.bigShoe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
