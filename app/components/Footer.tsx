import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          {/* Logo ve Açıklama */}
          <div className="flex flex-col items-center text-center">
            <Image className="pb-2 md:pb-6" src="/images/footerlogo1.png" alt="Gedikli Hukuk" width={160} height={160} />
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4">Gedikli Hukuk</h3>
            <p className="text-gray-400 text-sm">
              Hukuk alanında öncü ve yenilikçi çözümler sunuyoruz.
            </p>
          </div>

          {/* Hızlı Erişim */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4 mt-2 md:mt-10">Hızlı Erişim</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a></li>
              <li><a href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</a></li>
              <li><a href="/ekibimiz" className="hover:text-white">Ekibimiz</a></li>
              <li><a href="/kariyer" className="hover:text-white">Kariyer</a></li>
              <li><a href="/haberlerVeMakaleler" className="hover:text-white">Haberler ve Makaleler</a></li>
              <li><a href="/iletisim" className="hover:text-white">İletişim</a></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4 mt-2 md:mt-10">Hizmetler</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-1 text-gray-400 text-sm text-right">
                <li><a href="/hizmetlerimiz/sirketlerhukuku" className="hover:text-white">Şirketler Hukuku</a></li>
                <li><a href="/hizmetlerimiz/sozlesmelerhukuku" className="hover:text-white">Sözleşmeler Hukuku</a></li>
                <li><a href="/hizmetlerimiz/ticarethukuku" className="hover:text-white">Ticaret Hukuku</a></li>
                <li><a href="/hizmetlerimiz/cezahukuku" className="hover:text-white">Ceza Hukuku</a></li>
              </ul>
              <ul className="space-y-1 text-gray-400 text-sm text-left">
                <li><a href="/hizmetlerimiz/borclarhukuku" className="hover:text-white">Borçlar Hukuku</a></li>
                <li><a href="/hizmetlerimiz/ishukuku" className="hover:text-white">İş Hukuku</a></li>
                <li><a href="/hizmetlerimiz/idarevergihukuku" className="hover:text-white">İdare ve Vergi Hukuku</a></li>
                <li><a href="/hizmetlerimiz/icraiflashukuku" className="hover:text-white">İcra ve İflas Hukuku</a></li>
              </ul>
            </div>
          </div>

          {/* İletişim */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4 mt-2 md:mt-10">İletişim</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                Koşuyolu Mahallesi Cenap Şehabettin Sokak No:124 Kadıköy/İSTANBUL
              </li>
              <li>
                <a href="tel:+902165458555" className="hover:underline">
                  0 (216) 545 85 55
                </a>
              </li>
              <li>
                <a href="mailto:info@gediklilaw.com" className="hover:underline">
                  info@gediklilaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="border-t border-gray-800 mt-6 md:mt-10 pt-4 md:pt-6 text-center text-gray-400 text-xs md:text-sm">
          <p>© 2025 Gedikli Hukuk. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
