'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon, UserIcon, CheckCircle2, ArrowRight, ChevronsLeftRight, ChevronRight, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from 'next/image';
import bgabout from "@/Images/aboutbg.jpg"
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};



const OfficeCard = ({ title, person, phone, email, address, hours }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <Card className="shadow-md 5">
            <CardContent className="p-6">
                <motion.h3
                    className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {title}
                </motion.h3>

                <motion.div
                    className="space-y-4"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                        <UserIcon className="w-5 h-5 mt-1 text-primary" />
                        <div>
                            <div className="font-medium">Contact Person</div>
                            <div>{person}</div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                        <PhoneIcon className="w-5 h-5 mt-1 text-primary" />
                        <div>
                            <div className="font-medium">Phone</div>
                            <Link href={`tel:${phone}`} className="hover:text-primary transition-colors">
                                {phone}
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                        <MailIcon className="w-5 h-5 mt-1 text-primary" />
                        <div>
                            <div className="font-medium">Email</div>
                            <Link href={`mailto:${email}`} className="hover:text-primary transition-colors">
                                {email}
                            </Link>
                            <br/>
                            <Link href={`mailto:info@realcadelifescience.com`} className=" hover:text-primary transition-colors">
                                info@realcadelifescience.com
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                        <MapPinIcon className="w-5 h-5 mt-1 text-primary" />
                        <div>
                            <div className="font-medium">Address</div>
                            <div>{address}</div>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex items-start gap-3">
                        <ClockIcon className="w-5 h-5 mt-1 text-primary" />
                        <div>
                            <div className="font-medium">Contact Hours</div>
                            <div>{hours}</div>
                        </div>
                    </motion.div>
                </motion.div>
            </CardContent>
        </Card>
    </motion.div>
);

const Contact02Page = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    message: data.message
                })
            });

            // First check if the response is JSON
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server error: Invalid response format");
            }

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong');
            }

            setIsSubmitted(true);
            reset();
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            console.error('Form submission error:', err);
            if (err.message === "Server error: Invalid response format") {
                setError("Server error: Please try again later");
            } else {
                setError(err.message || "Failed to submit form. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-16 mt-24 ">
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
                        Contact Us
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
                            href="/contact-us"
                            className="text-emerald-200 hover:text-emerald-100 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
            <motion.div
                className="w-full max-w-screen-xl mx-auto px-6 xl:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >


                <motion.h2
                    className="mt-3 text-2xl md:text-4xl font-black tracking-tight  dark:text-blue-600 text-green-500"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Chat to our friendly team
                </motion.h2>
                <motion.p
                    className="mt-4 text-base sm:text-lg text-gray-800 dark:text-white/90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    We&apos;d love to hear from you. Please fill out this form or reach out through any of our contact channels.
                </motion.p>

                {/* Quick Contact Options */}
                <motion.div
                    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    {[
                        {
                            icon: <MailIcon />,
                            title: "Email",
                            description: "Our friendly team is here to help.",
                            link: "mailto:realcadelifescience@gmail.com",
                            text: "realcadelifescience@gmail.com"
                        },
                        {
                            icon: <PhoneIcon />,
                            title: "Phone",
                            description: "Mon-Sat from 9:30am to 6:30pm.",
                            link: "tel:09825070417",
                            text: "09825070417"
                        },
                        {
                            icon: <ClockIcon />,
                            title: "Business Hours",
                            description: "We're open Monday through Saturday.",
                            text: "9:30am – 6:30pm"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <motion.div
                                className="h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full
                                          group-hover:bg-green-500 dark:bg-green-600 dark:group-hover:bg-blue-500 transition-colors duration-300"
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="mt-6 font-bold text-xl">{item.title}</h3>
                            <p className="my-2.5 text-muted-foreground">{item.description}</p>
                            {item.link ? (
                                <Link
                                    className="font-bold text-primary hover:text-secondary tracking-tight transition-colors"
                                    href={item.link}
                                >
                                    {item.text}
                                </Link>
                            ) : (
                                <span className="font-bold text-primary tracking-tight">{item.text}</span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Send us a Message</h2>
                    <Card className="shadow-xl">
                        <CardContent className="p-6 md:p-10">
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6"
                                >
                                    <Alert className="bg-green-50 border-green-200">
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                        <AlertDescription className="text-green-600">
                                            Thank you for your message! We&#39;ll get back to you soon.
                                        </AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6"
                                >
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>
                                            {error}
                                        </AlertDescription>
                                    </Alert>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                                    <div className="col-span-2 sm:col-span-1">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            {...register("firstName", { required: "First name is required" })}
                                            placeholder="First name"
                                            className={`mt-1 h-11 ${errors.firstName ? 'border-red-500' : ''}`}
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                        )}
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            {...register("lastName", { required: "Last name is required" })}
                                            placeholder="Last name"
                                            className={`mt-1 h-11 ${errors.lastName ? 'border-red-500' : ''}`}
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            type="email"
                                            placeholder="Email"
                                            className={`mt-1 h-11 ${errors.email ? 'border-red-500' : ''}`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            {...register("message", {
                                                required: "Message is required",
                                                minLength: {
                                                    value: 10,
                                                    message: "Message must be at least 10 characters"
                                                }
                                            })}
                                            placeholder="Message"
                                            className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
                                            rows={6}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                        )}
                                    </div>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <Button
                                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300"
                                        size="lg"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </Button>
                                </motion.div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
                {/* Office Locations */}
                <motion.h2
                    className="mt-24 text-2xl md:text-3xl font-bold mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Our Offices
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={staggerChildren}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="space-y-6">
                        <OfficeCard
                            title="Manufacturing Unit 1 - Kadi"
                            person="Mr. Bharat Vihol(Director)"
                            phone="09825070417 & 7573880044"
                            email="realcadelifescience@gmail.com"
                            address="Survey No. 891-892, Y – Junction, At Narmada Canal, Karannagar, Kadi, Kheda, Gujarat, India - 382715"
                            hours="Mon-Sat: 9:30am – 5:30pm"
                        />
                        <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14662.478701779322!2d72.378062!3d23.256923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c224d2e0d294f%3A0x67acaa459ea8edcb!2sRealcade Lifescience Pvt. Ltd!5e0!3m2!1sen!2sin!4v1734843289418!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <OfficeCard
                            title="Manufacturing Unit 2 - Valod"
                            person="Mr. Bharat Vihol(Director)"
                            phone="09825070417 & 7573880022"
                            email="realcadelifescience@gmail.com"
                            address="Plot No. 1082/P, Takli Road, Ta.: Valod -394640, Dist.: TAPI, GUJARAT- INDIA"
                            hours="Mon-Sat: 9:30am – 5:30pm"
                        />
                        <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.4278815611715!2d73.275352!3d21.055566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be06366eaf0351b%3A0xd6a1f4b4224ee40f!2sRealcade lifescience valod!5e0!3m2!1sen!2sin!4v1734843362508!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}

            </motion.div>
        </div>
    );
};

export default Contact02Page;