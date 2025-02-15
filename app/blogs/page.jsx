import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Factory, Award, Globe2 } from 'lucide-react';
import Link from 'next/link';
import blog1 from "@/Images/blogs/growth.jpg"
import blog2 from "@/Images/blogs/GlobalPresence.jpg"
import blog3 from "@/Images/blogs/IVFluids.jpg"
import blog4 from "@/Images/blogs/Manufacturing.jpg"
import Image from 'next/image';

const BlogPage = () => {
    const blogPosts = [
        {
            title: "Company Turnover in 2022-2023",
            excerpt: "Realcade Lifescience achieves remarkable financial milestone with turnover exceeding ₹111 Crore in 2022-2023, demonstrating strong market presence and growth.",
            category: "Financial Performance",
            icon: Building2,
            readTime: "5 min read",
            href: "/blogs/TurnoverBlog",
            img: blog1
        },
        {
            title: "I.V. Fluids Manufacturing Excellence",
            excerpt: "State-of-the-art manufacturing facility with FFS Technology from USA, producing 4.5 million bottles monthly across 500ml and 100ml capacities.",
            category: "Manufacturing",
            icon: Factory,
            readTime: "8 min read",
            href: "/blogs/IVFluidsBlog",
            img: blog3
        },
        {
            title: "Global Presence & Certifications",
            excerpt: "WHO GMP certified facility serving 12+ countries including Kazakhstan, Yemen, Kenya, and Myanmar, with various international certifications.",
            category: "Global Market",
            icon: Globe2,
            readTime: "6 min read",
            href: "/blogs/GlobalPresenceBlog",
            img: blog2
        }
    ];

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Realcade Lifescience Pvt. Ltd.</h1>
                    <p className="text-xl md:text-2xl opacity-90">Leading Manufacturer of IV Fluids Since 2016</p>
                </div>
            </div>

            {/* Featured Post */}
            <div className="container mx-auto px-4 -mt-10">
                <Card className="bg-white shadow-xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-64 md:h-full">
                            <Image
                                src={blog4}
                                alt="Manufacturing Facility"
                                className="w-full h-full object-cover rounded-l-lg"
                            />
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="h-5 w-5 text-blue-600" />
                                <p className="text-blue-600 font-semibold">FEATURED</p>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                State-of-the-Art Manufacturing Facility
                            </h2>
                            <p className="text-gray-600   mb-6">
                                13,200 Sq. Mt. facility with 5,800 Sq. Mt. plot area, featuring advanced FFS Technology
                                and a monthly production capacity of 4.5 million bottles. WHO GMP certified facility
                                maintaining excellence in pharmaceutical manufacturing.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">WHO GMP Certified</span>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">ISO 9001:2015</span>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">FFS Technology</span>
                            </div>
                            <Link href="/blogs/mainblog">
                                <Button className="self-start bg-blue-600 hover:bg-blue-700">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </div>
                </Card>
            </div>

            {/* Blog Posts Grid */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                                    <post.icon className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-blue-600">{post.category}</span>
                                    <span className="text-sm text-gray-900">{post.readTime}</span>
                                </div>
                                <CardTitle className="text-xl mb-2 text-gray-900">{post.title}</CardTitle>
                                <p className="text-gray-600 ">{post.excerpt}</p>
                            </CardHeader>
                            <CardContent>
                                <Link href={post?.href || '#'} >
                                    <Button variant="outline" className="w-full">
                                        Read Full Article
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Key Statistics */}
            <div className=" py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Company Highlights</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-white text-center p-6">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">₹111+ Cr</h3>
                            <p className="text-gray-600 ">Annual Turnover 2022-23</p>
                        </Card>
                        <Card className="bg-white text-center p-6">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">4.5M</h3>
                            <p className="text-gray-600 ">Monthly Bottle Capacity</p>
                        </Card>
                        <Card className="bg-white text-center p-6">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">12+</h3>
                            <p className="text-gray-600 ">Countries Served</p>
                        </Card>
                        <Card className="bg-white text-center p-6">
                            <h3 className="text-3xl font-bold text-blue-600 mb-2">25+</h3>
                            <p className="text-gray-600 ">Years Experience</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;