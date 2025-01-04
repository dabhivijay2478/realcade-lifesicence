'use client'
import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import gmp from "@/Images/certificates/gmp.png"
import fss from "@/Images/certificates/ffs.png"
import iso from "@/Images/certificates/ISO.png"
import MFg from "@/Images/certificates/MFg.lic.png"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const certificates = [
    {
        name: "ISO",
        src: iso,
    },
    {
        name: "WHO GMP On 12-Jul-2016",
        src: gmp,
    },
    {
        name: "FFS Technology",
        src: fss,
    },
    {
        name: "Mfg.Lic On 17-Oct-2016",
        src: MFg,
    },

]
const licenses = [
    {
        title: 'WHO GMP',
        validUntil: 'UP TO 24 JUL 2025',
        status: 'Under Approval'
    },
    {
        title: 'MFG. LIC. - 28D',
        validUntil: 'UP TO 16 OCT 2026',
    },
    {
        title: 'ISO 9001:2015',
        validUntil: 'UP TO 05 APR 2025',
    },
    {
        title: 'IVORY COAST',
        validUntil: 'UP TO 07 OCT 2024',
    }
];
export default function CertificatesPage() {
    return (
        <div className='p-4 md:p-10  min-h-screen'>


            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-12 md:py-20 mx-auto max-w-7xl"
            >

                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">

                    <motion.h1
                        className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:inline">
                            License Information
                        </span>
                    </motion.h1>

                </div>
            </motion.section>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {licenses.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 * index, duration: 0.3 }}
                    >
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                            <CardContent className="p-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-center text-gray-800">
                                        {cert.title}
                                    </h3>
                                    <h3 className="text-lg font-semibold text-center text-gray-800">
                                        {cert.validUntil}
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-12 md:py-20 mx-auto max-w-7xl"
            >

                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">

                    <motion.h1
                        className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:inline">
                            Our Certifications
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Demonstrating our commitment to quality and excellence
                    </motion.p>
                </div>
            </motion.section>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 * index, duration: 0.3 }}
                    >
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                            <CardContent className="p-4">
                                <div className="aspect-square relative mb-4 group">
                                    <Image
                                        src={cert.src}
                                        alt={`${cert.name} Certificate`}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="default"
                                                    className="bg-blue-600 hover:bg-blue-700"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-4xl h-[90vh] overflow-hidden flex flex-col">
                                                <div className="flex-grow overflow-auto">
                                                    <Image
                                                        src={cert.src}
                                                        alt={`${cert.name} Certificate`}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-center text-gray-800">
                                        {cert.name}
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}