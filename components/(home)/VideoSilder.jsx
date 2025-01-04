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

const VideoHeroSlider = () => {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const items = [
        {
            videoUrl: "/videos/silde1.mp4",
            title: "RealCade LifeScience",
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
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
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
        <div className="w-full mx-auto py-4 px-4 sm:px-4 lg:px-4 mt-28">
            <motion.div
                className="relative overflow-hidden rounded-xl shadow-xl"
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
                                                <div className="relative w-full h-80 sm:h-96 lg:h-[550px]">
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
                                                            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold dark:text-blue-600 text-green-500 mb-2 sm:mb-3 tracking-tight">
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

                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-2 sm:px-4 lg:px-6">
                        <CarouselPrevious className="pointer-events-auto h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-white/20 bg-black/30 hover:bg-black/40 text-white backdrop-blur-sm transition-all duration-300 opacity-75 hover:opacity-100" />
                        <CarouselNext className="pointer-events-auto h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-white/20 bg-black/30 hover:bg-black/40 text-white backdrop-blur-sm transition-all duration-300 opacity-75 hover:opacity-100" />
                    </div>
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
                                : "w-2 sm:w-3 bg-slate-900 dark:bg-white/90 hover:bg-green-600 "
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