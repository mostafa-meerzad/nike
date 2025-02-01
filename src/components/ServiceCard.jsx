import { motion } from "motion/react";

const ServiceCard = ({ imgURL, label, subtext, variant }) => {
  return (
    <motion.div
      variants={variant}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 "
    >
      <div className="w-11 h-11 justify-center items-center flex rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-md leading-normal text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
