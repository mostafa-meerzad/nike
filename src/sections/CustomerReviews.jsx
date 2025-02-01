import { motion } from "motion/react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
    hidden: {},
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={parentVariants}
        className="flex justify-evenly flex-1 mt-24 items-center max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard
            variant={childVariants}
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </motion.div>
    </section>
  );
};
export default CustomerReviews;
