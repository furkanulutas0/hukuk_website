'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHeaderCard from '../components/PageHeaderCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <PageHeaderCard
        title="İletişim"
        description="Hukuki danışmanlık için bize ulaşın, size en iyi çözümleri sunalım."
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* LEFT */}
            <motion.div variants={staggerContainer} className="space-y-6 md:space-y-8">
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-light text-gray-900 md:mb-2">
                Bize Ulaşın
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600">
                Hukuki ihtiyaçlarınız için bizimle iletişime geçin. Size en uygun çözümü sunalım.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-5 mt-8">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Adres",
                    content: "Koşuyolu Mahallesi Cenap Şehabettin Sokak No:124 Kadıköy/İSTANBUL"
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "E-posta",
                    content: "info@gediklilaw.com"
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#9B1B30] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Telefon",
                    content: "0 (216) 545 85 55"
                  }
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-4">
                    {item.icon}
                    <div>
                      <h3 className="text-base md:text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Sosyal Medya */}
              <motion.div variants={fadeInUp} className="mt-10">
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Bizi Takip Edin</h3>
                <motion.div variants={staggerContainer} className="flex space-x-4">
                  <motion.a
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/company/gediklihukuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* FORM */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-light text-gray-900 mb-6">Mesaj Gönder</motion.h2>
              <motion.form variants={staggerContainer} className="space-y-6">
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                    <input type="text" id="first-name" name="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                    <input type="text" id="last-name" name="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md text-black" />
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-center">
                  <input id="privacy-policy" name="privacy-policy" type="checkbox" className="h-4 w-4 text-[#9B1B30] border-gray-300 rounded" />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    <span>Kişisel verilerin işlenmesine ilişkin </span>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-[#9B1B30] hover:underline"
                    >
                      aydınlatma metnini
                    </button>
                    <span> okudum ve kabul ediyorum.</span>
                  </label>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-[#9B1B30] text-white py-3 px-4 rounded-md">
                    Gönder
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full p-6 rounded shadow-lg relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-4 text-gray-600 text-xl">&times;</button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Aydınlatma Metni</h2>
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed max-h-[60vh] overflow-y-auto">
              <p>
                <strong>1. Veri Sorumlusunun Kimliği:</strong><br />
                Gedikli Hukuk Bürosu olarak, kişisel verilerinizin korunmasına büyük önem veriyoruz.
              </p>
              <p>
                <strong>2. Kişisel Verilerin İşlenme Amaçları:</strong><br />
                İletişim formu aracılığıyla toplanan kişisel verileriniz; taleplerinizi değerlendirmek, sizinle iletişime geçmek ve hizmetlerimizi geliştirmek amacıyla işlenmektedir.
              </p>
              <p>
                <strong>3. İşlenen Kişisel Veriler:</strong><br />
                Ad, soyad, e-posta adresi, telefon numarası ve mesaj içeriğiniz gibi veriler işlenmektedir.
              </p>
              <p>
                <strong>4. Toplanma Yöntemi ve Hukuki Sebep:</strong><br />
                Verileriniz elektronik ortamda, iletişim formu vasıtasıyla, meşru menfaat hukuki sebebine dayalı olarak toplanmaktadır.
              </p>
              <p>
                <strong>5. Verilerin Aktarımı:</strong><br />
                Yalnızca hizmet amaçlı ve yasal yükümlülükler gereği sınırlı olarak aktarılabilir.
              </p>
              <p>
                <strong>6. KVKK Kapsamındaki Haklarınız:</strong><br />
                KVKK 11. madde kapsamında kişisel verilerinize ilişkin her türlü bilgiye ulaşma, düzeltme, silme, işlenmesini engelleme ve itiraz etme hakkına sahipsiniz.
              </p>
              <p>
                <strong>7. İletişim:</strong><br />
                info@gediklilaw.com adresine başvurarak haklarınızı kullanabilirsiniz.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
