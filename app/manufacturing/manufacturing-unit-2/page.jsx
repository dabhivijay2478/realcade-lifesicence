'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Building2, Users, Award, Droplet, Wind, Clock, ChevronRight, } from 'lucide-react';
import silde1 from "@/Images/kadi-unit-pic-1.jpg"
import silde2 from "@/Images/manufacturing/2149994398.jpg"
import silde3 from "@/Images/manufacturing/rb_74286.png"
import Image from 'next/image';
import bgabout from "@/Images/aboutbg.jpg"
import Link from 'next/link';
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
const Unit2Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: silde1,
            title: "Valod Manufacturing Unit",
            subtitle: "Advanced Pharmaceutical Production"
        },
        {
            image: silde2,
            title: "State-of-the-art Facility",
            subtitle: "ISO Certified Manufacturing"
        },
        {
            image: silde3,
            title: "Quality Control Lab",
            subtitle: "Cutting-edge Testing Facilities"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: { opacity: 0, scale: 1.1 },
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-6 sm:mt-8 md:mt-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentIndex].image}
                        className="w-full h-full object-cover object-center"
                        alt={slides[currentIndex].title}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />

                    <motion.div
                        className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-6 sm:left-10 md:left-16 lg:left-20 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                            {slides[currentIndex].title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                            {slides[currentIndex].subtitle}
                        </p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-6 sm:right-10 md:right-16 lg:right-20 flex gap-2 sm:gap-3">
                {slides.map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
                            ${index === currentIndex
                                ? 'bg-white scale-110'
                                : 'bg-white/50 hover:bg-white/70'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const CapacityCard = ({ size, capacity, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-lg"
    >
        <h3 className="text-2xl font-bold text-blue-600 dark:text-green-500 mb-3">{size}</h3>
        <div className="flex items-center gap-2 text-green-600 dark:text-blue-500">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">{capacity}</span>
        </div>
    </motion.div>
);

const FacilityFeature = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.03 }}
        className="flex gap-4 p-6 bg-white rounded-xl shadow-lg"
    >
        <div className="bg-purple-100 p-3 rounded-lg h-fit">
            <Icon className="w-6 h-6 text-blue-600 dark:text-green-500" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-800 dark:text-white/90 text-justify">{description}</p>
        </div>
    </motion.div>
);

export default function Unit2Page() {
    const [activeTab, setActiveTab] = useState('overview');

    const capacityData = [
        { size: "100 ml", capacity: "57,200 bottles/day" },
        { size: "500 ml", capacity: "66,000 bottles/day" },
        { size: "1000 ml", capacity: "36,900 bottles/day" }
    ];

    const features = [
        {
            icon: Factory,
            title: "Manufacturing Excellence",
            description: `The manufacturing systems utilize advanced Aseptic Blow Fill Seal technology with a nitrogen blowing facility for sensitive drug production. Clean rooms are constructed with prefabricated panels. Manufacturing takes place in a Grade "C" area, with vessels equipped for chilling and sterilization to support the production of various drug combinations in clear and suspension forms. Filling is conducted in a Grade "A" area with a Grade "C" background. Products undergo terminal sterilization using a Super-Heated Water Spray Sterilizer. The packing lines feature a 100% leak detection system for quality assurance.`
        },
        {
            icon: Droplet,
            title: "Water Management",
            description: "Double pass RO system coupled with EDI+UV and UF for generation of high grade purified water followed by distillation process for generation of SWFI. Continuous recording system for WFI temperature, conductivity and velocity in loop."
        },
        {
            icon: Wind,
            title: "Environmental Control",
            description: "Each activity is supported by a dedicated AHU system. Classified rooms have biometric access control for entry. All personnel and material entries to the plants are interlocked, and material entries are secured with dynamic LAF."
        },
        {
            icon: Building2,
            title: "Infrastructure",
            description: "19,331 m² of modern infrastructure with specialized production zones"
        }
    ];

    return (
        <div className="min-h-screen ">
            <motion.section
                className="relative h-[20vh] lg:h-[40vh] bg-gradient-to-r from-emerald-800 to-blue-900 text-white flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={bgabout}
                        alt="Laboratory"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="container mx-auto px-6 z-10 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        {...fadeIn}
                    >
                        Manufacturing Unit 2
                    </motion.h1>
                    <motion.div
                        className="text-xl md:text-2xl max-w-3xl mx-auto flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                        >
                            Home
                        </Link>

                        <ChevronRight className="text-emerald-200 h-5 w-5" />

                        <Link
                            href="/manufacturing/manufacturing-unit-2"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                        >
                            Manufacturing Unit 2
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <Unit2Carousel />

            <div className="max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold dark:text-green-600 text-blue-500 mb-4">
                        Production Capacity
                    </h2>
                    <p className="text-xl text-gray-800 dark:text-white/90 max-w-6xl mx-auto">
                        To keep the pace with requirements of today&#39;s pharmaceutical industry, we have adopted the most modern Aseptic BFS technology for manufacturing and packaging of Sterile Large Volume Parenteral from 100 ml (57200 Bottle Per Day) , 500 ml (66000 Bottle Per Day) and 1000 ml (36900 Bottle Per Day). Spread over 19331 Sq. mtr of land area near Valod (Gujarat-India), our manufacturing operations are supported by most modern equipments, state - of - art Quality Control. With a total construction area of 5203 sq mts, our state - of - art manufacturing complex with following features gives us a competitive edge:

                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {capacityData.map((item, index) => (
                        <CapacityCard key={index} {...item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {features.map((feature, index) => (
                        <FacilityFeature key={index} {...feature} index={index} />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-20 bg-gradient-to-r from-blue-900 to-green-900 rounded-2xl p-8 text-white"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">130+</div>
                            <div className="text-purple-200">Expert Staff</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">97.8%</div>
                            <div className="text-purple-200">Efficiency Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-purple-200">Operation</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">ISO</div>
                            <div className="text-purple-200">Certified</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}