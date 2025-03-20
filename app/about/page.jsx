'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight, Dot, Droplet, Wind, Zap } from 'lucide-react';
import Link from 'next/link';
import bgabout from "@/Images/aboutbg.jpg";
import medical from "@/Images/medicalabout.jpg";
import filling from "@/Images/filling-area.png";
import ReactPlayer from 'react-player';
// import CertificatesPage from '@/components/certification';
import bhratvihol from "@/Images/Director-Photos/a1.jpg";
import india from "@/Images/india.jpg";

import congo from "@/Images/country/congo.png"
import Kazakhstan from "@/Images/country/kazakhstan.png"
import korea from "@/Images/country/south-korea.png"
import yeman from "@/Images/country/yemen.png"
import nigeria from "@/Images/country/nigeria.png"
import philippines from "@/Images/country/philippines.png"
import uzbekistan from "@/Images/country/uzbekistan.png"
import vietnam from "@/Images/country/vietnam.png"
import ghana from "@/Images/country/ghana.png"
import kenya from "@/Images/country/kenya.png"
import myanmar from "@/Images/country/myanmar.png"
import cambodia from "@/Images/country/cambodia.png"

import image1 from "@/Images/trunover/1.jpg"
import image2 from "@/Images/trunover/2.jpg"
import image3 from "@/Images/trunover/3.jpg"
import image4 from "@/Images/trunover/4.jpg"
import image5 from "@/Images/trunover/5.jpg"

import cleanroom from "@/Images/cleanroom.jpg"
import processarea from "@/Images/processarea.jpg"
import trunover from "@/Images/trunover/trunover.png"


import {
    UserCog,
    Cpu,
    BarChart3,
    Shield,
    Lightbulb
} from 'lucide-react';
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

const strengths = [
    {
        icon: UserCog,
        title: "Technical Expert",
        description: "Chief Director has over 25 years of experience in Pharmaceutical Formulation IV Fluid Production & Productivity"
    },
    {
        icon: Cpu,
        title: "Technology Analysis",
        description: "We utilize FFS TECHNOLOGY from USA, representing state-of-the-art manufacturing for IV Fluids"
    },
    {
        icon: BarChart3,
        title: "Market Study",
        description: "Second largest supplier in INDIA with 40% installed capacity and second largest exporter with 60% installed capacity"
    },
    {
        icon: Shield,
        title: "Quality Standard",
        description: "Committed to IP Standard in INDIA and BP/USP Standard in Export markets"
    },
    {
        icon: Lightbulb,
        title: "Product Development",
        description: "Continuous update of Product Design, Development, and Market Demand with standard quality and innovation"
    }
];

const internationalMarkets = [
    { country: 'Kazakhstan', code: 'KZ', image: Kazakhstan },
    { country: 'Yemen', code: 'YE', image: yeman },
    { country: 'Kenya', code: 'KE,image:congo', image: kenya },
    { country: 'Myanmar', code: 'MM', image: myanmar },
    { country: 'Philippines', code: 'PH', image: philippines },
    { country: 'Cambodia', code: 'KH', image: cambodia },
    { country: 'Uzbekistan', code: 'UZ', image: uzbekistan },
    { country: 'Ghana', code: 'GH', image: ghana },
    { country: 'Nigeria', code: 'NG', image: nigeria },
    { country: 'Vietnam', code: 'VN', image: vietnam },
    { country: 'Congo', code: 'CG', image: congo },
    { country: 'Korea', code: 'KR', image: korea }
];


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
const images = [
    {
        src: image5,
        alt: "Company Growth 2022",
    },
    {
        src: image2,
        alt: "Company Growth 2022",
    },
    {
        src: image3,
        alt: "Company Growth 2022",
    },
    {
        src: image1,
        alt: "Company Growth 2022",
    },
    {
        src: image4,
        alt: "Company Growth 2022",
    }

];
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
                            <div className="space-y-4 md:space-y-6 text-gray-800 dark:text-white/90 text-left md:text-justify text-base md:text-lg mt-3 max-w-full px-2 md:px-0">
                                <p className="leading-relaxed tracking-normal md:tracking-wide break-words hyphens-auto">
                                    <span className="font-semibold dark:text-green-600 text-blue-500 text-lg md:text-xl">
                                        RealCade LifeScience Pvt. Ltd
                                    </span>
                                    ., located in Kadi-Mehsana, Gujarat, is emerging as one of India&#39;s leading manufacturers of sterile liquids, specializing in advanced Aseptic Form-Fill-Seal (FFS) Technology. Our cutting-edge manufacturing facilities allow us to produce IV Fluids in 100 ml and 500 ml volumes, along with a diverse product range that includes Formulations, Fluid Therapy, Respiratory Solutions, Diluents, and Injections. We are dedicated to maintaining the highest quality standards to meet global pharmaceutical regulations.
                                </p>
                                <p className="leading-relaxed tracking-normal md:tracking-wide break-words hyphens-auto">
                                    As a leader in IV Parenteral Formulations, RealCade LifeScience focuses on innovation, quality, and customer satisfaction. Our expert team and advanced facilities ensure the reliable, safe production of life-saving solutions that cater to healthcare needs worldwide.
                                </p>
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
            <motion.section
                className="relative py-20 "
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <motion.div className="block w-full lg:w-1/2" variants={fadeInFromRight}> {/* Ensures visibility on mobile */}
                            <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <Image
                                    src={bhratvihol}
                                    alt="Bhart Vihol"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transform hover:scale-105 transition-all duration-700"
                                    priority
                                />
                                {/* Optional overlay for better text contrast if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/2"
                            variants={fadeInFromLeft}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                Bharat Vihol
                                <span className="block  dark:text-blue-600 text-green-500">
                                    Director, Realcade Lifescience Pvt. Ltd.
                                </span>
                            </h1>
                            <div className="space-y-4 md:space-y-6 text-gray-800 dark:text-white/90 text-left md:text-justify text-base md:text-lg mt-3 max-w-full px-2 md:px-0">
                                <p className="leading-relaxed tracking-normal md:tracking-wide break-words hyphens-auto">
                                    <span className="font-semibold dark:text-blue-600 text-green-500">Bharat Vihol</span> is the Director of <span className="font-semibold dark:text-green-600 text-blue-500">Realcade Lifescience Pvt. Ltd.</span>, brings over 25 years of expertise in BFS and FFS technology for IV Fluids and Pharmaceutical Formulations. His deep knowledge of plant development, machinery installation, and IV Fluid projects has been instrumental in the company&#39;s growth, making Realcade a leader in oral, injectable, and respiratory solutions.
                                </p>
                            </div>
                            <div className="text-base md:text-lg mt-3 text-left md:text-justify max-w-full px-2 md:px-0">
                                <p className="leading-relaxed tracking-normal md:tracking-wide break-words hyphens-auto">
                                    Under his leadership, Realcade Lifescience has risen to prominence in sterile liquid manufacturing, consistently driving innovation, efficiency, and quality. Bharat&#39;s commitment to excellence and customer satisfaction has ensured Realcade&#39;s continued success and positioned the company at the forefront of the pharmaceutical industry.
                                </p>
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
                    <motion.h1
                        className="mb-6 text-4xl text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:inline">
                            Our Strength
                        </span>
                    </motion.h1>
                    <div className="container mx-auto px-4 py-12">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {strengths.map((strength, index) => {
                                const IconComponent = strength.icon;
                                return (
                                    <div
                                        key={index}
                                        className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 transform hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                                            <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                                                {strength.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {strength.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
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
                    {/* <h2 className="text-4xl font-bold text-center mb-16 dark:text-green-600 text-blue-500 ">Manufacturing Areas</h2>
                    <div className="container mx-auto px-4 py-16">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <motion.div
                                variants={fadeInFromLeft}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.6 }}
                                className="lg:w-1/2 w-full"
                            >
                                <h3 className="text-3xl font-bold mb-8 text-blue-600 dark:text-emerald-400 leading-tight">
                                    Clean Room Area
                                </h3>
                                <ul className="space-y-6">
                                    {['Cleanrooms constructed with Modular Panels',
                                        '5 Clean Room Entry-Exit Procedures with Inter-lock System',
                                        'Separate Dispensing Area, Day Store & Granules Charge Area'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-4 group">
                                            <div className="flex-shrink-0 w-3 h-3 mt-2 bg-emerald-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300"></div>
                                            <span className="text-lg text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeInFromRight}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.6 }}
                                className="lg:w-1/2 w-full"
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                                    <div className="aspect-[4/3] w-full">
                                        <div className="group relative w-full h-full transform transition-transform duration-700 hover:scale-105">
                                            <Image
                                                src={cleanroom}
                                                alt="Clean Room"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-2xl"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div> */}




                    {/* Distribution Section */}
                    <motion.div
                        variants={fadeIn}
                        className=" rounded-xl p-8 shadow-lg mb-20"
                    >
                        <motion.h1
                            className="mb-6 text-4xl text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:inline">
                                Global Presence
                            </span>
                        </motion.h1>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-4 dark:text-green-600 text-blue-500">
                                    India Distribution
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Supplying to more than 15 states across India
                                </p>
                                <Image
                                    src={india}
                                    alt="India distribution map"
                                    className="w-full rounded-lg shadow-md mb-4"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-4 dark:text-green-600 text-blue-500">
                                    International Markets
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Serving countries across multiple continents
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {internationalMarkets.map((market) => (
                                        <div
                                            key={market.code}
                                            className="flex flex-col items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                                        >
                                            <Image
                                                src={market.image}
                                                alt={`${market.country} flag`}
                                                className="w-24 h-24 mb-2 rounded shadow-sm"
                                            />
                                            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">
                                                {market.country}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Turnover Section */}
                    <motion.div
                        variants={fadeIn}
                        className="text-center"
                    >
                        <motion.h1
                            className="mb-6 text-4xl text-center font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:inline">
                                Company Growth
                            </span>
                        </motion.h1>
                        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7] rounded-lg overflow-hidden ">
                            <ReactPlayer
                                url="/videos/dataanalysischart.mp4"
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
                        <p className="text-4xl font-bold text-emerald-500 mt-2">111+ Crore</p>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">Company Turnover in 2022-2023</p>
                        <div className="container mx-auto px-4 py-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="relative group cursor-pointer"
                                    >
                                        <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                            />

                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
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
