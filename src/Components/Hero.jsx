import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Ram Zad Logistics",
      subtitle: "Your trusted partner for comprehensive logistics solutions",
      button: "Our Services"
    },
    ar: {
      title: "رم زاد للخدمات اللوجستية",
      subtitle: "شريكك الموثوق لحلول لوجستية شاملة",
      button: "خدماتنا"
    }
  }

  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="bg-[url(public/hero.png)] bg-cover bg-center absolute inset-0"></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      {/* Content container - changed to justify-end to align at bottom */}
      <div className="container h-full mx-auto px-4 flex flex-col justify-end items-center relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content[language].title}
          </h1>
          <p className={`text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content[language].subtitle}
          </p>
          <motion.a
            href="#services"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content[language].button}
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned below the content */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero