"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react"
import { useCart } from "../context/CartContext"
import { useLanguage } from "../context/LanguageContext"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart()
  const { t } = useLanguage()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  const handleCheckout = () => {
    alert("Redirecting to checkout page soon! / سيتم توجيهك لصفحة الدفع قريباً!")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Cart Sidebar */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-rose-100 bg-gradient-to-r from-rose-50 to-orange-50">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <ShoppingBag className="w-6 h-6 mr-2 text-rose-500" />
                  {t("cart")} ({state.itemCount})
                </h2>
                <motion.button
                  className="p-2 hover:bg-rose-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                >
                  <X className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {state.items.length === 0 ? (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingBag className="w-12 h-12 text-rose-400" />
                    </div>
                    <p className="text-gray-500 text-lg font-medium mb-2">{t("emptyCart")}</p>
                    <p className="text-gray-400 text-sm">{t("emptyCartDesc")}</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center space-x-4 space-x-reverse p-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl border border-rose-100"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        layout
                      >
                        <div className="relative">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-xl shadow-md"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{item.name}</h3>
                          <p className="text-rose-600 font-bold">
                            {item.price} {t("currency")}
                          </p>
                        </div>

                        <div className="flex items-center space-x-2 space-x-reverse bg-white rounded-full p-1 shadow-sm">
                          <motion.button
                            className="p-2 hover:bg-rose-100 rounded-full transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4 text-rose-600" />
                          </motion.button>

                          <span className="w-8 text-center font-bold text-gray-800">{item.quantity}</span>

                          <motion.button
                            className="p-2 hover:bg-rose-100 rounded-full transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4 text-rose-600" />
                          </motion.button>
                        </div>

                        <motion.button
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <motion.div
                  className="border-t border-rose-100 p-6 space-y-4 bg-gradient-to-r from-rose-50 to-orange-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-gray-800">{t("total")}:</span>
                    <span className="bg-gradient-to-r from-rose-500 to-orange-400 bg-clip-text text-transparent">
                      {state.total} {t("currency")}
                    </span>
                  </div>

                  <motion.button
                    className="w-full py-4 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-2xl font-semibold text-lg flex items-center justify-center space-x-2 space-x-reverse hover:from-rose-500 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>{t("checkout")}</span>
                  </motion.button>

                  <motion.button
                    className="w-full py-3 border-2 border-rose-300 text-rose-600 rounded-2xl font-semibold hover:bg-rose-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                  >
                    {t("continueShopping")}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
