'use client'
import { motion } from 'framer-motion';
import { useLocalization } from '../context/LocalizationContext';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLocalization();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-2"
    >
      <div className="flex bg-gray-100 rounded-md p-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('tr')}
          className={`px-3 py-1 rounded text-sm font-medium transition-all ${
            language === 'tr' 
              ? 'bg-[#9B1B30] text-white shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          TR
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-all ${
            language === 'en' 
              ? 'bg-[#9B1B30] text-white shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher; 