import { motion } from "motion/react";
import { useState } from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const parentVariants = {
    clicked: { scale: 0.95 },
    default: { scale: 1 },
  };

  const childVariants = {
    clicked: { opacity: 0, x: 30 },
    default: { opacity: 1, x: 0 },
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      variants={parentVariants}
      onMouseDown={() => setIsClicked(!isClicked)}
      onMouseUp={() => setIsClicked(false)}
      className={`
      flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red  border-coral-red text-white"
      }
      rounded-full
      ${fullWidth && "w-full"}

  
    `}
    >
      {label}
      {iconUrl && (
        <motion.img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
          variants={childVariants}
          animate={isClicked ? "clicked" : "default"}
        />
      )}
    </motion.button>
  );
};
export default Button;
