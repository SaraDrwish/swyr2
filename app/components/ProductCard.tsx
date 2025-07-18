"use client"

import { motion } from "framer-motion"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { type Product, useCart } from "../context/CartContext"
import { useLanguage } from "../context/LanguageContext"
import { useState } from "react"

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { dispatch } = useCart()
  const { t } = useLanguage()
  const [isLiked, setIsLiked] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    dispatch({ type: "ADD_TO_CART", payload: product })

    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  return (
    <motion.div
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      {/* Product Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <motion.span
            className="px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-bold rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("new")}
          </motion.span>
        )}
        {product.isBestseller && (
          <motion.span
            className="px-3 py-1 bg-gradient-to-r from-rose-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t("bestseller")}
          </motion.span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "text-red-500 fill-red-500" : "text-gray-600 hover:text-red-500"
            }`}
          />
        </motion.button>

        <motion.button
          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye className="w-5 h-5 text-gray-600 hover:text-rose-500" />
        </motion.button>
      </div>

      {/* Product Image */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-rose-50 to-orange-50">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Actions */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
        >
          <motion.button
            className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full font-semibold text-sm hover:bg-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? t("adding") : t("quickAdd")}
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-rose-500 font-medium bg-rose-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600 mr-1 font-medium">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
              {product.price} {t("currency")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice} {t("currency")}
              </span>
            )}
          </div>

          <motion.button
            className="p-3 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-600 rounded-full hover:from-rose-500 hover:to-orange-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
