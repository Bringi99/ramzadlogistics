import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      emailText: "Email us",
      whatsappText: "Chat on WhatsApp",
      phone: "050 478 0484",
      email: "info@ramzadlogistics.com"
    },
    ar: {
      title: "اتصل بنا",
      subtitle: "تواصل مع فريقنا",
      emailText: "البريد الإلكتروني",
      whatsappText: "محادثة واتساب",
      phone: "050 478 0484",
      email: "info@ramzadlogistics.com"
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content[language].title}
          </h2>
          <p className={`text-xl text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {content[language].subtitle}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-2xl mx-auto">
          {/* Email Card */}
          <motion.a
            href={`mailto:${content[language].email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center w-full hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <FaEnvelope className="text-blue-600 text-3xl" />
            </div>
            <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].emailText}
            </h3>
            <p className="text-blue-600 break-all">{content[language].email}</p>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href={`https://wa.me/${content[language].phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center w-full hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <FaWhatsapp className="text-green-600 text-3xl" />
            </div>
            <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].whatsappText}
            </h3>
            <p className="text-gray-600">{content[language].phone}</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact