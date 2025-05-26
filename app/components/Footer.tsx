import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div>
            <Image className="pb-4 md:pb-6" src="/images/footerlogo1.png" alt="Gedikli Hukuk" width={180} height={180} />
            <h3 className="text-xl font-light mb-3 md:mb-4">Gedikli Hukuk</h3>
            <p className="text-gray-400 text-sm">
              Hukuk alanında öncü ve yenilikçi çözümler sunuyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-3 md:mb-4 mt-4 md:mt-10">Hızlı Erişim</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/hakkimizda" className="hover:text-white">Hakkımızda</a></li>
              <li><a href="/hizmetlerimiz" className="hover:text-white">Hizmetlerimiz</a></li>
              <li><a href="/ekibimiz" className="hover:text-white">Ekibimiz</a></li>
              <li><a href="/kariyer" className="hover:text-white">Kariyer</a></li>
              <li><a href="/haberlerVeMakaleler" className="hover:text-white">Haberler ve Makaleler</a></li>
              <li><a href="/iletisim" className="hover:text-white">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-light mb-3 md:mb-4 mt-4 md:mt-10">Hizmetler</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/hizmetlerimiz/sirketlerHukuku" className="hover:text-white">Şirketler Hukuku</a></li>
              <li><a href="/hizmetlerimiz/sozlesmelerHukuku" className="hover:text-white">Sözleşmeler Hukuku</a></li>
              <li><a href="/hizmetlerimiz/ticaretHukuku" className="hover:text-white">Ticaret Hukuku</a></li>
              <li><a href="/hizmetlerimiz/cezaHukuku" className="hover:text-white">Ceza Hukuku</a></li>
              <li><a href="/hizmetlerimiz/borclarHukuku" className="hover:text-white">Borçlar Hukuku</a></li>
              <li><a href="/hizmetlerimiz/isHukuku" className="hover:text-white">İş Hukuku</a></li>
              <li><a href="/hizmetlerimiz/idareVeVergiHukuku" className="hover:text-white">İdare ve Vergi Hukuku</a></li>
              <li><a href="/hizmetlerimiz/icraVeIflasHukuku" className="hover:text-white">İcra ve İflas Hukuku</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-light mb-3 md:mb-4 mt-4 md:mt-10">İletişim</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
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
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Gedikli Hukuk. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 