import { motion } from "motion/react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback, variant }) => {
  return (
    <motion.div
      variants={variant}
      className="flex justify-center items-center flex-col"
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font text-3xl text-center font-palanquin font-bold">
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
