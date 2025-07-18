import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import Features from "./components/Features"
import Newsletter from "./components/Newsletter"
import ContactForm from "./components/ContactForm" // تأكد من استيراد هذا المكون

export default function Home() {
  return (
    <>
      <Hero />
      <section id="perfumes">
        {" "}
        {/* إضافة ID هنا */}
        <ProductGrid />
      </section>
      <Features />
      <Newsletter />
      <section id="contact">
        {" "}
        {/* إضافة ID هنا */}
        <ContactForm />
      </section>
    </>
  )
}
