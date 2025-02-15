import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Globe2,
    Award,
    Building2,
    Shield,
    Factory,
    CheckCircle2,
    PackageCheck,
    Map,
    FileCheck
} from 'lucide-react';

export default function GlobalPresenceBlog() {
    

    return (
        <article className="min-h-screen ">
            {/* Hero Header */}
            <header className="relative bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 text-white py-24">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <Globe2 className="h-6 w-6 text-blue-300" />
                        <span className="text-blue-300 font-medium">Global Excellence</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Global Presence & Certifications
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        Elevating pharmaceutical manufacturing through international partnerships
                        and commitment to quality standards since 2012.
                    </p>
                </div>
            </header>

            {/* Introduction Section */}
            <main className="container mx-auto px-4 max-w-4xl">
                <div className="relative z-20 -mt-12 mb-16">
                    <Card className="bg-white shadow-xl">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <Building2 className="h-8 w-8 text-blue-600" />
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 ">Realcade Lifescience Pvt. Ltd.</h2>
                                    <p className="text-gray-600">Kadi, Gujarat, India</p>
                                </div>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Since our establishment in 2012, Realcade Lifescience has emerged as a
                                significant player in pharmaceutical manufacturing, specializing in
                                intravenous (I.V.) fluids. Our commitment to excellence is reflected in
                                our global partnerships and adherence to international quality standards.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Global Partners Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Map className="h-8 w-8 text-blue-600" />
                        <h2 className="text-3xl font-bold">International Partnerships</h2>
                    </div>
                   
                    <Card className="bg-gradient-to-br from-blue-50 to-white mb-8">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Global Procurement Excellence</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our international sourcing strategy ensures access to the highest quality
                                materials and cutting-edge technology. We maintain strategic partnerships
                                with leading suppliers across multiple continents, enabling us to deliver
                                superior pharmaceutical products.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Quality Standards Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="h-8 w-8 text-purple-600" />
                        <h2 className="text-3xl font-bold">Quality Standards & Certifications</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-gradient-to-br from-purple-50 to-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Industry Standards</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">ISO 13485 Quality Management Systems for Medical Devices</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Good Manufacturing Practice (GMP) Standards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Regulatory Compliance with Indian Pharmaceutical Standards</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-blue-50 to-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Commitment</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <FileCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Continuous monitoring and improvement of quality management systems</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FileCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Regular audits and compliance checks</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FileCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">Documentation and traceability of all processes</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <Card className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Commitment to Excellence</h2>
                            <p className="text-lg leading-relaxed">
                                Realcade Lifescience&#39;s global presence and commitment to international
                                quality standards position us as a reliable partner in the pharmaceutical
                                industry. Through our strategic sourcing of premium materials and
                                adherence to rigorous quality controls, we continue to deliver excellence
                                in pharmaceutical manufacturing.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </article>
    );
}