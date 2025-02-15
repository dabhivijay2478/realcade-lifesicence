import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Factory,
    FlaskConical,
    Droplets,
    BadgeCheck,
    Layers,
    Timer,
    Scale,
    Workflow,
    Globe2
} from 'lucide-react';

export default function ManufacturingBlog() {
    const manufacturingStats = [
        {
            icon: Scale,
            value: "4.5M",
            label: "Monthly Bottle Production",
            color: "text-blue-600"
        },
        {
            icon: FlaskConical,
            value: "500ml",
            label: "Large Volume Capacity",
            color: "text-green-600"
        },
        {
            icon: Droplets,
            value: "100ml",
            label: "Small Volume Capacity",
            color: "text-purple-600"
        }
    ];

    return (
        <article className="min-h-screen ">
            {/* Hero Header */}
            <header className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid" />
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                        <Factory className="h-6 w-6 text-blue-300" />
                        <span className="text-blue-300 font-medium">Manufacturing Excellence</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Pioneering I.V. Fluids Manufacturing Excellence
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl">
                        State-of-the-art manufacturing facility with FFS Technology from USA, producing 4.5 million bottles
                        monthly across 500ml and 100ml capacities.
                    </p>
                </div>
            </header>

            {/* Key Statistics */}
            <section className="container mx-auto px-4 max-w-4xl -mt-12 relative z-20 mb-16">
                <div className="grid md:grid-cols-3 gap-6">
                    {manufacturingStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all">
                                <CardContent className="p-6">
                                    <IconComponent className={`h-8 w-8 ${stat.color} mb-4`} />
                                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto px-4 max-w-4xl">
                {/* Introduction */}
                <div className="prose max-w-none mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Realcade Lifescience Pvt. Ltd., established in 2013 in Kadi-Mehsana, Gujarat, has emerged as a
                        leading manufacturer of sterile liquid parenterals, specializing in intravenous (I.V.) fluids.
                        Our commitment to manufacturing excellence is evident through advanced technologies, stringent
                        quality control, and robust infrastructure designed for global healthcare standards.
                    </p>
                </div>

                {/* FFS Technology Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Workflow className="h-8 w-8 text-blue-600" />
                        <h2 className="text-3xl font-bold">Advanced FFS Technology</h2>
                    </div>
                    <Card className="bg-gradient-to-r from-blue-50 to-white mb-8">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold">1</div>
                                    <h3 className="text-xl font-bold text-blue-900">Container Formation</h3>
                                    <p className="text-gray-700">Medical-grade plastic granules are melted and molded into containers within a sterile environment.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold">2</div>
                                    <h3 className="text-xl font-bold text-blue-900">Aseptic Filling</h3>
                                    <p className="text-gray-700">Freshly formed containers are immediately filled with sterile I.V. solution, minimizing exposure.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold">3</div>
                                    <h3 className="text-xl font-bold text-blue-900">Hermetic Sealing</h3>
                                    <p className="text-gray-700">Containers are hermetically sealed, ensuring product sterility throughout shelf life.</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Infrastructure Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Factory className="h-8 w-8 text-green-600" />
                        <h2 className="text-3xl font-bold">Manufacturing Infrastructure</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4">LVP-1 Unit</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>500 ml I.V. fluid production</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>9,000-liter SS 316L manufacturing vessel</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>6,000-liter storage vessel</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-4">LVP-2 & LVP-3 Units</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>100 ml I.V. fluids production</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>4,000-liter manufacturing vessels</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span>3,000-liter storage vessels</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Quality Control Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Layers className="h-8 w-8 text-purple-600" />
                        <h2 className="text-3xl font-bold">Quality Assurance</h2>
                    </div>
                    <Card className="bg-gradient-to-br from-purple-50 to-white">
                        <CardContent className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-purple-900">Clean Room Standards</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            <span>Class-A Filling Areas</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            <span>Class-C Background Areas</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            <span>HEPA Filtration Systems</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-purple-900">Quality Controls</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            <span>In-Process Quality Checks</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            <span>Super-heated Water Spray Sterilization</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <BadgeCheck className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            <span>Environmental Monitoring</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Conclusion */}
                <section className="mb-16">
                    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Global Healthcare Impact</h2>
                            <p className="text-lg leading-relaxed">
                                Through our state-of-the-art manufacturing processes, rigorous quality controls, and
                                commitment to excellence, Realcade Lifescience continues to set new standards in I.V.
                                fluid production. Our facility&#39;s capability to produce 4.5 million bottles monthly
                                positions us as a reliable partner in the global healthcare supply chain.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </article>
    );
}