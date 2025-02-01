import { motion } from "motion/react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{duration:1.3} }}
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-6 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> {""}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premium selections to incredible savings, we
          offer unparalleled value that sets us apart.{" "}
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities that are designed to fulfill your
          unique desires, surpassing the loftiest expectation. Your journey with
          ur is nothing short of exceptional.{" "}
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label={"Shop now"} iconUrl={arrowRight} />
          <Button
            label={"Learn more"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            iconUrl={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
