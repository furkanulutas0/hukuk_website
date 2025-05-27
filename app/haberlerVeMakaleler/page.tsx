'use client';

import { useState } from 'react';
import ArticleCard from "../components/ArticleCard";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import PageHeaderCard from '../components/PageHeaderCard';
import { motion } from 'framer-motion';

const contents = [
  {
    title: "Mart | Fikri Mülkiyet Bülteni",
    excerpt: "Günümüzde sosyal medya platformlarının etkisiyle, dizi, film ve sinema sektöründe üretilen içerikler yalnızca içerik olarak kendileri değil, aynı zamanda içlerinde yer alan tiplemelerin fiziksel ve davranışsal özelliklerinin sosyal medya akımlarına konu olmasıyla da tanınır ve popüler hale gelmektedir. Peki tipleme nedir? Türk hukuku kapsamında tiplemeler korunabilir mi? Bu soruların cevabını vermeden önce 5846 sayılı Fikir ve Sanat Eserleri Kanunu (“FSEK”) kapsamında eserin tanımına bakmamız gerekir. Eser, “Sahibinin hususiyetini taşıyan ve ilim ve edebiyat, musiki, güzel sanatlar veya sinema eserleri olarak sayılan her nevi fikir ve sanat mahsulleri” olarak tanımlanmıştır. FSEK güzel sanat eserlerinin kapsamını ise madde 4'te düzenlemiş ve “…8) Her türlü tiplemelerdir” demekle tiplemeleri de güzel sanat eseri olarak eser kapsamına dahil etmiştir. Öğretide tipleme Arslan Kaya tarafından “Tipleme, var olan bir kişinin veya hayali bir karakterin karikatürize edilmiş, estetik değeri haiz, halk arasında tanınmışlık düzeyi yaygınlık kazanmış halidir. Tiplemelere; Avanak Avni, Deli Ziya, Temel Reis, Kötü Kedi Şerafettin, Tweety, Mickey Mouse örnekleri verilebilir.” şeklinde tanımlanmıştır. (Fikir ve Sanat Eserleri Hukuku Dersleri -1, Prof. Dr. Arslan Kaya, Filiz Kitabevi 2024)",
    slug: "fikri-mulkiyet",
    date: "Ocak 2025"
  },
  {
    title: "Reklam Kurulu Aralık 2024 Kararları",
    excerpt: "Ticaret Bakanlığı bünyesinde faaliyet gösteren Reklam Kurulu (“Kurul”) tarafından 12 Aralık 2024 tarihinde gerçekleştirilen ve ana gündem konusu tüketicileri aldatan...",
    slug: "reklam-kararlari",
    date: "Ocak 2024"
  },
  {
    title: "Elektronik Ticarette Aracı Hizmet Sağlayıcılar ve Hizmet Sağlayıcılar Hakkında Güncel Mevzuat Değişikliği",
    excerpt: "8 Mart 2025 tarihli 32385 sayılı Resmi Gazete'de, Elektronik Ticaret Aracı Hizmet Sağlayıcı ve Elektronik Ticaret Hizmet Sağlayıcılar Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (“Yönetmelik Değişikliği”) yayımlanmıştır. Bahse konu Yönetmelik Değişikliği kapsamında; Elektronik Ticaret Hizmet Sağlayıcıların (“ETHS”) ve Elektronik Ticaret Aracı Hizmet Sağlayıcılarının (“ETAHS”) bilgi verme yükümlülüğü, verilen bu bilgilerin ETAHS sağlayıcı tarafından doğrulanması, elektronik ticaret kapsamında haksız ticari uygulamalar, aracılık sözleşmesi, çevrim içi arama motorları ile tanıtım ve erişim imkanları, bağımsız denetim, reklam bütçeleri, denetim ve lisans başvuruları gibi konularda detaylı değişiklikler yapılmıştır. İlgili Yönetmelik Değişikliği 8 Mart 2025 tarihinde yürürlüğe girmiş olup bu yazımızda genel çerçevede yapılan güncellemelerden bahsedilecektir.",
    slug: "e-ticaret",
    date: "Mart 2024"
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
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

const cardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function HaberlerVeMakalelerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("Hepsi");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Ay sayımlarını hesapla
  const monthCounts = contents.reduce((acc, item) => {
    acc[item.date] = (acc[item.date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const uniqueMonths = Object.keys(monthCounts);

  const filteredContents = contents.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesMonth =
      selectedMonth === "Hepsi" || item.date === selectedMonth;

    return matchesSearch && matchesMonth;
  });

  const totalPages = Math.ceil(filteredContents.length / itemsPerPage);
  const paginatedContents = filteredContents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Title */}
      <PageHeaderCard 
        title="Haberler ve Makaleler"
        description="Gedikli Hukuk olarak güncel gelişmeler ve hukuki değerlendirmeleri sizinle paylaşıyoruz."
      />

      {/* Main Content Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <motion.div 
          className="container mx-auto px-4 md:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col md:flex-row md:items-center md:gap-6 mb-12"
            >
              {/* Search Box */}
              <div className="relative w-full md:w-1/2 mb-2 md:mb-0">
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Makale ara..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none shadow-sm"
                />
              </div>

              {/* Month Filter */}
              <div className="w-full md:w-1/4">
                <select
                  value={selectedMonth}
                  onChange={(e) => {
                    setSelectedMonth(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none shadow-sm"
                >
                  <option value="Hepsi">Tüm Aylar</option>
                  {uniqueMonths.map((month) => (
                    <option key={month} value={month}>
                      {month} ({monthCounts[month]})
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {paginatedContents.length > 0 ? (
            paginatedContents.map((item, idx) => (
              <ArticleCard
                key={idx}
                title={item.title}
                excerpt={item.excerpt}
                link={`/haberlerVeMakaleler/${item.slug}`}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">Aradığınız kriterlere uygun içerik bulunamadı.</p>
          )}
        </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center items-center gap-2"
              >
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      currentPage === i + 1
                        ? 'bg-[#9B1B30] text-white'
                        : 'text-[#9B1B30] hover:bg-[#9B1B30] hover:text-white'
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
