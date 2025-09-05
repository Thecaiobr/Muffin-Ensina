import Header from '@/components/Header'
import Hero from '../components/Hero'
import About from '@/components/About'
import DraYasmin from '@/components/DraYasmim'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
// import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <DraYasmin />
        <Pricing />
        <Testimonials />
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}