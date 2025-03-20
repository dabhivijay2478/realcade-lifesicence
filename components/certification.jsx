'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, Eye, FileText } from "lucide-react"
import gmp from "@/Images/certificates/gmp.png"
import fss from "@/Images/certificates/ffs.png"
import iso from "@/Images/certificates/ISO.png"
import MFg from "@/Images/certificates/MFg.lic.png"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from "@/components/ui/separator"

// Certificates data - will show in a single row at the top
const certificates = [
    {
        name: "ISO 9001:2015",
        src: iso,
        pdfPath: "/certificates/iso.pdf"
    },
    {
        name: "WHO GMP",
        src: gmp,
        pdfPath: "/certificates/gmp.pdf"
    },
    {
        name: "FFS Technology",
        src: fss,
        pdfPath: "/certificates/ffs.pdf"
    },
    {
        name: "Manufacturing License",
        src: MFg,
        pdfPath: "/certificates/mfg.pdf"
    },
]

// Kadi facility licenses
const kadiLicenses = [
    {
        title: 'WHO GMP',
        description: 'World Health Organization Good Manufacturing Practice certification for pharmaceutical manufacturing.',
        pdfPath: "/who-kadi.pdf"
    },
    {
        title: 'RLC of Mfg',
        description: 'Retention of Licence to manufacture for sale of [Large Volume Parenterals / Sera and vaccine / Recombinant DNA (r-DNA) derived drugs] subs by G.S.R. 26(E) dated 19.01.2006 specified in Schedules C and C(1) excluding those specified in Schedule X',
        pdfPath: "/mfg-kadi.pdf"
    },
]

// Valod facility licenses
const valodLicenses = [
    {
        title: 'WHO GMP',
        description: 'World Health Organization Good Manufacturing Practice certification for pharmaceutical manufacturing.',
        pdfPath: "/who-lic-valod.pdf"
    },
    {
      title: 'RLC of Mfg',
      description: 'Retention of Licence to manufacture for sale of [Large Volume Parenterals / Sera and vaccine / Recombinant DNA (r-DNA) derived drugs] subs by G.S.R. 26(E) dated 19.01.2006 specified in Schedules C and C(1) excluding those specified in Schedule X',
        pdfPath: "/mfg-valod.pdf"
    },
]

// Certificate Card Component for the top row
const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="flex flex-col h-full"
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
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
                    <Eye className="w-5 h-5 mr-2" /> View
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
            <h3 className="text-lg font-semibold text-center ">
              {cert.name}
            </h3>
          </div>
          
        </CardContent>
      </Card>
    </motion.div>
  );
};

// License Card Component
const LicenseCard = ({ license, isEven }) => {
  const [showPdf, setShowPdf] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6"
    >
      <Card className={`overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 
        ${isEven ? 'border-r-4 border-green-500' : 'border-l-4 border-blue-500'}`}>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold dark:text-white">
              {license.title}
            </h3>
          </div>
          <p className="text-sm dark:text-white mb-4">
            {license.description}
          </p>
          
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <Dialog open={showPdf} onOpenChange={setShowPdf}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-200 hover:border-blue-300"
                  size="sm"
                >
                  <FileText className="w-4 h-4 mr-2" /> View License
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[90vh] overflow-hidden flex flex-col p-6">
                <div className="w-full h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{license.title}</h3>
                    <a 
                      href={license.pdfPath} 
                      download={`${license.title}.pdf`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                  <iframe
                    src={`${license.pdfPath}#toolbar=0&navpanes=0`}
                    className="w-full flex-grow border border-gray-200 rounded-lg"
                    title={license.title}
                  />
                </div>
              </DialogContent>
            </Dialog>
            
            <a 
              href={license.pdfPath} 
              download={`${license.title}.pdf`}
              className="inline-flex items-center gap-2  text-sm"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function CertificatesPage() {
    return (
        <div className='p-4 md:p-10 min-h-screen'>
            {/* Certifications Section (Top Row) */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="px-4 py-12 md:py-16 mx-auto max-w-7xl"
            >
                <div className="w-full mx-auto text-center">
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
                        className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Demonstrating our commitment to quality and excellence
                    </motion.p>
                </div>
                
                {/* Certifications Cards in a single row */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {certificates.map((cert, index) => (
                        <CertificateCard key={index} cert={cert} />
                    ))}
                </motion.div>
            
            </motion.section>
            
            <Separator className="max-w-7xl mx-auto my-8" />
            
            {/* License Information Section with left/right panels */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-4 py-8 mx-auto max-w-7xl"
            >
                <div className="w-full mx-auto text-center mb-12">
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

                {/* Two-column layout with distinct visual styling */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto">
                    {/* Left Panel - Kadi Facility */}
                    <motion.div 
                        className="flex-1 to-white p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        
                        <div className="flex items-center mb-8">
                            <div className="w-2 h-14 bg-blue-500 mr-4 rounded-full"></div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Kadi Facility Licenses
                            </h3>
                        </div>
                        
                        <div className="space-y-2">
                            {kadiLicenses.map((license, index) => (
                                <LicenseCard 
                                    key={index} 
                                    license={license} 
                                    isEven={false} 
                                />
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Right Panel - Valod Facility */}
                    <motion.div 
                        className="flex-1   p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center mb-8 justify-end">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Valod Facility Licenses
                            </h3>
                            <div className="w-2 h-14 bg-green-500 ml-4 rounded-full"></div>
                        </div>
                        
                        <div className="space-y-2">
                            {valodLicenses.map((license, index) => (
                                <LicenseCard 
                                    key={index} 
                                    license={license} 
                                    isEven={true} 
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}