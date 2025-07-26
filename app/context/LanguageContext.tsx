"use client"
import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ar: {
    // Header
    home: "الرئيسية",
    perfumes: "العطور",
    offers: "العروض",
    about: "من نحن",
    contact: "تواصل معنا",

    // Hero
    heroTitle: "عطور سوير",
    heroSubtitle: "اكتشف مجموعتنا الفريدة من العطور الفاخرة والأصيلة",
    heroDescription: "رائحة تدوم... ذكريات تبقى",
    shopNow: "تسوق الآن",
    exploreCollection: "استكشف المجموعة",
    newCollection: "مجموعة جديدة من العطور الفاخرة",

    // Stats
    luxuryPerfumes: "عطر فاخر",
    happyCustomers: "عميل سعيد",
    customerRating: "تقييم العملاء",

    // Products
    ourCollection: "مجموعتنا المميزة",
    collectionDescription: "اكتشف أفضل العطور الفاخرة والأصيلة من مختلف أنحاء العالم",
    all: "الكل",
    mensPerfumes: "عطور رجالية",
    womensPerfumes: "عطور نسائية",
    unisexPerfumes: "عطور مشتركة",
    newest: "الأحدث",
    priceLowToHigh: "السعر: من الأقل للأعلى",
    priceHighToLow: "السعر: من الأعلى للأقل",
    topRated: "الأعلى تقييماً",
    addToCart: "إضافة للسلة",
    quickAdd: "إضافة سريعة",
    adding: "جاري الإضافة...",
    new: "جديد",
    bestseller: "الأكثر مبيعاً",
    loadMore: "عرض المزيد",
    currency: "ر.س",

    // Cart
    cart: "سلة التسوق",
    emptyCart: "سلة التسوق فارغة",
    emptyCartDesc: "أضف بعض العطور الرائعة!",
    total: "المجموع:",
    checkout: "إتمام الشراء",
    continueShopping: "متابعة التسوق",

    // Features
    whyChooseUs: "لماذا تختار عطور سوير",
    featuresDescription: "نقدم لك أفضل تجربة تسوق للعطور مع خدمات متميزة",
    freeShipping: "شحن مجاني",
    freeShippingDesc: "شحن مجاني لجميع الطلبات أكثر من 200 ريال",
    qualityGuarantee: "ضمان الجودة",
    qualityGuaranteeDesc: "جميع منتجاتنا أصلية ومضمونة 100%",
    support247: "دعم 24/7",
    support247Desc: "خدمة عملاء متاحة على مدار الساعة",
    luxuryPackaging: "تغليف فاخر",
    luxuryPackagingDesc: "تغليف أنيق مجاني مع كل طلب",
    premiumProducts: "منتجات مميزة",
    premiumProductsDesc: "أفضل العطور من العلامات التجارية العالمية",
    fastDelivery: "توصيل سريع",
    fastDeliveryDesc: "توصيل خلال 24-48 ساعة داخل المدن الرئيسية",

    // Newsletter
    getDiscount: "احصل على خصم 15%",
    newsletterDesc: "اشترك في نشرتنا البريدية واحصل على خصم فوري على طلبك الأول",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    subscribeNow: "اشترك الآن",
    subscribed: "تم الاشتراك!",
    noSpam: "لا تقلق، لن نرسل لك رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.",

    // Footer
    companyDescription:
      "متجرك الأول للعطور الفاخرة والأصيلة. نقدم لك أجود أنواع العطور من مختلف أنحاء العالم بأفضل الأسعار.",
    quickLinks: "روابط سريعة",
    categories: "الفئات",
    contactUs: "تواصل معنا",
    allRightsReserved: "جميع الحقوق محفوظة",
    privacyPolicy: "سياسة الخصوصية",
    termsConditions: "الشروط والأحكام",
    returnPolicy: "سياسة الإرجاع",
  },
  en: {
    // Header
    home: "Home",
    perfumes: "Perfumes",
    offers: "Offers",
    about: "About Us",
    contact: "Contact",

    // Hero
    heroTitle: "Perfume SWYR",
    heroSubtitle: "Discover our unique collection of luxury and authentic perfumes",
    heroDescription: "Lasting fragrance... Memories that remain",
    shopNow: "Shop Now",
    exploreCollection: "Explore Collection",
    newCollection: "New collection of luxury perfumes",

    // Stats
    luxuryPerfumes: "Luxury Perfumes",
    happyCustomers: "Happy Customers",
    customerRating: "Customer Rating",

    // Products
    ourCollection: "Our Premium Collection",
    collectionDescription: "Discover the finest luxury and authentic perfumes from around the world",
    all: "All",
    mensPerfumes: "Men's Perfumes",
    womensPerfumes: "Women's Perfumes",
    unisexPerfumes: "Unisex Perfumes",
    newest: "Newest",
    priceLowToHigh: "Price: Low to High",
    priceHighToLow: "Price: High to Low",
    topRated: "Top Rated",
    addToCart: "Add to Cart",
    quickAdd: "Quick Add",
    adding: "Adding...",
    new: "New",
    bestseller: "Bestseller",
    loadMore: "Load More",
    currency: "SAR",

    // Cart
    cart: "Shopping Cart",
    emptyCart: "Your cart is empty",
    emptyCartDesc: "Add some amazing perfumes!",
    total: "Total:",
    checkout: "Checkout",
    continueShopping: "Continue Shopping",

    // Features
    whyChooseUs: "Why Choose Perfume SWYR?",
    featuresDescription: "We provide you with the best perfume shopping experience with premium services",
    freeShipping: "Free Shipping",
    freeShippingDesc: "Free shipping on all orders over 200 SAR",
    qualityGuarantee: "Quality Guarantee",
    qualityGuaranteeDesc: "All our products are 100% authentic and guaranteed",
    support247: "24/7 Support",
    support247Desc: "Customer service available around the clock",
    luxuryPackaging: "Luxury Packaging",
    luxuryPackagingDesc: "Elegant packaging free with every order",
    premiumProducts: "Premium Products",
    premiumProductsDesc: "The finest perfumes from global brands",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Delivery within 24-48 hours in major cities",

    // Newsletter
    getDiscount: "Get 15% Off",
    newsletterDesc: "Subscribe to our newsletter and get instant discount on your first order",
    emailPlaceholder: "Enter your email address",
    subscribeNow: "Subscribe Now",
    subscribed: "Subscribed!",
    noSpam: "Don't worry, we won't spam you. You can unsubscribe at any time.",

    // Footer
    companyDescription:
      "Your premier destination for luxury and authentic perfumes. We offer you the finest perfumes from around the world at the best prices.",
    quickLinks: "Quick Links",
    categories: "Categories",
    contactUs: "Contact Us",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    returnPolicy: "Return Policy",
  },
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
