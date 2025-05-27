"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaRegClock } from "react-icons/fa";

// Animation variants for scroll reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const hizmetler = [
  { title: "Borçlar Hukuku", slug: "borclarhukuku" },
  { title: "Ceza Hukuku", slug: "cezahukuku" },
  { title: "İcra ve İflas Hukuku", slug: "icraiflashukuku" },
  { title: "İdare ve Vergi Hukuku", slug: "idarevergihukuku" },
  { title: "İş Hukuku", slug: "ishukuku" },
  { title: "Şirketler Hukuku", slug: "sirketlerhukuku" },
  { title: "Sözleşmeler Hukuku", slug: "sozlesmelerhukuku" },
  { title: "Ticaret Hukuku", slug: "ticarethukuku" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[75vh] md:h-[92vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hukuk6.png"
            alt="Gedikli Hukuk bürosu arka plan"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="brightness-[0.65] transform scale-105"
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88/HjfwAJZAPolF7wHgAAAABJRU5ErkJggg=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-8 text-white leading-tight">
              Hukuki çözüm ortağınız{" "}
              <span className="text-gray-100 font-normal">GEDİKLİ</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12 text-gray-100 max-w-2xl leading-relaxed">
              Güvenilir, şeffaf ve müvekkil odaklı yaklaşımla hukuki danışmanlık hizmetleri
            </p>
            <div className="flex flex-row gap-4 items-center">
              <Link href="/hakkimizda">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 text-white border border-white/30 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg transition-all duration-300 rounded-sm hover:shadow-lg backdrop-blur-sm"
                >
                  Daha Fazla Bilgi
                </motion.button>
              </Link>
              <Link href="/iletisim">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 text-white border border-white/30 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg transition-all duration-300 rounded-sm hover:shadow-lg backdrop-blur-sm"
                >
                  İletişime Geçin
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Hizmetlerimiz */}
            <motion.div 
              variants={fadeInUp}
              className="group p-10 bg-white hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Şirketler hukuku, fikri mülkiyet, iş hukuku ve daha fazlası için
                kapsamlı hukuki danışmanlık hizmetleri sunuyoruz.
              </p>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center text-rose-800 hover:text-rose-900 transition-colors group"
              >
                <span className="font-medium">Detaylı Bilgi</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Ekibimiz */}
            <motion.div 
              variants={fadeInUp}
              className="group p-10 bg-white hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Ekibimiz
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Deneyimli hukuk ekibimiz ile ulusal ve uluslararası hukuk
                alanında çözümler üretiyoruz.
              </p>
              <Link
                href="/ekibimiz"
                className="inline-flex items-center text-rose-800 hover:text-rose-900 transition-colors group"
              >
                <span className="font-medium">Ekibimizi Tanıyın</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Kariyer */}
            <motion.div 
              variants={fadeInUp}
              className="group p-10 bg-white hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Kariyer
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kariyer fırsatlarımızı keşfedin ve bizimle birlikte ulusal ve
                uluslararası hukuk alanında ilerleyin.
              </p>
              <Link
                href="/kariyer"
                className="inline-flex items-center text-rose-800 hover:text-rose-900 transition-colors group"
              >
                <span className="font-medium">Fırsatları Keşfedin</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Latest News Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            variants={fadeInUp}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
                Son Haberler ve Makaleler
              </h2>
              <p className="text-gray-600">Hukuk dünyasındaki son gelişmeler</p>
            </div>
            <Link
              href="/haberlerVeMakaleler"
              className="text-rose-800 hover:text-rose-900 transition-colors hidden md:flex items-center group"
            >
              <span className="font-medium">Tümünü Gör</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-white group hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaRegClock className="mr-2" />
                  <span>Mart 2025</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-rose-800 transition-colors">
                  Mart | Fikri Mülkiyet Bülteni
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Günümüzde sosyal medya platformlarının etkisiyle, dizi, film ve sinema sektöründe üretilen içerikler ve tiplemelerin hukuki korunması...
                </p>
                <Link
                  href="/haberlerVeMakaleler/fikri-mulkiyet"
                  className="inline-flex items-center text-rose-800 hover:text-rose-900 transition-colors group"
                >
                  <span className="font-medium">Devamını Oku</span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white group hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaRegClock className="mr-2" />
                  <span>Ocak 2024</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-rose-800 transition-colors">
                  Reklam Kurulu Aralık 2024 Kararları
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ticaret Bakanlığı bünyesinde faaliyet gösteren Reklam Kurulu tarafından gerçekleştirilen toplantıda alınan önemli kararlar...
                </p>
                <Link
                  href="/haberlerVeMakaleler/reklam-kararlari"
                  className="inline-flex items-center text-rose-800 hover:text-rose-900 transition-colors group"
                >
                  <span className="font-medium">Devamını Oku</span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white group hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaRegClock className="mr-2" />
                  <span>Mart 2024</span>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-rose-800 transition-colors">
                  Elektronik Ticarette Aracı Hizmet Sağlayıcılar ve Hizmet Sağlayıcılar
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  8 Mart 2025 tarihli Resmi Gazete'de yayımlanan yönetmelik değişikliği ile elektronik ticaret alanında önemli düzenlemeler...
                </p>
                <Link
                  href="/haberlerVeMakaleler/e-ticaret"
                  className="inline-flex items-center text-rose-800 hover:text-rose-900 transition-colors group"
                >
                  <span className="font-medium">Devamını Oku</span>
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Expertise Areas Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center"
          >
            Uzmanlık Alanlarımız
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {hizmetler.map((hizmet, index) => (
              <Link key={index} href={`/hizmetlerimiz/${hizmet.slug}`}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer border-l-2 border-gray-200 pl-6 py-4 hover:border-rose-800 transition-all duration-300 group bg-white hover:shadow-md"
                >
                  <h3 className="text-base md:text-lg font-light text-gray-900 group-hover:text-rose-800 transition-colors">
                    {hizmet.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}