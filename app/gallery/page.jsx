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
import image13 from "@/Images/Sucessfull-Plants/d1.jpeg"
import image14 from "@/Images/Sucessfull-Plants/d2.jpg"
import image15 from "@/Images/Sucessfull-Plants/d3.jpg"
import image16 from "@/Images/Sucessfull-Plants/d4.jpg"

//Technology
import image17 from "@/Images/Technology-Trial-Run/e1.jpg"
import image18 from "@/Images/Technology-Trial-Run/e2.jpg"
import image19 from "@/Images/Technology-Trial-Run/e3.jpg"
import image20 from "@/Images/Technology-Trial-Run/e4.jpg"
// import imagee5 from "@/Images/Technology-Trial-Run/e5.jpg"
import imagee6 from "@/Images/Technology-Trial-Run/e6.jpg"
import imagee7 from "@/Images/Technology-Trial-Run/e7.jpg"
import imagee8 from "@/Images/Technology-Trial-Run/e8.jpg"
import imagee9 from "@/Images/Technology-Trial-Run/e9.jpg"


//clients 

import image21 from "@/Images/Clients/f1.jpg"
import image22 from "@/Images/Clients/f2.jpg"
import image23 from "@/Images/Clients/f3.jpg"
import image24 from "@/Images/Clients/f4.jpg"

import bgabout from "@/Images/aboutbg.jpg"
import client1 from "@/Images/ValuableClients/client1.jpg"
import client2 from "@/Images/ValuableClients/client2.jpg"
import client3 from "@/Images/ValuableClients/client3.jpg"
import client4 from "@/Images/ValuableClients/client4.jpg"
import client5 from "@/Images/ValuableClients/client5.jpg"
import client6 from "@/Images/ValuableClients/client6.jpg"
import client7 from "@/Images/ValuableClients/client7.jpg"
import client8 from "@/Images/ValuableClients/client8.jpg"
import client9 from "@/Images/ValuableClients/client9.jpg"
import client10 from "@/Images/ValuableClients/client10.jpg"
import client11 from "@/Images/ValuableClients/client11.jpg"
import client12 from "@/Images/ValuableClients/client12.jpg"
import client13 from "@/Images/ValuableClients/client13.jpg"
import client14 from "@/Images/ValuableClients/client14.jpg"
import client15 from "@/Images/ValuableClients/client15.jpg"
import client16 from "@/Images/ValuableClients/client16.jpg"
import client17 from "@/Images/ValuableClients/client17.jpg"
import client18 from "@/Images/ValuableClients/client18.jpg"
import client19 from "@/Images/ValuableClients/client19.jpg"

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
        // { id: 21, src: imagee5, alt: "Tech Trial 5" },
        { id: 22, src: imagee6, alt: "Tech Trial 6" },
        { id: 23, src: imagee7, alt: "Tech Trial 7" },
        { id: 24, src: imagee8, alt: "Tech Trial 8" },
        { id: 25, src: imagee9, alt: "Tech Trial 9" },
    ],
    "Valuable Clients": [
        { id: 26, src: image21, alt: "Client " },
        { id: 27, src: image22, alt: "Client " },
        { id: 28, src: image23, alt: "Client " },
        { id: 29, src: image24, alt: "Client " },
        { id: 30, src: client1, alt: "Client " },
        // { id: 31, src: client2, alt: "Client " },
        // { id: 32, src: client3, alt: "Client " },
        { id: 33, src: client4, alt: "Client " },
        { id: 34, src: client5, alt: "Client " },
        // { id: 35, src: client6, alt: "Client " },
        // { id: 36, src: client7, alt: "Client " },
        { id: 37, src: client8, alt: "Client " },
        // { id: 38, src: client9, alt: "Client " },
        // { id: 39, src: client10, alt: "Client " },
        { id: 40, src: client11, alt: "Client " },
        { id: 41, src: client12, alt: "Client " },
        { id: 42, src: client13, alt: "Client " },
        { id: 43, src: client14, alt: "Client " },
        { id: 44, src: client15, alt: "Client " },
        { id: 45, src: client16, alt: "Client " },
        { id: 46, src: client17, alt: "Client " },
        { id: 47, src: client18, alt: "Client " },
        { id: 48, src: client19, alt: "Client " },
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