import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Us",
      paragraphs: [
        "Ram Zad Logistics provides diverse transportation solutions tailored to all customer needs using modern transportation methods at competitive prices.",
        "We have successfully covered the largest number of destinations across the Kingdom of Saudi Arabia.",
        "We offer a range of services for companies and stores in all regions of Saudi Arabia, ensuring reliable and efficient logistics solutions for your business."
      ],
      button: "Contact Us"
    },
    ar: {
      title: "من نحن",
      paragraphs: [
        "توفر رم زاد للخدمات اللوجستية حلول نقل متنوعة مصممة لتناسب جميع احتياجات العملاء باستخدام وسائل نقل حديثة بأسعار تنافسية.",
        "لقد نجحنا في تغطية أكبر عدد من الوجهات في جميع أنحاء المملكة العربية السعودية.",
        "نقدم مجموعة من الخدمات للشركات والمتاجر في جميع مناطق المملكة العربية السعودية، مما يضمن حلولاً لوجستية موثوقة وفعالة لعملك."
      ],
      button: "اتصل بنا"
    }
  }

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10 rtl:md:pl-10 rtl:md:pr-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
              alt={language === 'en' ? "About Ram Zad Logistics" : "رم زاد للخدمات اللوجستية"}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            {content[language].paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-gray-600 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {paragraph}
              </p>
            ))}
            <motion.a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[language].button}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About