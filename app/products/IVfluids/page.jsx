'use client'
import React, { useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import bgabout from "@/Images/aboutbg.jpg"
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ProductListing = () => {
  // Process the data to handle empty categories
  const rawProducts = [
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "5D - Dextrose 5% Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "10D - Dextrose 10% Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "25D - Dextrose Injection. 25%", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "DNS - Sodium Chloride 0.9% & Dextrose 5% Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "DNS 0.45 - Sodium Chloride 0.45% & Dextrose 5% Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "NS - Sodium chloride 0.9% Injection.", pack: "100ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "NS - Sodium chloride 0.9% Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "NS 0.45 -Sodium Chloride 0.45% Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "RL - Ringer Lactate Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple electrolytes 'P' & Dextrose Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple electrolyte 'G' & Dextrose Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple Electrolyte 'M' & Dextrose Injection.", pack: "500ml" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple electrolytes 'E' & Dextrose Injection.", pack: "500ml" },
    { category: "Osmotic Diuretic", name: "Mannitol 10% Injection.", pack: "100ml" },
    { category: "Osmotic Diuretic", name: "Mannitol 20% Injection.", pack: "100ml" },
    { category: "Antibacterials", name: "Ciprofloxacin Injection.", pack: "100ml" },
    { category: "Antibacterials", name: "Ofloxacin Infusion", pack: "100ml" },
    { category: "Antibacterials", name: "Levofloxacin Infusion", pack: "100ml" },
    { category: "Antibacterials", name: "Gatifloxacin Infusion 4mg/ml", pack: "100ml" },
    { category: "Antibacterials", name: "Moxifloxacin Infusion", pack: "100ml" },
    { category: "Antibacterials", name: "Pefloxacin infusion 400mg/100ml", pack: "100ml" },
    { category: "Oxazolidinones", name: "Linezolid I.V Injection.", pack: "300ml" },
    { category: "Antifungal", name: "Fluconazole I.V. Injection", pack: "100ml" },
    { category: "Antiamoebic", name: "Metronidazlole Injection.", pack: "100ml" },
    { category: "Antiamoebic", name: "Metronidazlole 0.2% & Dextrose 5% Injection", pack: "500ml" },
    { category: "Antiamoebic", name: "Ornidazole Infusion", pack: "100ml" },
    { category: "Antiprotozoal", name: "Tinidazole I.V.Injection", pack: "400ml" },
    { category: "Analgesic; Antipyretic", name: "Paracetamol I.V. Injection", pack: "100ml" }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories for filter
  const categories = [...new Set(rawProducts.map(product => product.category))];

  // Filter products based on search query and selected category
  const filteredProducts = rawProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" ? true : product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Brochure.pdf';
    link.download = 'company-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
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
            I.V. Fluids
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
              href="/products/IVfluids"
              className="text-emerald-200 hover:text-emerald-100 transition-colors"
            >
              I.V. Fluids
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                  <p className="text-2xl font-bold">{rawProducts.length}</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">Categories</CardTitle>
                  <p className="text-2xl font-bold">{categories.length}</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">Broucher</CardTitle>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                      onClick={handleDownload}
                    >
                      Download Brochurer
                      {/* <DownloadCloudIcon className="ml-2 h-5 w-5" /> */}
                    </Button>
                  </motion.div>
                </CardHeader>
              </Card>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[280px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg dark:text-blue-600 text-green-500">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary " className="mb-2 text-gray-800 dark:text-white/90">
                      {product.pack}
                    </Badge>
                    <p className="text-sm text-gray-800 dark:text-white/90 mt-2">{product.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results Message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;