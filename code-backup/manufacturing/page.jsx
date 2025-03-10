'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import {
    Droplet,
    Wind,
    Zap
} from 'lucide-react';

// Import images 
import bgabout from "@/Images/aboutbg.jpg";
import processArea from "@/Images/processarea.jpg"
import filling from "@/Images/filling-area.png";

// Animation variants
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
};

const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
};

// Technology list
const technologies = [
    {
        title: "FFS Technology from USA",
        isLarge: true
    },
    {
        title: "Class-A Filling Activity with Class-C Background",
        isLarge: false
    },
    {
        title: "Super Heated Water Spray Sterilizer",
        isLarge: false
    }
];

const ManufacturingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={bgabout}
                        alt="Manufacturing Facility"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-500 text-transparent bg-clip-text">
                            Realcade Lifescience Pvt. Ltd.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Leading manufacturer of sterile liquid parenterals since 2013, utilizing advanced Aseptic Form-Fill-Seal technology
                        </p>
                    </motion.div>
                </div>
            </section>

    
            {/* Process Area */}
            <motion.section
                className="py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                        <motion.div variants={fadeInFromRight} className="lg:w-1/2 w-full">
                            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-emerald-400">Process Area</h3>
                            <ul className="space-y-10">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full"></div>
                                    <span>FFS Technology from USA for optimal filling operations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full"></div>
                                    <span>Class-A Filling Activity with Class-C Background</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full"></div>
                                    <span>Super Heated Water Spray Sterilizer System</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeInFromLeft} className="lg:w-1/2 w-full">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={processArea}
                                    alt="Process Area"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                    className="transform hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Manufacturing Facilities */}
            <motion.section
                className="py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center dark:text-green-600 text-blue-500 mb-12">Manufacturing Facilities</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInFromLeft}>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "LVP-1 Facility (500ml)",
                                        details: [
                                            "Batch Preparation Area with 9000L Capacity",
                                            "6000L Storage Facility"
                                        ]
                                    },
                                    {
                                        title: "LVP-2 Facility (100ml)",
                                        details: [
                                            "4000L Manufacturing Capacity",
                                            "3000L Storage Facility"
                                        ]
                                    },
                                    {
                                        title: "LVP-3 Facility (100ml)",
                                        details: [
                                            "4000L Manufacturing Capacity",
                                            "3000L Storage Facility"
                                        ]
                                    }
                                ].map((facility, index) => (
                                    <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                        <h3 className="text-xl font-semibold dark:text-blue-600 text-green-500 mb-4">{facility.title}</h3>
                                        <ul className="space-y-3">
                                            {facility.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={fadeInFromRight}>
                            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7] rounded-lg overflow-hidden shadow-xl">
                                <ReactPlayer
                                    url="/videos/Facilities.mp4"
                                    width="100%"
                                    height="100%"
                                    muted={true}
                                    playing={true}
                                    loop={true}
                                    className="rounded-3xl"
                                    config={{
                                        file: {
                                            attributes: {
                                                controlsList: 'nodownload'
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Filling Area */}
            <motion.section
                className="py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center dark:text-blue-600 text-green-500 mb-12">Filling Area</h2>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                        <motion.div
                            className="lg:w-1/2 space-y-6"
                            variants={fadeInFromRight}
                        >
                            <div className="p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold dark:text-blue-600 text-green-500 mb-4">Advanced Technology</h3>
                                <ul className="space-y-3">
                                    {technologies.map((tech, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {tech.title}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/2 w-full"
                            variants={fadeInFromLeft}
                        >
                            <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg group">
                                <Image
                                    src={filling}
                                    alt="Filling Area"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transform group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Utility Systems */}
            <motion.section
                className="py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center dark:text-blue-600 text-green-500 mb-12">Utility Systems</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Droplet className="w-8 h-8 dark:text-green-600 text-blue-500" />,
                                title: "Water System",
                                details: [
                                    "RO Plant: 5000 LTR/HR",
                                    "EDI Plant: 5000 LTR/HR",
                                    "WFI Generation: 3500 LTR/HR",
                                    "Pure Steam: 500 KG/HR"
                                ]
                            },
                            {
                                icon: <Wind className="w-8 h-8 dark:text-green-600 text-blue-500" />,
                                title: "HVAC System",
                                details: [
                                    "17 AHUs for Classified Areas",
                                    "7 AHUs for Comfort Cooling",
                                    "4 Fresh Air Supply Systems"
                                ]
                            },
                            {
                                icon: <Zap className="w-8 h-8 dark:text-green-600 text-blue-500" />,
                                title: "Power & Steam",
                                details: [
                                    "8 Ton Steam Boiler",
                                    "1050 KVA Diesel Generator"
                                ]
                            }
                        ].map((utility, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="mb-4">{utility.icon}</div>
                                <h3 className="text-xl font-semibold dark:text-blue-600 text-green-500 mb-4">{utility.title}</h3>
                                <ul className="space-y-3">
                                    {utility.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

           
           
        </div>
    );
};

export default ManufacturingPage;