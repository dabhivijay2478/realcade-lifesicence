'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Building2, Users, Award, Clock, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import silde1 from "@/Images/kadi-unit-pic-1.jpg"
import silde2 from "@/Images/kadi-unit-pic-2.jpg"
import silde3 from "@/Images/kadi-unit-pic-3.jpg"
import silde4 from "@/Images/kadi-unit-pic-4.jpg"
import silde5 from "@/Images/kadi-unit-pic-5.jpg"

import bgabout from "@/Images/aboutbg.jpg"
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const Unit1Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden rounded-lg md:rounded-2xl mt-4 md:mt-10 mx-2 md:mx-10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -1000 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={images[currentIndex]}
                        fill
                        className="object-cover"
                        alt={`Unit 1 Slide ${currentIndex + 1}`}
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            <div className="absolute bottom-8 left-8 text-white">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                >
                    Kadi Manufacturing Unit 
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-white/80"
                >
                    State-of-the-art BFS technology
                </motion.p>
            </div>
        </div>
    );
};

const ProcessStep = ({ step, title, description, isActive }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 10 }}
        className={`border-l-4 ${isActive ? 'border-blue-500' : 'border-gray-300'} pl-4 py-4`}
    >
        <div className="flex items-center gap-4 mb-2">
            <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ type: "spring" }}
            >
                {step}
            </motion.div>
            <h3 className="text-lg md:text-xl font-bold dark:text-blue-600 text-green-500">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-gray-800 dark:text-white/90">{description}</p>
    </motion.div>
);

const Unit1Metrics = ({ metric }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="rounded-xl p-4 md:p-6 shadow-lg"
    >
        <div className="flex items-center gap-4 mb-3">
            <motion.div
                className="bg-blue-100 p-3 rounded-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            </motion.div>
            <div>
                <p className="text-xs md:text-sm text-gray-600">{metric.label}</p>
                <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white/90">
                    {metric.value}
                </p>
            </div>
        </div>
    </motion.div>
);

export default function Unit1Page() {
    const [activeStep, setActiveStep] = useState(1);

    const metrics = [
        {
            icon: Factory,
            label: "Daily Production",
            value: "55,000 units",
            timeframe: "24/7 Operation"
        },
        {
            icon: Building2,
            label: "Facility Area",
            value: "20,330 m²",
            timeframe: "Fully Utilized"
        },
        {
            icon: Users,
            label: "Expert Staff",
            value: "150+",
            timeframe: "Multi-shift"
        },
        {
            icon: Award,
            label: "Efficiency Rate",
            value: "98.5%",
            timeframe: "Consistently Maintained"
        }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Material Preparation",
            description: "Raw materials undergo stringent quality checks in our state-of-the-art testing facility."
        },
        {
            step: 2,
            title: "Aseptic Processing",
            description: "Advanced BFS technology ensures sterile manufacturing environment."
        },
        {
            step: 3,
            title: "Quality Control",
            description: "100% automated inspection system for leak detection and particle analysis."
        },
        {
            step: 4,
            title: "Packaging",
            description: "Automated packaging with real-time tracking and serialization."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev % 4) + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative pt-16 md:pt-24 pb-8 md:pb-12"
            >
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
                            priority
                        />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 z-10 text-center">
                        <motion.h1
                            className="text-3xl md:text-6xl font-bold mb-4"
                            {...fadeIn}
                        >
                            Manufacturing Unit 1
                        </motion.h1>
                        <motion.div
                            className="text-lg md:text-2xl max-w-3xl mx-auto flex items-center justify-center gap-2"
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
                                href="/manufacturing/manufacturing-unit-1"
                                className="text-emerald-200 hover:text-emerald-100 transition-colors"
                            >
                                Manufacturing Unit 1
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>

                <Unit1Slider images={[silde1, silde2, silde3, silde4, silde5]} />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                <h2 className="text-4xl font-bold dark:text-green-600 text-blue-500 mb-4">
                    Production Capacity
                </h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-base md:text-lg text-gray-800 dark:text-white/90 mb-6 md:mb-10'
                >
                    To keep the pace with requirements of today&#39;s pharmaceutical industry, we have adopted the most modern Aseptic BFS technology for manufacturing and packaging of Sterile Large Volume Parenteral from <span className='text-green-500 dark:text-blue-500 font-bold'>100 ml </span>(<span className='text-blue-500 dark:text-green-600 font-bold'>1,00,000 Bottle Per Day</span>) and <span className='text-green-500 dark:text-blue-500 font-bold'>500 ml </span>(<span className='text-blue-500 dark:text-green-600 font-bold'>1,00,000 Bottle Per Day</span>). Spread over  <span className='text-green-600 font-semibold'>20330  Sq. mtr </span> of land area near Kadi-Mehsana (Gujarat-India), our manufacturing operations are supported by most modern equipments, state - of - art Quality Control. With a total construction area of <span className='text-green-600 font-semibold'>6285  sq mts</span>, our state - of - art manufacturing complex with following features gives us a competitive edge:
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
                    {metrics.map((metric, index) => (
                        <Unit1Metrics key={index} metric={metric} />
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white/90 mb-6 md:mb-8">
                            Manufacturing Process
                        </h2>
                        <div className="space-y-2">
                            {processSteps.map((step) => (
                                <ProcessStep
                                    key={step.step}
                                    {...step}
                                    isActive={step.step === activeStep}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
                    >
                        <h2 className="text-xl md:text-2xl font-bold dark:text-green-600 text-blue-500 mb-4 md:mb-6">
                            Key Features
                        </h2>
                        <ul className="space-y-3 md:space-y-4">
                            {[
                                "Aseptic Blow Fill Seal Technology",
                                "Clean Room Grade 'A' Standards",
                                "100% Automated Inspection",
                                "Real-time Process Monitoring",
                                "Advanced HVAC Systems",
                                "Water For Injection Plant"
                            ].map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-sm md:text-base dark:text-blue-600 text-green-500"
                                >
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}