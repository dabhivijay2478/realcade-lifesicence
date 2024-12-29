'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { usePathname } from "next/navigation";

const footerLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Manufacturing Unit's", href: "/manufacturing" },
  { title: "I.V. Fluids", href: "/products/IVfluids" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact Us", href: "/contact-us" },
];

const addressInfo = [
  {
    title: "Unit - 1",
    address: "Survey No. 891-892, Y – Junction, At Narmada Canal, Karannagar, Kadi, Gujarat, India - 382715",
    phone: "+91 7573880044",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14662.478701779322!2d72.378062!3d23.256923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c224d2e0d294f%3A0x67acaa459ea8edcb!2sRealcade Lifescience Pvt. Ltd!5e0!3m2!1sen!2sin!4v1734843289418!5m2!1sen!2sin"
  },
  {
    title: "Unit - 2",
    address: "Plot No. : 1082/P, Takli Road, Ta. - Valod - 394640, Dist. - Tapi, Gujarat (India)",
    phone: "+91 7573880022",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.4278815611715!2d73.275352!3d21.055566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be06366eaf0351b%3A0xd6a1f4b4224ee40f!2sRealcade lifescience valod!5e0!3m2!1sen!2sin!4v1734843362508!5m2!1sen!2sin"
  }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: IconBrandWhatsapp, href: "#", label: "WhatsApp" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const pathname = usePathname();

  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="bg-background pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Quick Links Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <motion.li
                    key={link.title}
                    whileHover={{ x: 5 }}
                    className="transform transition-transform"
                  >
                    <Link
                      href={link.href}
                      className={`transition-colors duration-200 ${isActive
                          ? 'text-green-500 font-medium'
                          : 'text-blue-500 hover:text-green-500'
                        }`}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Address Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            {addressInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">{info.title}</h4>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{info.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">{info.phone}</p>
                </div>
              </motion.div>
            ))}
            <span className="ml-3 flex items-center space-x-2">
              <Mail className="text-gray-600" />
              <span>realcadelifescience@gmail.com</span>
            </span>

          </motion.div>

          {/* Maps Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Location Maps</h3>
            {addressInfo.map((info, index) => (
              <div key={index} className="h-48 mb-4">
                <iframe
                  src={info.mapUrl}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <Separator className="my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground text-center"
          >
            © {new Date().getFullYear()} Realcade Life Science. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;