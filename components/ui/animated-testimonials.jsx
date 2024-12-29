"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true
}) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isHovered]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? -45 : 45
    })
  };

  const NavigationButton = ({ onClick, children, className }) => (
    <motion.button
      whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`p-3 rounded-full bg-white/20 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      {children}
    </motion.button>
  );

  const cardVariants = {
    hover: {
      scale: 1.05,
      rotateY: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div
          className="relative h-[400px] sm:h-[400px] w-full perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="h-full w-full relative rounded-3xl overflow-hidden"
              >
                <Image
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          {/* <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > active ? 1 : -1);
                  setActive(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${isActive(index)
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                  }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div> */}
        </div>

        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0.3
              }}
              className="space-y-6"
            >
              <div>
                <motion.h3
                  className="text-3xl sm:text-4xl font-bold dark:text-white text-black"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {testimonials[active].name}
                </motion.h3>
                <motion.p
                  className="text-xl text-gray-500 dark:text-neutral-400 mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[active].designation}
                </motion.p>
              </div>

              <motion.div className="text-lg text-gray-600 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.02,
                      type: "spring",
                      bounce: 0.3
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* <div className="flex justify-between items-center mt-12">
            <NavigationButton onClick={handlePrev}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </NavigationButton>
            <NavigationButton onClick={handleNext}>
              <ArrowRight className="w-6 h-6 text-white" />
            </NavigationButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;