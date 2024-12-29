'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Sparkles from "../Sparkles";
import JB from "@/Images/Client/jb-logo.png";
import laborate from "@/Images/Client/Laborate.png";
import otsuka from "@/Images/Client/Otsuka.png";
const LogoCarousel = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const logos = [
    { src: JB, alt: "JB Logo" },
    { src: laborate, alt: "Laborate Logo" },
    { src: otsuka, alt: "Otsuka Logo" },
  ];

  useEffect(() => {
    const startAnimation = async () => {
      await Promise.all([
        leftControls.start({
          x: [0, -1920],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        }),
        rightControls.start({
          x: [1920, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        }),
      ]);
    };
    startAnimation();
  }, [leftControls, rightControls]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="flex flex-col gap-2">
            <span className="text-2xl font-bold dark:text-blue-600 text-green-500 sm:text-3xl md:text-4xl">
              Trusted by experts.
            </span>
            <span className="text-2xl font-bold dark:text-green-600 text-blue-500 sm:text-3xl md:text-4xl">
              Used by the leaders.
            </span>
          </h2>
        </div>

        {/* Logo Carousel Section */}
        <div className="relative overflow-hidden py-8">
          {/* First Row - Moving Left */}
          <motion.div
            className="flex space-x-16 mb-12"
            animate={leftControls}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`left-${index}`}
                className="flex-none group relative"
              >
                <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second Row - Moving Right */}
          <motion.div
            className="flex space-x-16"
            animate={rightControls}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`right-${index}`}
                className="flex-none group relative"
              >
                <div className="w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96 [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
};

export default LogoCarousel;