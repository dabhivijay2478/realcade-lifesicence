'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Custom CSS for gradient animation
const customStyles = `
  @property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  @keyframes gradient-rotation {
    0%   { --gradient-angle: 0deg; }
    100% { --gradient-angle: 360deg; }
  }

  .gradient-border-wrapper::before {
    content: '';
    position: absolute;
    inset: -4px;
    z-index: -1;
    background: linear-gradient(
      var(--gradient-angle),
      #4f46e5,
      #3b82f6,
      #06b6d4,
      #3b82f6,
      #4f46e5
    );
    border-radius: 1rem;
    animation: gradient-rotation 5s linear infinite;
  }

  .gradient-border-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0.875rem;
    z-index: -1;
  }
`;

const VideoHeroSlider = () => {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const items = [
        {
            videoUrl: "/videos/silde1.mp4",
            title: "Realcade Lifescience Pvt. Ltd.",
            subtitle: "Innovation to Implementation",
            description: "Design to Directives",
        },
        {
            videoUrl: "/videos/silde2.mp4",
            title: "Impeccable Products",
            description: "Quality services for our clients",
        }
    ];

    useEffect(() => {
        // Add custom styles to document head
        const styleSheet = document.createElement("style");
        styleSheet.textContent = customStyles;
        document.head.appendChild(styleSheet);

        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        // Cleanup
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, [api]);

    const slideVariants = {
        initial: { opacity: 0, scale: 0.98 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.4 }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="w-full mx-auto py-4 px-4 sm:px-4 lg:px-4 mt-32">
            <motion.div
                className="relative gradient-border-wrapper rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        loop: true,
                        align: "center",
                        skipSnaps: false,
                    }}
                >
                    <CarouselContent>
                        <AnimatePresence mode="wait">
                            {items.map((item, index) => (
                                <CarouselItem key={index}>
                                    <motion.div
                                        variants={slideVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <Card className="border-0 bg-transparent overflow-hidden">
                                            <CardContent className="p-0">
                                                <div className="relative w-full h-80 sm:h-96 lg:h-[550px] rounded-lg overflow-hidden">
                                                    <div className="absolute inset-0">
                                                        <ReactPlayer
                                                            url={item.videoUrl}
                                                            playing={current === index}
                                                            loop
                                                            muted
                                                            width="100%"
                                                            height="100%"
                                                            style={{
                                                                objectFit: 'cover',
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0
                                                            }}
                                                            config={{
                                                                file: {
                                                                    attributes: {
                                                                        style: {
                                                                            objectFit: 'cover',
                                                                            width: '100%',
                                                                            height: '100%'
                                                                        }
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />

                                                    <motion.div
                                                        className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8"
                                                        variants={contentVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                    >
                                                        <div className="max-w-3xl">
                                                            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-2 sm:mb-3 tracking-tight">
                                                                {item.title}
                                                            </h2>
                                                            {item.subtitle && (
                                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                                                                    {item.subtitle}
                                                                </h3>
                                                            )}
                                                            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </AnimatePresence>
                    </CarouselContent>

                    {/* <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-2 sm:px-4 lg:px-6">
                        <CarouselPrevious className="pointer-events-auto h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-white/20 bg-black/30 hover:bg-black/40 text-white backdrop-blur-sm transition-all duration-300 opacity-75 hover:opacity-100" />
                        <CarouselNext className="pointer-events-auto h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-white/20 bg-black/30 hover:bg-black/40 text-white backdrop-blur-sm transition-all duration-300 opacity-75 hover:opacity-100" />
                    </div> */}
                </Carousel>
            </motion.div>

            <motion.div
                className="flex justify-center items-center gap-1 sm:gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                {Array.from({ length: count }).map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                            "h-2 sm:h-3 rounded-full transition-all duration-300",
                            current === index
                                ? "w-8 sm:w-12 bg-blue-500"
                                : "w-2 sm:w-3 bg-slate-900 dark:bg-white/90 hover:bg-blue-600"
                        )}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default VideoHeroSlider;