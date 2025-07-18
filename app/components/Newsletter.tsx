"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Gift, Sparkles } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"

export default function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-rose-400 via-orange-400 to-pink-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 shadow-xl"
            whileHover={{ scale: 1.1, rotate: 10 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Gift className="w-12 h-12 text-white" />
            <Sparkles className="w-6 h-6 text-white absolute -top-2 -right-2" />
          </motion.div>

          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{t("getDiscount")}</h2>

          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            {t("newsletterDesc")}
          </p>

          <motion.form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-6 py-3 rounded-full border-2 border-white/30 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              type="submit"
              className="px-8 py-3 bg-white text-rose-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:text-rose-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubscribed}
            >
              {isSubscribed ? t("subscribed") : t("subscribeNow")}
            </motion.button>
          </motion.form>

          <p className="text-white/80 text-sm mt-4">{t("noSpam")}</p>
        </motion.div>
      </div>
    </section>
  )
}
