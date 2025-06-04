"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hikayemiz Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-12 sm:py-16 md:py-24 h-auto min-h-[60vh] sm:min-h-[75vh] md:min-h-[92vh] bg-gray-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-50">
          <Image
            src="/images/hukuk3.jpeg"
            alt="Gedikli Hukuk bürosu arka plan"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="brightness-[0.3] transform scale-105"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        <motion.div
          variants={fadeInUp}
          className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 md:px-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-10 text-center tracking-wide"
          >
            Hikayemiz
          </motion.h1>

          {/* Ömer Faruk Gedikli'nin Fotoğrafı */}
          <motion.div
            variants={fadeInUp}
            className="mb-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <Image
              src="/images/team/kurucu-avukat.png" // 👈 dosya adını buraya koy (örnek: public/images/kurucu.png)
              alt="Av. Ömer Faruk Gedikli"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Paragraflar */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="font-body text-base md:text-lg text-gray-200 leading-relaxed">
                Gedikli Hukuk Bürosu'nun hikayesi, 2024 Kasım ayında deneyim, tutku ve
                kararlılıkla başlayan yeni bir yolculuktur. Kurucumuz Av. Ömer Faruk
                Gedikli, uzun yıllar süren akademik ve mesleki birikimini, farklı hukuk
                disiplinlerinde edindiği derin uzmanlıkla birleştirerek, çağın
                gereksinimlerine uygun, çözüm odaklı ve kapsamlı bir hukuk ofisi kurmayı
                amaçlamıştır.
              </p>
              <p className="font-body text-base md:text-lg text-gray-200 leading-relaxed">
                Büromuz, kuruluşundan itibaren sadece hukuki süreçlerde değil,
                müvekkillerimizin iş hayatlarında da güvenilir bir rehber olmayı
                hedeflemektedir. Şirketler hukuku, ticaret hukuku, iş hukuku, ceza hukuku
                gibi pek çok farklı alanda hizmet veren ekibimiz, her dosyayı özel ve
                titizlikle ele alarak kişiye ve kuruma özgü stratejiler geliştirmektedir.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="font-body text-base md:text-lg text-gray-200 leading-relaxed">
                Geniş kapsamlı hizmet anlayışımız, sadece hukuki konularla sınırlı
                kalmayıp müvekkillerimizin iş dünyasındaki ihtiyaçlarını bütüncül şekilde
                kavramaya dayanır. Bu yaklaşım sayesinde, zorlu hukuki süreçlerde en
                doğru ve etkin çözümleri sunarak, müvekkillerimizin başarısına katkıda
                bulunmayı amaçlıyoruz.
              </p>
              <p className="font-body text-base md:text-lg text-gray-200 leading-relaxed">
                Gedikli Hukuk Bürosu, yenilikçi vizyonu ve güçlü işbirlikleriyle Türkiye'de
                güvenilir bir hukuk ortağı olma yolunda emin adımlarla ilerlemektedir.
                Geniş kapsamlı hikayemiz, her gün daha da büyüyen tecrübemiz ve
                müvekkillerimize olan bağlılığımızla yazılmaya devam ediyor.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>


      {/* Hakkımızda Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <motion.div
          variants={fadeInUp}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div variants={fadeInUp} className="space-y-8">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900"
              >
                Hukuki Çözüm Ortağınız
              </motion.h2>
              <motion.div variants={staggerContainer} className="space-y-6">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Gedikli Hukuk Bürosu olarak, müvekkillerimizin karşılaştığı
                  her türlü hukuki sorunda yanlarında güvenilir bir çözüm ortağı
                  olmayı ilke edindik. Hukukun karmaşık ve sürekli değişen
                  dünyasında, doğru strateji ve uzmanlıkla hareket etmek,
                  başarılı sonuçların anahtarıdır. Deneyimli ve donanımlı
                  ekibimizle, sadece hukuki süreçleri yönetmekle kalmıyor;
                  müvekkillerimizin iş hedeflerini ve ihtiyaçlarını da
                  derinlemesine anlayarak, en uygun ve etkili çözümleri
                  sunuyoruz. Her dava, her dosya bizim için özel ve önemlidir;
                  bu bilinçle hareket ederek, şeffaf, hızlı ve sonuç odaklı bir
                  hizmet anlayışı benimsiyoruz.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Geniş bilgi birikimi ve tecrübe ile donanmış olan Gedikli
                  Hukuk Bürosu, her aşamada müvekkillerini bilgilendirir, hak ve
                  menfaatlerini koruyarak en yüksek standartlarda hizmet verir.
                  Hukuki meselelerinizde sizinle birlikte yol alarak, zorlukları
                  fırsata dönüştürmek için buradayız. Gedikli Hukuk Bürosu,
                  hukuki sorunlarınıza güvenilir, etkin ve kapsamlı çözümler
                  sunan, daima yanınızda olan hukuki çözüm ortağınızdır.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative mt-8 lg:mt-0">
              <motion.div variants={fadeIn} className="w-full max-w-[80%] sm:max-w-full mx-auto aspect-square">
                <div className="p-4 sm:p-6 md:p-8 bg-white shadow-sm hover:shadow-xl transition-all text-black duration-500 rounded-sm">
                  <Image
                    src="/images/tasarım2.png"
                    alt="tasarım"
                    width={800}
                    height={960}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Gedikli Ağı Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative py-24 bg-gray-100 "
      >
        <motion.div
          variants={fadeInUp}
          className="container  mx-auto px-4 md:px-6"
        >
          <motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-light mb-12 text-center tracking-wide text-gray-900"
            >
              İşbirliği Ağı
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="group p-10 bg-white hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Gedikli Hukuk Bürosu, güçlü ve çeşitli bir Gedikli Ağı
                  oluşturmak için hem değerli çalışma arkadaşlarına hem de değerli
                  müvekkillerine odaklanmaktadır.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="group p-10 bg-white hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Gedikli Hukuk Bürosu, değerli çalışma arkadaşları ve
                  müvekkilleri arasında güvene dayalı, güçlü bir işbirliği ağı
                  kurmaya odaklanmıştır.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="group p-10 bg-white hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-sm"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-800 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Gedikli Ağı, hem çalışma arkadaşlarımızın hem de
                  müvekkillerimizin başarılarını desteklemeyi ve güvene dayalı
                  uzun vadeli ilişkiler kurmayı amaçlar.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
