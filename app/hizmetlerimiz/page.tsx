import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageHeaderCard from '../components/PageHeaderCard';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">

     
      <PageHeaderCard 
                title="Çalışma Alanlarımız"
                description="Gedikli Hukuk, küresel gelişmeler doğrultusunda gelişen departmanlardan oluşan özel bölümlere ev sahipliği yapmaktadır."
            />

      {/* Practice Areas Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Şirketler Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Şirketler Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Şirket kuruluşları, birleşme ve devralmalar, ortaklık yapılandırmaları ve kurumsal yönetim konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/a" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Fikri Mülkiyet Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Fikri Mülkiyet Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Patent, marka, tasarım hakları, telif hakları ve lisanslama konularında hukuki danışmanlık.
              </p>
              <a href="/hizmetlerimiz/b" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* İş Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">İş Hukuku</h3>
              <p className="text-gray-600 mb-6">
                İş sözleşmeleri, toplu iş hukuku, iş uyuşmazlıkları ve sosyal güvenlik konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/c" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Vergi Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Vergi Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Vergi planlaması, vergi uyuşmazlıkları ve uluslararası vergi hukuku konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/d" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Gayrimenkul Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Gayrimenkul Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Gayrimenkul alım-satımı, kira hukuku, imar hukuku ve gayrimenkul projeleri konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/e" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Enerji Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Enerji Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Enerji projeleri, lisanslama, düzenleyici işlemler ve enerji sözleşmeleri konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/f" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Rekabet Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Rekabet Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Rekabet uyum programları, birleşme devralma işlemleri ve rekabet soruşturmaları konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/g" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>

            {/* Bankacılık ve Finans Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">Bankacılık ve Finans Hukuku</h3>
              <p className="text-gray-600 mb-6">
                Finansal işlemler, krediler, sermaye piyasası işlemleri ve finansal regülasyon konularında danışmanlık.
              </p>
              <a href="/hizmetlerimiz/h" className="text-[#9B1B30] hover:underline inline-block">
                Detaylı Bilgi →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6 lg:mb-8 text-gray-900">
              Hukuki Danışmanlık İçin Bize Ulaşın
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-8 md:mb-10 lg:mb-12">
              Deneyimli ekibimiz ile size en uygun hukuki çözümleri sunmak için hazırız.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-[#9B1B30] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-light hover:bg-[#7d1626] transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 