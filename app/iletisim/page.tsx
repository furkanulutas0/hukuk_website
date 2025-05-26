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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('/api/send-contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
        });
        // Form'u temizle
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Mesaj Gönder başlığına kaydır
        const formSection = document.getElementById('contact-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        throw new Error(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <motion.p 
                variants={fadeInUp}
                className="text-gray-600"
              >
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
            
            {/* Contact Form */}
            <motion.div 
              variants={fadeInUp}
              id="contact-form"
              className="bg-gray-50 p-6 md:p-8 rounded-lg"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-xl md:text-2xl font-light text-gray-900 mb-6"
              >
                Mesaj Gönder
              </motion.h2>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <motion.form 
                variants={staggerContainer}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div 
                  variants={fadeInUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
              <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
                <input
                  type="text"
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                />
              </div>
              <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                    />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
                <input
                  type="email"
                  id="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Konu</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                  >
                    <option value="">Seçiniz</option>
                    <option value="genel-bilgi">Genel Bilgi</option>
                    <option value="sirketler-hukuku">Şirketler Hukuku</option>
                    <option value="is-hukuku">İş Hukuku</option>
                    <option value="vergi-hukuku">Vergi Hukuku</option>
                    <option value="diger">Diğer</option>
                  </select>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                <textarea
                  id="message"
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                ></textarea>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center"
                >
                  <input 
                    id="privacy-policy" 
                    name="privacy-policy" 
                    type="checkbox" 
                    required
                    className="h-4 w-4 text-[#9B1B30] border-gray-300 rounded focus:ring-[#9B1B30]" 
                  />
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
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#9B1B30] text-white py-3 px-4 rounded-md hover:bg-[#7d1626] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Google Map */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-12 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center"
          >
            Lokasyonumuz
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">Google Harita Buraya Eklenecek</span>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
