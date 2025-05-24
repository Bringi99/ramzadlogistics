import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Services = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Services",
      services: [
        {
          title: "Transportation",
          description: "We provide diverse transportation solutions tailored to all customer needs using modern vehicles at competitive prices."
        },
        {
          title: "Storage",
          description: "We offer large, unconditioned storage capacities to meet all your warehousing needs."
        },
        {
          title: "Logistics Services",
          description: "Comprehensive logistics solutions for businesses and stores across all regions of Saudi Arabia."
        }
      ]
    },
    ar: {
      title: "خدماتنا",
      services: [
        {
          title: "النقل",
          description: "نقدم حلول نقل متنوعة تلبي جميع احتياجات العملاء باستخدام وسائل نقل حديثة بأسعار تنافسية."
        },
        {
          title: "التخزين",
          description: "نوفر مساحات تخزين كبيرة وغير مشروطة لتلبية جميع احتياجاتك التخزينية."
        },
        {
          title: "الخدمات اللوجستية",
          description: "حلول لوجستية شاملة للشركات والمتاجر في جميع مناطق المملكة العربية السعودية."
        }
      ]
    }
  }

  return (
    <section 
      id="services" 
      className="py-20 bg-white"
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
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content[language].services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -10 }}
            >
              <h3 className={`text-xl font-semibold text-gray-800 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {service.title}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services