'use client'
import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import {
    ArrowDownRight,
    FlaskConical,
    Globe2,
    Microscope,
    Shield,
    CheckCircle2,
    ArrowRight,
    DownloadCloudIcon
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import about from "@/Images/about-3.jpg";
import Link from 'next/link';

// Enhanced animations
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Brochure.pdf';
    link.download = 'company-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const customStyles = `
  @property --border-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  .feature-card {
    position: relative;
    background: transparent;
    border-radius: 0.75rem;
    padding: 1px;
  }

  .feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    padding: 2px;
    background: linear-gradient(
      var(--border-angle),
      rgb(34 197 94 / 0.2),
      rgb(34 197 94 / 0.4),
      rgb(34 197 94 / 0.6),
      rgb(34 197 94 / 0.4),
      rgb(34 197 94 / 0.2)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: border-rotate 3s linear infinite;
  }

  :is(.dark .feature-card)::before {
    background: linear-gradient(
      var(--border-angle),
      rgb(59 130 246 / 0.2),
      rgb(59 130 246 / 0.4),
      rgb(59 130 246 / 0.6),
      rgb(59 130 246 / 0.4),
      rgb(59 130 246 / 0.2)
    );
  }

  @keyframes border-rotate {
    to {
      --border-angle: 360deg;
    }
  }
`;

// Add this useEffect in your LandingPage component


const LandingPage = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const features = [
        { icon: Shield, text: "GMP Certified" },
        { icon: Globe2, text: "International Standards" },
        { icon: FlaskConical, text: "Modern Facilities" },
        { icon: Microscope, text: "Advanced R&D" }
    ];

    const handleMouseEnter = () => {
        setIsHovering(true);
        setIsPlaying(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setIsPlaying(false);
    };
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.textContent = customStyles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);
    return (
        <div className="min-h-screen duration-300">
            {/* Hero Section */}
            <section className="relative min-h-screen pt-20 lg:pt-0 overflow-hidden">
                <div className="absolute inset-0" />
                <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
                <div className="absolute inset-0 bg-gradient-radial from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20" />

                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="min-h-screen flex items-center"
                    >
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">
                            {/* Content Column */}
                            <motion.div variants={fadeInLeft} className="space-y-8">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block"
                                >
                                    <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 text-sm backdrop-blur-sm">
                                        Leading Pharmaceutical Manufacturer
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Badge>
                                </motion.div>

                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Welcome to
                                    <span className="block  dark:text-blue-600 text-green-500">
                                        RealCade LifeScience
                                    </span>
                                </h1>

                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Located in Kadi-Mehsana (Gujarat-India), we are India&#39;s most versatile manufacturer
                                    of sterile liquids in Aseptic Form – Fill – Seal (FFS) Technology. Since our
                                    establishment in 2013, we&#39;ve been setting new standards in pharmaceutical manufacturing.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Link href="/products/IVfluids">
                                            <Button
                                                size="lg"
                                                className="bg-blue-600 dark:bg-green-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-800/25"
                                            >
                                                Explore Products
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </Link>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-2 border-green-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                                            onClick={handleDownload}
                                        >
                                            Download Brochurer
                                            <DownloadCloudIcon className="ml-2 h-5 w-5" />
                                        </Button>
                                    </motion.div>
                                </div>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeInUp}
                                            whileHover={{ scale: 1.05 }}
                                            className="feature-card"
                                        >
                                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl">
                                                <feature.icon className="h-5 w-5 text-green-600 dark:text-blue-400" />
                                                <span className="font-medium">{feature.text}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image Column */}
                            <motion.div
                                variants={fadeInRight}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur-3xl opacity-20 dark:opacity-40 animate-pulse" />
                                <div className="relative w-full">
                                    <motion.div
                                        className="relative group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={about}
                                            alt="Pharmaceutical Facility"
                                            width={500}
                                            height={500}
                                            className="w-full h-auto max-h-[600px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
                                            priority
                                        />

                                        {/* Floating Info Cards - Made Responsive */}
                                        <div className="absolute hidden md:block -left-4 top-1/4 bg-white dark:bg-gray-800 p-2 md:p-4 rounded-xl shadow-xl max-w-[200px] backdrop-blur-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <FlaskConical className="h-4 md:h-5 w-4 md:w-5 text-blue-600 dark:text-blue-400" />
                                                <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Manufacturing</h3>
                                            </div>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                IV Fluids in 100ml & 500ml volumes
                                            </p>
                                        </div>

                                        <div className="absolute hidden md:block -right-4 bottom-1/4 bg-white dark:bg-gray-800 p-2 md:p-4 rounded-xl shadow-xl max-w-[200px] backdrop-blur-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <CheckCircle2 className="h-4 md:h-5 w-4 md:w-5 text-blue-600 dark:text-blue-400" />
                                                <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">Quality</h3>
                                            </div>
                                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                International Regulatory Standards
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Excellence Section with Video */}
            <section section className="relative py-20 overflow-hidden" >
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Video Player Column */}
                        <div className="w-full my-8 px-4 md:px-6">
                            <div
                                className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl mx-auto"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="relative w-full pb-[56.25%]">
                                    <div className="absolute inset-0">
                                        <ReactPlayer
                                            url="https://www.youtube.com/watch?v=bbaJd3U7ums"
                                            width="100%"
                                            height="100%"
                                            controls
                                            playing={isPlaying}
                                            light="/Realcadethumnali.png"
                                            className="rounded-3xl"
                                            config={{
                                                youtube: {
                                                    playerVars: {
                                                        modestbranding: 1,
                                                        controls: 1
                                                    }
                                                },
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload'
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none rounded-3xl" />
                            </div>
                        </div>

                        {/* Content Column */}
                        <motion.div
                            variants={fadeInRight}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                    Our Excellence
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-600 rounded-full" />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="space-y-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="bg-white/50 dark:bg-gray-800/50 border-blue-100 dark:border-blue-900 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Our manufacturing capabilities include IV Fluids in 100 ml & 500 ml volumes.
                                                Our product range includes Formulations, Fluid Therapy, Respiratory Solutions,
                                                Diluents and Injections. We have introduced IV formulations in Antibiotic and
                                                Anti fungal therapeutic segments having vast potential world-wide.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="bg-white/50 dark:bg-gray-800/50 border-blue-100 dark:border-blue-900 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                We are up-coming in both Domestic and International Markets and we are now a
                                                recognized player as IV Parenteral Formulation Company. Contract Manufacturing
                                                (Outsourcing)/Product Partnering is our major thrust area and to facilitate
                                                this process, we have set up most modern F & D facility for product development
                                                activities.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="flex justify-start"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/about" >

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-green-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 group"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;