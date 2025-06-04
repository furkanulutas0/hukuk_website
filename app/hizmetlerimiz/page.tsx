"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import PageHeaderCard from "../components/PageHeaderCard";

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

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeaderCard
        title="Çalışma Alanlarımız"
        description="Gedikli Hukuk, küresel gelişmeler doğrultusunda gelişen departmanlardan oluşan özel bölümlere ev sahipliği yapmaktadır."
      />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Şirketler Hukuku</h3>
              <p className="text-gray-600 mb-6">Şirket kuruluşu, yapılandırma ve yönetim süreçlerine hukuki destek.</p>
              <a href="/hizmetlerimiz/sirketlerhukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Sözleşmeler Hukuku</h3>
              <p className="text-gray-600 mb-6">Sözleşme hazırlama, inceleme ve müzakere hizmetleri sunuyoruz.</p>
              <a href="/hizmetlerimiz/sozlesmelerhukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Ticaret Hukuku</h3>
              <p className="text-gray-600 mb-6">Ticari işlemler, düzenlemeler ve uyuşmazlıklar hakkında hukuki danışmanlık.</p>
              <a href="/hizmetlerimiz/ticarethukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Ceza Hukuku</h3>
              <p className="text-gray-600 mb-6">Ceza davalarında uzman avukatlarımız ile hukuki savunma.</p>
              <a href="/hizmetlerimiz/cezahukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Borçlar Hukuku</h3>
              <p className="text-gray-600 mb-6">Alacak, borç ilişkileri ve sorumluluk hukuku kapsamında danışmanlık.</p>
              <a href="/hizmetlerimiz/borclarhukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">İş Hukuku</h3>
              <p className="text-gray-600 mb-6">İşçi-işveren ilişkileri, iş sözleşmeleri ve uyuşmazlık çözüm süreçleri.</p>
              <a href="/hizmetlerimiz/ishukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">İdare ve Vergi Hukuku</h3>
              <p className="text-gray-600 mb-6">İdari işlemler, vergi uyuşmazlıkları ve kamu hukuku konularında danışmanlık.</p>
              <a href="/hizmetlerimiz/idarevergihukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">İcra ve İflas Hukuku</h3>
              <p className="text-gray-600 mb-6">Alacak takibi, iflas işlemleri ve icra süreçlerinde hukuki destek.</p>
              <a href="/hizmetlerimiz/icraiflashukuku" className="text-[#9B1B30] hover:underline inline-block">Detaylı Bilgi →</a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-12 md:py-16 lg:py-20 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 lg:mb-8 text-gray-900"
            >
              Hukuki Danışmanlık İçin Bize Ulaşın
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl font-light text-gray-600 mb-8 md:mb-10 lg:mb-12"
            >
              Deneyimli ekibimiz ile size en uygun hukuki çözümleri sunmak için hazırız.
            </motion.p>
            <motion.a
              href="/iletisim"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="inline-block bg-[#9B1B30] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-light hover:bg-[#7d1626] transition-colors"
            >
              İletişime Geçin
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
