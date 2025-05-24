import { useState, useEffect } from 'react'; // Import both hooks
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = {
    en: [
      { name: 'Home', href: '#home' },
      { name: 'Services', href: '#services' },
      { name: 'About Us', href: '#about' },
      { name: 'Clients', href: '#clients' },
      { name: 'Contact', href: '#contact' },
    ],
    ar: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'خدماتنا', href: '#services' },
      { name: 'من نحن', href: '#about' },
      { name: 'عملاؤنا', href: '#clients' },
      { name: 'اتصل بنا', href: '#contact' },
    ]
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      } ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            {language === 'en' ? 'Ram Zad' : 'رام زاد'}
          </motion.a>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              {navItems[language].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-4 pb-4"
          >
            {navItems[language].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar