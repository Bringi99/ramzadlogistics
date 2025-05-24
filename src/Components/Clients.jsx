import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Clients = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Clients",
      clients: [
        { id: 1, name: "Ninja", logo: "public/ninja.jpg" },
        { id: 2, name: "i-Mile", logo: "public/imile.jpg" },
        { id: 3, name: "Keeta", logo: "public/keeta.png" }
      ]
    },
    ar: {
      title: "عملاؤنا",
      clients: [
        { id: 1, name: "نينجا", logo: "public/ninja.jpg" },
        { id: 2, name: "ايميل", logo: "public/imile.jpg" },
        { id: 3, name: "كيتا", logo: "public/keeta.png" }
      ]
    }
  }

  return (
    <section 
      id="clients" 
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
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="px-4 md:px-8 lg:px-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {content[language].clients.map((client, index) => (
              <SwiperSlide key={client.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center h-full"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="w-32 h-32 mb-6 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {client.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Clients