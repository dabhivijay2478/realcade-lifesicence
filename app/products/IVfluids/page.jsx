'use client'
import React, { useState } from 'react';
import { ChevronRight, Search, ChevronDown } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import bgabout from "@/Images/aboutbg.jpg"
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
const ProductListing = () => {
  const rawProducts = [
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "5D - Dextrose 5% Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "10D - Dextrose 10% Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "25D - Dextrose Injection. 25%", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "DNS - Sodium Chloride 0.9% & Dextrose 5% Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "DNS 0.45 - Sodium Chloride 0.45% & Dextrose 5% Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "NS - Sodium chloride 0.9% Injection.", pack: "100ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "NS - Sodium chloride 0.9% Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "NS 0.45 -Sodium Chloride 0.45% Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "RL - Ringer Lactate Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple electrolytes 'P' & Dextrose Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple electrolyte 'G' & Dextrose Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple Electrolyte 'M' & Dextrose Injection.", pack: "500ml", type: "Injection" },
    { category: "Fluid, Nutrient and Electrolyte Replenisher", name: "Multiple electrolytes 'E' & Dextrose Injection.", pack: "500ml", type: "Injection" },
    { category: "Osmotic Diuretic", name: "Mannitol 10% Injection.", pack: "100ml", type: "Injection" },
    { category: "Osmotic Diuretic", name: "Mannitol 20% Injection.", pack: "100ml", type: "Injection" },
    { category: "Antibacterials", name: "Ciprofloxacin Injection.", pack: "100ml", type: "Injection" },
    { category: "Antibacterials", name: "Ofloxacin Infusion", pack: "100ml", type: "Infusion" },
    { category: "Antibacterials", name: "Levofloxacin Infusion", pack: "100ml", type: "Infusion" },
    { category: "Antibacterials", name: "Gatifloxacin Infusion 4mg/ml", pack: "100ml", type: "Infusion" },
    { category: "Antibacterials", name: "Moxifloxacin Infusion", pack: "100ml" },
    { category: "Antibacterials", name: "Pefloxacin infusion 400mg/100ml", pack: "100ml", type: "Infusion" },
    { category: "Oxazolidinones", name: "Linezolid I.V Injection.", pack: "300ml" },
    { category: "Antifungal", name: "Fluconazole I.V. Injection", pack: "100ml" },
    { category: "Antiamoebic", name: "Metronidazlole Injection.", pack: "100ml" },
    { category: "Antiamoebic", name: "Metronidazlole 0.2% & Dextrose 5% Injection", pack: "500ml" },
    { category: "Antiamoebic", name: "Ornidazole Infusion", pack: "100ml" },
    { category: "Antiprotozoal", name: "Tinidazole I.V.Injection", pack: "400ml" },
    { category: "Analgesic; Antipyretic", name: "Paracetamol I.V. Injection", pack: "100ml" }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPack, setSelectedPack] = useState("all");

  // Get unique types, packs, and categories
  const types = [...new Set(rawProducts.map(product => product.type))];
  const packs = [...new Set(rawProducts.map(product => product.pack))];
  const categories = [...new Set(rawProducts.map(product => product.category))];

  // Filter products based on search query, selected type, and pack
  const filteredProducts = rawProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" ? true : product.type === selectedType;
    const matchesPack = selectedPack === "all" ? true : product.pack === selectedPack;
    return matchesSearch && matchesType && matchesPack;
  });

  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Brochure.pdf';
    link.download = 'company-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
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

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Total Products</CardTitle>
              <p className="text-3xl font-bold text-emerald-600">{rawProducts.length}</p>
            </CardHeader>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Product Types</CardTitle>
              <p className="text-3xl font-bold text-blue-600">{types.length}</p>
            </CardHeader>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Pack Sizes</CardTitle>
              <p className="text-3xl font-bold text-purple-600">{packs.length}</p>
            </CardHeader>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-lg"> Download Brochurer</CardTitle>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                onClick={handleDownload}
              >
                Download Brochurer
                {/* <DownloadCloudIcon className="ml-2 h-5 w-5" /> */}
              </Button>
            </CardHeader>
          </Card>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {types.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedPack} onValueChange={setSelectedPack}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by pack size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Packs</SelectItem>
              {packs.map(pack => (
                <SelectItem key={pack} value={pack}>{pack}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Products Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(groupedProducts).map(([category, products]) => (
            <AccordionItem
              key={category}
              value={category}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-blue-500 dark:border-green-600"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold">{category}</h3>
                  <Badge variant="secondary">{products.length} products</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg text-emerald-600 dark:text-emerald-400">
                            {product.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <Badge variant="outline" className="mr-2">
                              {product.type}
                            </Badge>
                            <Badge variant="secondary">{product.pack}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* No Results Message */}
        {Object.keys(groupedProducts).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;