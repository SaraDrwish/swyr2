"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Filter } from "lucide-react"
import ProductCard from "./ProductCard"
import { useLanguage } from "../context/LanguageContext"
import type { Product } from "../context/CartContext"

const products: Product[] = [
  {
    id: 1,
    name: "Damascus Rose Perfume / عطر الورد الدمشقي",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=300&width=300",
    description: "Luxurious perfume inspired by authentic Damascus rose / عطر فاخر مستوحى من الورد الدمشقي الأصيل",
    category: "Women's Perfumes / عطور نسائية",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isBestseller: false,
  },
  {
    id: 2,
    name: "Royal Oud / عود سوير الفاخر",
    price: 599,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium natural oud from finest Cambodian oud / عود طبيعي فاخر من أجود أنواع العود الكمبودي",
    category: "Men's Perfumes / عطور رجالية",
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Enchanting Night Musk / مسك الليل الساحر",
    price: 199,
    originalPrice: 249,
    image: "/placeholder.svg?height=300&width=300",
    description: "Natural musk with enchanting scent / مسك طبيعي برائحة ساحرة مثالية للمساء",
    category: "Unisex Perfumes / عطور مشتركة",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isBestseller: false,
  },
  {
    id: 4,
    name: "Royal Jasmine / عطر الياسمين الملكي",
    price: 349,
    image: "/placeholder.svg?height=300&width=300",
    description: "Elegant women's perfume with natural jasmine / عطر نسائي راقي برائحة الياسمين الطبيعي",
    category: "Women's Perfumes / عطور نسائية",
    rating: 4.6,
    reviews: 203,
    isNew: true,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Desert Amber / عنبر الصحراء",
    price: 449,
    image: "/placeholder.svg?height=300&width=300",
    description: "Strong men's perfume with authentic amber / عطر رجالي قوي برائحة العنبر الأصيل",
    category: "Men's Perfumes / عطور رجالية",
    rating: 4.8,
    reviews: 167,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 6,
    name: "Orange Blossom / زهر البرتقال",
    price: 229,
    originalPrice: 279,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fresh perfume with natural orange blossom / عطر منعش برائحة زهر البرتقال الطبيعي",
    category: "Unisex Perfumes / عطور مشتركة",
    rating: 4.5,
    reviews: 98,
    isNew: false,
    isBestseller: false,
  },
]

export default function ProductGrid() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const categories = [
    { key: "all", label: t("all") },
    { key: "men", label: t("mensPerfumes") },
    { key: "women", label: t("womensPerfumes") },
    { key: "unisex", label: t("unisexPerfumes") },
  ]

  const sortOptions = [
    { key: "newest", label: t("newest") },
    { key: "priceLowToHigh", label: t("priceLowToHigh") },
    { key: "priceHighToLow", label: t("priceHighToLow") },
    { key: "topRated", label: t("topRated") },
  ]

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true
    if (selectedCategory === "men") return product.category.includes("Men's") || product.category.includes("رجالية")
    if (selectedCategory === "women") return product.category.includes("Women's") || product.category.includes("نسائية")
    if (selectedCategory === "unisex") return product.category.includes("Unisex") || product.category.includes("مشتركة")
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "priceLowToHigh":
        return a.price - b.price
      case "priceHighToLow":
        return b.price - a.price
      case "topRated":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-rose-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-gray-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("ourCollection")}
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("collectionDescription")}</p>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-12 shadow-lg border border-rose-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.key}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.key
                        ? "bg-gradient-to-r from-rose-400 to-orange-400 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.key)}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <select
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white text-gray-700 font-medium"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {sortedProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-full font-semibold text-lg hover:from-rose-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("loadMore")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
