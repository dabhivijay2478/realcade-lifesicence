'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import Image from 'next/image';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
//Director
import image1 from "@/Images/Director-Photos/a1.jpg"
import image2 from "@/Images/Director-Photos/a2.jpg"
import image3 from "@/Images/Director-Photos/a3.jpg"
import image4 from "@/Images/Director-Photos/a6.jpg"

//Project 

import image5 from "@/Images/Project-work/c1.jpg"
import image6 from "@/Images/Project-work/c2.jpg"
import image7 from "@/Images/Project-work/c3.jpg"
import image8 from "@/Images/Project-work/c4.jpg"

//Minister

import image9 from "@/Images/Health-Minister-Visit/b1.jpg"
import image10 from "@/Images/Health-Minister-Visit/b2.jpg"
import image11 from "@/Images/Health-Minister-Visit/b3.jpg"
import image12 from "@/Images/Health-Minister-Visit/b4.jpg"

//plants
import image13 from "@/Images/Sucessfull-Plants/d1.jpg"
import image14 from "@/Images/Sucessfull-Plants/d2.jpg"
import image15 from "@/Images/Sucessfull-Plants/d3.jpg"
import image16 from "@/Images/Sucessfull-Plants/d4.jpg"

//Technology
import image17 from "@/Images/Technology-Trial-Run/e1.jpg"
import image18 from "@/Images/Technology-Trial-Run/e2.jpg"
import image19 from "@/Images/Technology-Trial-Run/e3.jpg"
import image20 from "@/Images/Technology-Trial-Run/e4.jpg"

//clients 

import image21 from "@/Images/Clients/f1.jpg"
import image22 from "@/Images/Clients/f2.jpg"
import image23 from "@/Images/Clients/f3.jpg"
import image24 from "@/Images/Clients/f4.jpg"

import bgabout from "@/Images/aboutbg.jpg"
import Link from 'next/link';
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
const galleryData = {
    "Director Photos": [
        { id: 1, src: image1, alt: "Director " },
        { id: 2, src: image2, alt: "Director " },
        { id: 3, src: image3, alt: "Director" },
        { id: 4, src: image4, alt: "Director" },
    ],
    "Project Work": [
        { id: 5, src: image5, alt: "Project 1" },
        { id: 6, src: image6, alt: "Project 2" },
        { id: 7, src: image7, alt: "Project 3" },
        { id: 8, src: image8, alt: "Project 4" },
    ],
    "Health Minister Visit": [
        { id: 9, src: image9, alt: "Minister " },
        { id: 10, src: image10, alt: "Minister " },
        { id: 11, src: image11, alt: "Minister " },
        { id: 12, src: image12, alt: "Minister " },
    ],
    "Successful Plants": [
        { id: 13, src: image13, alt: "Plant 1" },
        { id: 14, src: image14, alt: "Plant 2" },
        { id: 15, src: image15, alt: "Plant 3" },
        { id: 16, src: image16, alt: "Plant 4" },
    ],
    "Technology Trial Run": [
        { id: 17, src: image17, alt: "Tech Trial 1" },
        { id: 18, src: image18, alt: "Tech Trial 2" },
        { id: 19, src: image19, alt: "Tech Trial 3" },
        { id: 20, src: image20, alt: "Tech Trial 4" },
    ],
    "Valuable Clients": [
        { id: 21, src: image21, alt: "Client " },
        { id: 22, src: image22, alt: "Client " },
        { id: 23, src: image23, alt: "Client " },
        { id: 24, src: image24, alt: "Client " },
    ],
};
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState({});

    const navigateImage = (direction) => {
        const allImages = Object.values(galleryData).flat();
        const currentIndex = allImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % allImages.length;
        } else {
            newIndex = currentIndex - 1 < 0 ? allImages.length - 1 : currentIndex - 1;
        }

        setSelectedImage(allImages[newIndex]);
    };

    return (
        <>
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
                        Gallery
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
                            href="/gallery"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                        >
                            Gallery
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <div className="min-h-screen  px-4 py-8 md:px-6 lg:px-8 mt-24">
                {/* Gallery Sections */}
                {Object.entries(galleryData).map(([category, images]) => (
                    <div key={category} className="mb-16">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-2">
                                {category}
                            </h2>
                            <motion.div
                                className="h-1 w-24 mx-auto bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '6rem' }}
                                viewport={{ once: true }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {images.map((image) => (
                                <motion.div
                                    key={image.id}
                                    whileHover={{ y: -5 }}
                                    className="group relative rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
                                >
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setSelectedImage(image);
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        {!imageLoaded[image.id] && (
                                            <div className="absolute inset-0  animate-pulse" />
                                        )}

                                        <div className="relative pb-[75%]">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className={`absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${imageLoaded[image.id] ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                quality={100}
                                                onLoadingComplete={() => {
                                                    setImageLoaded(prev => ({
                                                        ...prev,
                                                        [image.id]: true
                                                    }));
                                                }}
                                            />
                                        </div>

                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-white flex flex-col items-center gap-2">
                                                <Eye className="w-8 h-8" />
                                                <span className="text-sm font-medium">View Image</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}

                {/* Modal for Full Image View */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95 backdrop-blur-md">
                        <AnimatePresence mode="wait">
                            {selectedImage && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.alt}
                                            className="w-auto h-auto max-w-full max-h-full object-contain"
                                            width={1200}
                                            height={1200}
                                            quality={100}
                                            priority
                                        />
                                    </div>

                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigateImage('prev');
                                            }}
                                            className="p-2 rounded-full  shadow-lg transition-transform"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-green-600" />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigateImage('next');
                                            }}
                                            className="p-2 rounded-full  shadow-lg transition-transform"
                                        >
                                            <ChevronRight className="w-6 h-6 text-green-600" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default GalleryPage;