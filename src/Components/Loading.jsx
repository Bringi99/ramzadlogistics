import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Loading = () => {
  const { language } = useLanguage()

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
          className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full mb-4"
        ></motion.div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-2xl font-bold text-gray-800 ${language === 'ar' ? 'font-arabic' : ''}`}
        >
          {language === 'en' ? 'Ram Zad Logistics' : 'رم زاد للخدمات اللوجستية'}
        </motion.h2>
      </motion.div>
    </div>
  )
}

export default Loading