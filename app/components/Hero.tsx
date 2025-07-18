"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-gray-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 4,
              height: Math.random() * 6 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                Math.random() > 0.5 ? "rgba(251, 113, 133, 0.3)" : "rgba(251, 146, 60, 0.3)"
              }, rgba(156, 163, 175, 0.2))`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Perfume Bottles */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 opacity-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-orange-300 rounded-2xl shadow-lg"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 opacity-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-rose-300 rounded-full shadow-lg"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full text-rose-700 text-sm font-medium mb-8 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 30 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {t("newCollection")}
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t("heroTitle").split(" ")[0]}
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-rose-400 via-orange-300 to-gray-500 bg-clip-text text-transparent"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {t("heroTitle").split(" ")[1]}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {t("heroSubtitle")}
            <br />
            <span className="text-lg text-rose-500 font-medium">{t("heroDescription")}</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 space-x-reverse"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("shopNow")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-rose-300 text-rose-600 rounded-full font-semibold text-lg hover:bg-rose-50 hover:border-rose-400 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("exploreCollection")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {[
            { number: "500+", label: t("luxuryPerfumes") },
            { number: "10K+", label: t("happyCustomers") },
            { number: "5★", label: t("customerRating") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
