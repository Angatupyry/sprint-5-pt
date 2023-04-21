import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-raleway">
      <div className="w-full bg-accentBackground">
        <Header />
      </div>
        <main className="relative flex flex-col items-center justify-center gap-32 bg-mainBackground">
          <Hero />
        </main>
      <div className="w-full bg-footerBackground">
        <Footer />
      </div>
    </div>
  )
}
