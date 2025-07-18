"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Headphones, Gift, Star, Clock } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: t("freeShipping"),
      description: t("freeShippingDesc"),
      gradient: "from-rose-400 to-pink-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("qualityGuarantee"),
      description: t("qualityGuaranteeDesc"),
      gradient: "from-orange-400 to-amber-500",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: t("support247"),
      description: t("support247Desc"),
      gradient: "from-gray-400 to-slate-500",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: t("luxuryPackaging"),
      description: t("luxuryPackagingDesc"),
      gradient: "from-rose-500 to-orange-400",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("premiumProducts"),
      description: t("premiumProductsDesc"),
      gradient: "from-pink-400 to-rose-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
      gradient: "from-orange-500 to-red-400",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-gray-600 bg-clip-text text-transparent mb-4">
            {t("whyChooseUs")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("featuresDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 via-orange-50 to-gray-50 hover:from-rose-100 hover:via-orange-100 hover:to-gray-100 transition-all duration-500 border border-rose-100 hover:border-rose-200 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.gradient} text-white rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ rotate: 5 }}
              >
                {feature.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
