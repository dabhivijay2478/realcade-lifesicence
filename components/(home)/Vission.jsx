'use client'
import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Gem,Check  } from "lucide-react";

const WobbleCard = ({ children, containerClassName = "", className = "", bgImage = "" }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl p-8 ${containerClassName}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Background Image Layer */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${bgImage}`}
        style={{ filter: 'brightness(0.3)' }}
      />

      <motion.div
        className={`relative z-10 h-full ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

const IconWrapper = ({ children }) => (
  <motion.div
    className="inline-block mr-2"
    whileHover={{
      rotate: 360,
      scale: 1.2,
      transition: { duration: 0.8, ease: "easeInOut" }
    }}
  >
    {children}
  </motion.div>
);

const ValueItem = ({ children, index }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-start space-x-3 mb-4"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 180 }}
        transition={{ duration: 0.3 }}
        className="mt-1 flex-shrink-0"
      >
        <Check className="h-5 w-5 text-blue-400" />
      </motion.div>
      <span className="text-gray-300 text-lg leading-relaxed">{children}</span>
    </motion.li>
  );
};
export default function Vision() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
      },
    }),
  };

  const values = [
    "To maintain an excellent manufacturing facility which meets standards of GMP and QUALITY.",
    "To have a team of competent persons who will constantly maintain manufacturing and quality standards.",
    "To strive relentlessly for continuous updating & up-gradation of systems, technology & knowledge for productivity & quality.",
    "Cater to leading pharmaceutical companies for contract manufacturing & grow as partners of multinationals.",
    "To serve mankind with efficacious medicines at affordable prices."
  ];
  return (
    <div className="min-h-screen p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full"
      >
        {/* Vision Section */}
        <motion.div
          variants={cardVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-2"
        >
          <WobbleCard
            containerClassName="h-full min-h-[500px] lg:min-h-[300px]"
            bgImage="bg-[url('/vision/vision.jpg')]"
          >
            <div className="space-y-6">
              <motion.h2
                className="text-left text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center"
                whileHover={{ x: 10 }}
              >
                <IconWrapper>
                  <Eye className="text-violet-400 h-8 w-8" />
                </IconWrapper>
                Vision
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Our vision at Real Cade Life Science is to be a global leader in the pharmaceutical industry, recognized for our unwavering commitment to innovation, quality, and accessibility. We aspire to set new standards in the development and supply of pharmaceutical medicines and dry injection solutions, improving health outcomes and quality of life for people around the world.
              </motion.p>
            </div>
          </WobbleCard>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={cardVariants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <WobbleCard
            containerClassName="min-h-[400px]"
            bgImage="bg-[url('/vision/mission.jpg')]"
          >
            <div className="space-y-6">
              <motion.h2
                className="text-left text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center"
                whileHover={{ x: 10 }}
              >
                <IconWrapper>
                  <Target className="text-fuchsia-400 h-8 w-8" />
                </IconWrapper>
                Mission
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                At Real Cade Life Science, our mission is to be a leading provider of high-quality pharmaceutical medicines and dry injection solutions, dedicated to enhancing global health and well-being. We are committed to delivering safe, effective, and innovative products that meet the highest standards of quality and efficacy.
              </motion.p>
            </div>
          </WobbleCard>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={cardVariants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-3"
        >
          <WobbleCard
            containerClassName="min-h-[400px]"
            bgImage="bg-[url('/vision/values.jpg')]"
          >
            <div className="space-y-6">
              <motion.h2
                className="text-left text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white flex items-center"
                whileHover={{ x: 10 }}
              >
                <IconWrapper>
                  <Gem className="text-blue-400 h-8 w-8" />
                </IconWrapper>
                Values
              </motion.h2>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                At Real Cade Life Science, our values form the foundation of our commitment to excellence in the pharmaceutical industry. These principles guide our actions, shape our culture, and drive our mission to improve global health.
              </motion.p>
              <motion.ul
                className="mt-6 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {values.map((value, index) => (
                  <ValueItem key={index} index={index}>
                    {value}
                  </ValueItem>
                ))}
              </motion.ul>
            </div>
          </WobbleCard>
        </motion.div>
      </motion.div>
    </div>
  );
}