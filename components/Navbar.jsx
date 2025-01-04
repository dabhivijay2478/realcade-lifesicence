'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import logo from "@/Images/logo.png";
import { usePathname } from "next/navigation";
const productItems = [
  { name: "I.V. Fluids", href: "/products/IVfluids" }
];

const manufacturing = [
  { name: "Manufacturing Unit 1", href: "/manufacturing/manufacturing-unit-1" },
  { name: "Manufacturing Unit 2", href: "/manufacturing/manufacturing-unit-2" },
];

const contactInfo = [
  { icon: Phone, text: "+91 9825070417", href: "tel:+919825070417" },
  { icon: Mail, text: "realcadelifescience@gmail.com", href: "mailto:realcadelifescience@gmail.com" },
  { icon: MapPin, text: "Survey No. 891-892,Y-Junction, At Narmada Canal, Karannagar, Kadi,Gujarat,India-382715", href: "#" },
  { icon: Clock, text: "Mon - Sat: 24 Hours Open", href: null }
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Manufacturing Unit's", items: manufacturing, hasDropdown: true },
  { name: "Our Products", items: productItems, hasDropdown: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact-us" }
];

// Enhanced animation variants
const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const DropdownMenu = ({ items, isOpen, onMouseEnter, onMouseLeave }) => (
  <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute top-full left-0 mt-2 py-2 w-64 bg-background/95 backdrop-blur-xl border rounded-xl shadow-lg"
        >
          {items.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.05)" }}
              className="group px-4 py-3 transition-all duration-300"
            >
              <Link href={item.href} className="block text-sm font-medium group-hover:text-primary">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-trigger')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const isLinkActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const isDropdownActive = (items) => {
    return items.some(item => isLinkActive(item.href));
  };

  return (
    <div className="fixed w-full top-0 z-50">
      {/* Top Info Bar */}
      <motion.div
        {...fadeInUp}
        className={`hidden lg:block w-full ${scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg'
          : 'bg-background'
          } transition-all duration-500`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-sm">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 group"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="text-primary transition-colors duration-300"
                >
                  <item.icon className="h-4 w-4" />
                </motion.div>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        className={`w-full ${scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg'
          : 'bg-background'
          } transition-all duration-500`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Link href="/">
                <Image
                  src={logo}
                  width={900}
                  height={900}
                  alt="logo"
                  className="w-auto h-10 sm:h-12"
                />
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = item.hasDropdown
                  ? isDropdownActive(item.items)
                  : isLinkActive(item.href);

                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 cursor-pointer"
                    >
                      {item.hasDropdown ? (
                        <span className={`transition-colors duration-300 font-medium ${isActive ? 'text-green-500' : 'text-blue-500 hover:text-green-500'
                          }`}>
                          {item.name}
                          <motion.span
                            animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="inline-block ml-1"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          className={`transition-colors duration-300 font-medium ${isActive ? 'text-green-500' : 'text-blue-500 hover:text-green-500'
                            }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                    {item.hasDropdown && (
                      <DropdownMenu
                        items={item.items}
                        isOpen={openDropdown === item.name}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        currentPath={pathname}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-accent rounded-full transition-colors duration-300"
              >
                <ThemeToggle />
              </motion.div>

              <motion.button
                className="lg:hidden menu-trigger rounded-full p-2 hover:bg-accent transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-6 h-5 flex flex-col justify-between"
                  animate={mobileMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="w-6 h-0.5 bg-foreground transform origin-left"
                    animate={mobileMenuOpen ? { rotate: 45, x: 3 } : { rotate: 0, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-foreground"
                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-foreground transform origin-left"
                    animate={mobileMenuOpen ? { rotate: -45, x: 3 } : { rotate: 0, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="lg:hidden mobile-menu mt-2 overflow-hidden  rounded-xl border shadow-lg"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="py-1 px-4 space-y-4">
                  {navItems.map((item) => {
                    const isActive = item.hasDropdown
                      ? isDropdownActive(item.items)
                      : isLinkActive(item.href);

                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ x: 4 }}
                        className="border-b border-border/50 last:border-none"
                      >
                        {item.hasDropdown ? (
                          <div className="py-3">
                            <span className={`text-lg font-medium ${isActive ? 'text-green-500' : 'text-blue-500 hover:text-green-500'
                              }`}>
                              {item.name}
                            </span>
                            <div className="mt-2 pl-4 space-y-2">
                              {item.items.map((subItem) => {
                                const isSubItemActive = isLinkActive(subItem.href);
                                return (
                                  <motion.div
                                    key={subItem.name}
                                    whileHover={{ x: 4 }}
                                    className="py-2"
                                  >
                                    <Link
                                      href={subItem.href}
                                      className={`transition-colors duration-300 ${isSubItemActive
                                          ? 'text-green-500'
                                          : 'text-blue-500 hover:text-green-500'
                                        }`}
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <motion.div className="py-3">
                            <Link
                              href={item.href}
                              className={`text-lg transition-colors duration-300 ${isActive
                                  ? 'text-green-500'
                                  : 'text-blue-500 hover:text-green-500'
                                }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                  {/* Mobile Contact Info */}
                  <div className="pt-4 space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 group"
                      >
                        <motion.div
                          whileHover={{ rotate: 15 }}
                          className="text-primary"
                        >
                          <item.icon className="h-4 w-4" />
                        </motion.div>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-sm hover:text-primary transition-colors duration-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.text}
                          </Link>
                        ) : (
                          <span className="text-sm">{item.text}</span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;