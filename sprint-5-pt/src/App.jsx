import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Productive from './components/Productive'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'

export default function App() {
  return (
    <div className="font-raleway">
      <div className="w-full bg-accentBackground">
        <Header />
      </div>
        <main className="relative flex flex-col items-center justify-center gap-32 bg-mainBackground">
          <Hero />
          <FeaturesSection />
          <Productive title="Stay productive, wherever you are"/>
          <TestimonialsSection />
        </main>
      <div className="w-full bg-footerBackground">
        <Footer />
      </div>
    </div>
  )
}
