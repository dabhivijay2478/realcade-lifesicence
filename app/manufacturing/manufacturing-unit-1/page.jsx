'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Building2, Users, Award, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import silde1 from "@/Images/kadi-unit-pic-1.jpg"
import silde2 from "@/Images/kadi-unit-pic-2.jpg"
import silde3 from "@/Images/kadi-unit-pic-3.jpg"
import silde4 from "@/Images/kadi-unit-pic-4.jpg"
import silde5 from "@/Images/kadi-unit-pic-5.jpg"

import bgabout from "@/Images/aboutbg.jpg"
import Link from 'next/link';
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};


const Unit1Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        silde1,
        silde2,
        silde3,
        silde4,
        silde5,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[70vh] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
                <Image
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, x: 1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -1000 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-full h-full object-cover"
                    alt={`Unit 1 Slide ${currentIndex + 1}`}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-2"
                >
                    Aseptic Manufacturing
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/80"
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
        className={`border-l-4 ${isActive ? 'border-blue-500' : 'border-gray-300'} pl-4 py-4`}
    >
        <div className="flex items-center gap-4 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                {step}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const Unit1Metrics = ({ metric }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-white rounded-xl p-6 shadow-lg"
    >
        <div className="flex items-center gap-4 mb-3">
            <div className="bg-blue-100 p-3 rounded-lg">
                <metric.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-blue-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{metric.timeframe}</span>
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
        <div className="min-h-screen ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative  pt-24 pb-12"
            >

                <motion.section
                    className="relative h-[60vh] bg-gradient-to-r from-emerald-800 to-blue-900 text-white flex items-center justify-center"
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
                            Manufacturing Unit 1
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
                                href="/manufacturing/manufacturing-unit-1"
                                className="text-emerald-200 hover:text-emerald-100 transition-colors"
                            >
                                Manufacturing Unit 1
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>

                <Unit1Slider />

            </motion.div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {metrics.map((metric, index) => (
                        <Unit1Metrics key={index} metric={metric} />
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
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
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-xl p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Key Features
                        </h2>
                        <ul className="space-y-4">
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
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <ArrowRight className="w-5 h-5 text-blue-500" />
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