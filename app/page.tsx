'use client'
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocalization } from './context/LocalizationContext';


// Animation variants for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { t } = useLocalization();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: '/images/Gedikli_hukuk.jpeg',
      alt: 'Gedikli hukuk bürosu',
      showText: false,
      applyEffects: false
    },
    {
      src: '/images/hukuk1.png',
      alt: 'Hukuk bürosu arka plan',
      showText: true,
      applyEffects: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] lg:h-[85vh] overflow-hidden">
        {/* Arka plan görseli */}
        <div className="absolute inset-0 w-full h-full">
        <Image
            src="/images/hukuk1.png"
            alt="Hukuk bürosu arka plan"
            fill
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            className="sm:object-[center_center] md:object-[center_center] lg:object-[center_center] brightness-[0.9]"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJZAPolF7wHgAAAABJRU5ErkJggg=="
        />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero İçeriği */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6"
        >
          <div className="max-w-full sm:max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white max-w-2xl"
            >
              {t.home.heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl font-light mb-6 md:mb-8 text-white max-w-xl"
            >
              {t.home.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/hakkimizda">
                <motion.button 
                  className="bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 hover:bg-gray-100 transition-colors"
                >
                  {t.home.moreInfoButton}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Hizmetlerimiz */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light text-gray-900">{t.home.servicesSection.title}</h2>
              <p className="text-gray-600">
                {t.home.servicesSection.description}
              </p>
              <Link href="/hizmetlerimiz" className="text-gray-900 hover:underline inline-block">
                {t.home.servicesSection.detailedInfo}
              </Link>
            </motion.div>

            {/* Ekibimiz */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light text-gray-900">{t.home.teamSection.title}</h2>
              <p className="text-gray-600">
                {t.home.teamSection.description}
              </p>
              <Link href="/ekibimiz" className="text-gray-900 hover:underline inline-block">
                {t.home.teamSection.meetTeam}
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-light text-gray-900">{t.home.careerSection.title}</h2>
              <p className="text-gray-600">
                {t.home.careerSection.description}
              </p>
              <Link href="/kariyer" className="text-gray-900 hover:underline inline-block">
                {t.home.careerSection.detailedInfo}
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Latest News Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12"
          >
            {t.home.newsSection.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                variants={fadeInUp}
                className="bg-white p-6 space-y-4"
              >
                <span className="text-sm text-gray-500">21 Mayıs 2025</span>
                <h3 className="text-lg md:text-xl font-light text-gray-900">{t.home.newsSection.articleTitle}</h3>
                <p className="text-gray-600">
                  {t.home.newsSection.articleDescription}
                </p>
                <Link href="/haberlerVeMakaleler" className="text-gray-900 hover:underline inline-block">
                  {t.home.newsSection.readMore}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Areas Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12"
          >
            {t.home.expertiseSection.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              t.home.expertiseSection.areas.obligationsLaw,
              t.home.expertiseSection.areas.criminalLaw,
              t.home.expertiseSection.areas.executionBankruptcyLaw,
              t.home.expertiseSection.areas.administrativeTaxLaw,
              t.home.expertiseSection.areas.laborLaw,
              t.home.expertiseSection.areas.corporateLaw,
              t.home.expertiseSection.areas.contractLaw,
              t.home.expertiseSection.areas.commercialLaw
            ].map((area, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="border-l-2 border-gray-200 pl-4 py-2 hover:border-gray-900 transition-colors"
          >
                <h3 className="text-base md:text-lg font-light text-gray-900">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     

    </div>
  );
}
