'use client'
import CertificatesPage from '@/components/certification'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import bgabout from "@/Images/aboutbg.jpg"
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
export default function page() {
    return (
        <div>
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
                        Certification
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
                            href="/certification"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                        >
                            Certification
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <CertificatesPage />
        </div>
    )
}
