'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, Droplet, Wind, Zap } from 'lucide-react';
import Link from 'next/link';
import bgabout from "@/Images/aboutbg.jpg";
import medical from "@/Images/medicalabout.jpg";
import filling from "@/Images/filling-area.png";
import ReactPlayer from 'react-player';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
};

const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
};

export default function AboutUs() {
    return (
        <div className="min-h-screen">
            {/* Keeping existing header section */}
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
                <div className="container mx-auto px-6 z-10 text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4"
                        {...fadeIn}
                    >
                        About Us
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
                            href="/about"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                        >
                            About Us
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <motion.section
                className="relative py-20 "
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            className="lg:w-1/2"
                            variants={fadeInFromLeft}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                Welcome to
                                <span className="block  dark:text-blue-600 text-green-500">
                                    RealCade LifeScience
                                </span>
                            </h1>
                            <div className="space-y-4 text-gray-800 dark:text-white/90">
                                <p>Realcade Lifescience Pvt. Ltd., located in Kadi-Mehsana (Gujarat-India) has up-coming as India&39;s most versatile manufacturer of sterile liquids in Aseptic Form – Fill – Seal (FFS) Technology.</p>
                                <p>Our capabilities include manufacturing IV Fluids in 100 ml & 500 ml volumes. Our product range includes Formulations, Fluid Therapy, Respiratory Solutions, Diluents and Injections.</p>
                                <p>We are up-coming in both Domestic and International Markets and are now a recognized player as IV Parenteral Formulation Company.</p>
                            </div>
                        </motion.div>
                        <motion.div className="block w-full lg:w-1/2" variants={fadeInFromRight}> {/* Ensures visibility on mobile */}
                            <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <Image
                                    src={medical}
                                    alt="Welcome Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transform hover:scale-105 transition-all duration-700"
                                    priority
                                />
                                {/* Optional overlay for better text contrast if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            {/* Our Strength Section */}
            <motion.section
                className="py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 dark:text-green-600 text-blue-500 ">Our Strength</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            {
                                title: "Technical Expert",
                                description: "Chief Director has over 25 years of experience in Pharmaceutical Formulation IV Fluid Production & Productivity"
                            },
                            {
                                title: "Technology Analysis",
                                description: "We utilize FFS TECHNOLOGY from USA, representing state-of-the-art manufacturing for IV Fluids"
                            },
                            {
                                title: "Market Study",
                                description: "Second largest supplier in INDIA with 40% installed capacity and second largest exporter with 60% installed capacity"
                            },
                            {
                                title: "Quality Standard",
                                description: "Committed to IP Standard in INDIA and BP/USP Standard in Export markets"
                            },
                            {
                                title: "Product Development",
                                description: "Continuous update of Product Design, Development, and Market Demand with standard quality and innovation"
                            }
                        ].map((strength, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] p-8  rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">{strength.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{strength.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Manufacturing Areas Section */}
            <motion.section
                className="py-20 "
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 dark:text-green-600 text-blue-500 ">Manufacturing Areas</h2>

                    {/* Clean Room Area */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                        <motion.div variants={fadeInFromLeft} className="lg:w-1/2">
                            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-emerald-400">Clean Room Area</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full"></div>
                                    <span>Cleanrooms constructed with Modular Panels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full"></div>
                                    <span>5 Clean Room Entry-Exit Procedures with Inter-lock System</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full"></div>
                                    <span>Separate Dispensing Area, Day Store & Granules Charge Area</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeInFromRight} className="lg:w-1/2">
                            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/cleanroom.jpg"
                                    alt="Clean Room"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transform hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Process Area */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
                        <motion.div variants={fadeInFromRight} className="lg:w-1/2">
                            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-emerald-400">Process Area</h3>
                            <ul className="space-y-4">
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
                        <motion.div variants={fadeInFromLeft} className="lg:w-1/2">
                            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/process.jpg"
                                    alt="Process Area"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transform hover:scale-105 transition-all duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Distribution Section */}
                    <motion.div
                        variants={fadeIn}
                        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-20"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-center dark:text-green-600 text-blue-500 ">Global Presence</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-4 dark:text-green-600 text-blue-500 ">India Distribution</h4>
                                <p className="text-gray-600 dark:text-gray-300">Supplying to more than 15 states across India</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-4 dark:text-green-600 text-blue-500 ">International Markets</h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Serving countries including Kazakhstan, Yemen, Kenya, Myanmar, Philippines, Cambodia, Uzbekistan, Ghana, Nigeria, Vietnam, Congo, Korea, and more
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Turnover Section */}
                    <motion.div
                        variants={fadeIn}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-emerald-600 dark:text-emerald-400">Company Growth</h3>
                        <p className="text-4xl font-bold text-emerald-500">111+ Crore</p>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">Turnover in 2022-2023</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Keeping existing sections */}
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
                                    <div key={index} className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
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
                                <h3 className="text-xl font-bold dark:text-green-600 text-blue-500 mb-4">Advanced Technology</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 dark:text-green-600 text-blue-500 rounded-full"></div>
                                        <span>FFS Technology from USA</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 dark:text-green-600 text-blue-500 rounded-full"></div>
                                        <span>Class-A Filling Activity with Class-C Background</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 dark:text-green-600 text-blue-500 rounded-full"></div>
                                        <span>Super Heated Water Spray Sterilizer</span>
                                    </li>
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
                                {/* Enhanced hover effect overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </motion.section>
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
                                icon: <Droplet className="w-8 h-8 dark:text-green-600 text-blue-500 " />,
                                title: "Water System",
                                details: [
                                    "RO Plant: 5000 LTR/HR",
                                    "EDI Plant: 5000 LTR/HR",
                                    "WFI Generation: 3500 LTR/HR",
                                    "Pure Steam: 500 KG/HR"
                                ]
                            },
                            {
                                icon: <Wind className="w-8 h-8 dark:text-green-600 text-blue-500 " />,
                                title: "HVAC System",
                                details: [
                                    "17 AHUs for Classified Areas",
                                    "7 AHUs for Comfort Cooling",
                                    "4 Fresh Air Supply Systems"
                                ]
                            },
                            {
                                icon: <Zap className="w-8 h-8 dark:text-green-600 text-blue-500 " />,
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
                                className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <div className="mb-4">{utility.icon}</div>
                                <h3 className="text-xl font-semibold dark:text-blue-600 text-green-500  mb-4">{utility.title}</h3>
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
            <motion.section
                className="py-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="w-full">
                    {/* Manufacturing Section */}
                    <motion.section
                        className="relative aspect-[21/9] sm:aspect-[21/10] md:aspect-[21/8] lg:aspect-[21/7] bg-cover bg-center mb-10"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        style={{
                            backgroundImage: `url('/vision/excellence.jpg')`,
                        }}
                    >
                        <div className="absolute inset-0 bg-emerald-900/80"></div>
                        <div className="relative container mx-auto px-6">
                            <motion.div
                                variants={fadeIn}
                                className="max-w-3xl mx-auto text-center"
                            >
                                <h2 className="text-4xl font-bold text-white mb-8">Manufacturing Excellence</h2>
                                <div className="bg-emerald-900/80 backdrop-blur-md rounded-xl p-8 shadow-xl">
                                    <p className="text-white text-lg leading-relaxed">
                                        Our Manufacturing takes place in completely sterile environment using Form-Fill-Seal Technology ensuring No Human Touch. With highly equipped in-house Quality Control Laboratory, systemic checks are conducted in-process and on final stages of preparation, ensuring utmost safety for our customers.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Mission Section */}
                    <motion.section
                        className="relative aspect-[21/9] sm:aspect-[21/10] md:aspect-[21/8] lg:aspect-[21/7] bg-cover bg-center mb-10"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        style={{
                            backgroundImage: `url('/vision/mission2.jpg')`
                        }}
                    >
                        <div className="absolute inset-0 bg-emerald-900/80"></div>
                        <div className="relative container mx-auto px-6">
                            <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
                                <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Mission</h2>
                                <div className="grid gap-6">
                                    {[
                                        "Discover, develop and continuously contribute to patients and healthcare professionals by providing them with useful information on Fluid Therapy",
                                        "Total customer satisfaction and achieve leadership in chosen markets, products and services across the globe, through excellence in technology, based on world-class research and development.",
                                        "We are responsible to the society and build the company on the values of Honesty, Initiative, and Growth."
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeIn}
                                            className="bg-emerald-900/80 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4 ">
                                                <span className="flex-shrink-0 w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center text-white font-bold">
                                                    {index + 1}
                                                </span>
                                                <p className="text-white text-lg leading-relaxed">{item}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Vision Section */}
                    <motion.section
                        className="relative aspect-[21/9] sm:aspect-[21/10] md:aspect-[21/8] lg:aspect-[21/7] bg-cover bg-center"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        style={{
                            backgroundImage: `url('/vision/vision2.jpg')`
                        }}
                    >
                        <div className="absolute inset-0 "></div>
                        <div className="relative container mx-auto px-6">
                            <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
                                <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Vision</h2>
                                <div className="grid gap-6">
                                    {[
                                        "To maintain an excellent manufacturing facility which meets standards of GMP and QUALITY.",
                                        "To have a team of competent persons who will constantly maintain manufacturing and quality standards.",
                                        "To strive relentlessly for continuous updating & up-gradation of systems, technology & knowledge for productivity & quality.",
                                        "Cater to leading pharmaceutical companies for contract manufacturing & grow as partners of multinationals.",
                                        "To serve mankind with efficacious medicines at affordable prices."
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeIn}
                                            className="bg-emerald-900/80 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center">
                                                    <svg
                                                        className="w-6 h-6 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                                <p className="text-white text-lg leading-relaxed">{item}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>

            </motion.section>
        </div>
    );
}
