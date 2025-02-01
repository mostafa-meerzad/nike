import { motion } from "motion/react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  const parentVariant = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
    hidden: {},
  };
  const childVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.section
      initial={"hidden"}
      whileInView={"visible"}
      variants={parentVariant}
      className="max-container flex justify-center flex-wrap gap-9 "
    >
      {services.map((service) => (
        <ServiceCard variant={childVariant} key={service.label} {...service} />
      ))}
    </motion.section>
  );
};
export default Services;
