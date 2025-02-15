import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Factory,
    Building2,
    Droplets,
    Settings,
    Wind,
    Layers,
    FlaskConical,
    PackageCheck,
    Scale,
    Warehouse,
    BadgeCheck,
    Shield,
    Target,
    ChevronRight,
    MapPin,
    Clock
} from 'lucide-react';

export default function DetailedFacilitiesBlog() {

    return (
        <article className="min-h-screen ">
            {/* Hero Header */}
            <header className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-32">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <Factory className="h-6 w-6 text-blue-300" />
                        <span className="text-blue-300 font-medium tracking-wide">Manufacturing Infrastructure</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                        Inside Realcade&#39;s State-of-the-Art Manufacturing Facilities
                    </h1>
                    <div className="max-w-3xl">
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                            A deep dive into our cutting-edge pharmaceutical manufacturing units, advanced technology,
                            and comprehensive infrastructure.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-6 mt-8">
                        <div className="flex items-center gap-2 text-blue-200">
                            <Clock className="h-5 w-5" />
                            <span>12 min read</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-200">
                            <MapPin className="h-5 w-5" />
                            <span>Kadi-Mehsana, Gujarat</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 max-w-5xl">
                {/* Introduction Card */}
                <div className="relative z-20 -mt-16 mb-16">
                    <Card className="bg-white shadow-xl">
                        <CardContent className="p-8">
                            <div className="prose max-w-none">
                                <h2 className="text-2xl font-bold mb-4">Manufacturing Excellence Since 2013</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Realcade Lifescience Pvt. Ltd. has established itself as a pioneer in sterile liquid
                                    parenterals manufacturing, particularly specializing in intravenous (I.V.) fluids. Our
                                    journey began in 2013 with a vision to create world-class pharmaceutical manufacturing
                                    facilities that would set new standards in the industry.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Our facilities, strategically located in Gujarat, combine cutting-edge technology with
                                    stringent quality controls to meet and exceed both domestic and international regulatory
                                    standards. This comprehensive overview explores the intricate details of our
                                    manufacturing infrastructure, advanced processes, and commitment to quality.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Key Highlights Section */}
                <section className="mb-20">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-blue-50 hover:shadow-lg transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <Target className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-bold">Production Capacity</h3>
                                </div>
                                <p className="text-gray-700">Advanced facilities capable of producing both 500ml and 100ml I.V. fluid containers</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-purple-50 hover:shadow-lg transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                        <Shield className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-bold">Quality Standards</h3>
                                </div>
                                <p className="text-gray-700">Class-A filling conditions with Class-C background environments</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-green-50 hover:shadow-lg transition-all">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Settings className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-bold">Technology</h3>
                                </div>
                                <p className="text-gray-700">USA-sourced Form-Fill-Seal (FFS) technology for optimal sterility</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Unit 1 Detailed Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Building2 className="h-8 w-8 text-blue-600" />
                        <h2 className="text-3xl font-bold">Unit 1: Kadi Manufacturing Facility</h2>
                    </div>

                    <Card className="bg-white mb-8">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Location & Infrastructure</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Situated at Survey No. 891-892, near Y-Junction Narmada Canal, Karannagar, Kadi,
                                            our primary facility is strategically positioned for optimal logistics and
                                            distribution. The unit spans across a carefully planned layout that maximizes
                                            operational efficiency while maintaining strict quality controls.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Production Capabilities</h3>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <BadgeCheck className="h-5 w-5 text-blue-600 mt-1" />
                                                <div>
                                                    <p className="font-semibold">500ml I.V. Fluid Production</p>
                                                    <p className="text-gray-600">Specialized in large volume parenteral solutions</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <BadgeCheck className="h-5 w-5 text-blue-600 mt-1" />
                                                <div>
                                                    <p className="font-semibold">9,000L Manufacturing Vessel</p>
                                                    <p className="text-gray-600">SS 316L grade for superior quality</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <BadgeCheck className="h-5 w-5 text-blue-600 mt-1" />
                                                <div>
                                                    <p className="font-semibold">6,000L Storage Capacity</p>
                                                    <p className="text-gray-600">Temperature-controlled storage solutions</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Technology & Equipment</h3>
                                        <div className="bg-blue-50 p-6 rounded-lg">
                                            <h4 className="font-semibold mb-3">USA FFS Technology Features:</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="h-5 w-5 text-blue-600 mt-1" />
                                                    <span className="text-gray-700">Automated container formation process</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="h-5 w-5 text-blue-600 mt-1" />
                                                    <span className="text-gray-700">Integrated filling system</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="h-5 w-5 text-blue-600 mt-1" />
                                                    <span className="text-gray-700">Hermetic sealing capabilities</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="h-5 w-5 text-blue-600 mt-1" />
                                                    <span className="text-gray-700">Real-time monitoring systems</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Quality Control Measures</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            The facility maintains Class-A conditions during the filling process, supported by
                                            a Class-C background environment. This is achieved through advanced HVAC systems
                                            and regular environmental monitoring protocols.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Unit 2 Detailed Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Building2 className="h-8 w-8 text-green-600" />
                        <h2 className="text-3xl font-bold">Unit 2: Valod Manufacturing Facility</h2>
                    </div>

                    <Card className="bg-white mb-8">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Facility Overview</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Located at Plot No. 1082/P, Takli Road, Valod, Tapi, our second unit complements
                                            our primary facility with specialized capabilities for smaller volume production.
                                            The facility incorporates modern design principles that optimize workflow while
                                            maintaining the highest standards of sterility.
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-3">Key Specifications:</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="h-5 w-5 text-green-600 mt-1" />
                                                <div>
                                                    <p className="font-semibold">Manufacturing Vessel</p>
                                                    <p className="text-gray-600">4,000L SS 316L grade</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="h-5 w-5 text-green-600 mt-1" />
                                                <div>
                                                    <p className="font-semibold">Storage Capacity</p>
                                                    <p className="text-gray-600">3,000L temperature-controlled</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <ChevronRight className="h-5 w-5 text-green-600 mt-1" />
                                                <div>
                                                    <p className="font-semibold">Production Focus</p>
                                                    <p className="text-gray-600">100ml I.V. fluid specialization</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Advanced Features</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-3 rounded-lg">
                                                <Settings className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Process Automation</h4>
                                                <p className="text-gray-700">
                                                    Integrated automation systems control critical parameters throughout the
                                                    manufacturing process, ensuring consistency and reliability in production.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-3 rounded-lg">
                                                <Shield className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Quality Systems</h4>
                                                <p className="text-gray-700">
                                                    Comprehensive quality management system with real-time monitoring and
                                                    documentation of critical process parameters.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="bg-green-100 p-3 rounded-lg">
                                                <PackageCheck className="h-6 w-6 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Packaging Excellence</h4>
                                                <p className="text-gray-700">
                                                    State-of-the-art packaging line with automated inspection systems and
                                                    advanced sealing technologies for product integrity.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Commitment to Excellence</h2>
                            <p className="text-lg leading-relaxed">
                                Through our state-of-the-art facilities, advanced technology, and comprehensive
                                infrastructure, Realcade Lifescience continues to set new standards in pharmaceutical
                                manufacturing. Our dedication to quality, innovation, and continuous improvement
                                ensures we remain at the forefront of I.V. fluid production.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </article>
    )
}