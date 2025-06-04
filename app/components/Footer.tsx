'use client'
import Image from 'next/image';
import { useLocalization } from '../context/LocalizationContext';

export default function Footer() {
  const { t } = useLocalization();
  
  if (!t) {
    console.warn('Localization context not available in Footer');
    return null; // or render a fallback
  }

  return (
    <footer className="bg-gray-900 text-white py-4 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          {/* Logo ve Açıklama */}
          <div className="flex flex-col items-center text-center">
            <Image className="pb-2 md:pb-6" src="/images/footerlogo1.png" alt="Gedikli Hukuk" width={160} height={160} />
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4">{t.footer.companyName}</h3>
            <p className="text-gray-400 text-sm">
              {t.footer.companyDescription}
            </p>
          </div>

          {/* Hızlı Erişim */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4 mt-2 md:mt-10">{t.footer.quickAccess}</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="/hakkimizda" className="hover:text-white">{t.navigation.about}</a></li>
              <li><a href="/hizmetlerimiz" className="hover:text-white">{t.navigation.services}</a></li>
              <li><a href="/ekibimiz" className="hover:text-white">{t.navigation.team}</a></li>
              <li><a href="/kariyer" className="hover:text-white">{t.navigation.career}</a></li>
              <li><a href="/haberlerVeMakaleler" className="hover:text-white">{t.navigation.newsAndArticles}</a></li>
              <li><a href="/iletisim" className="hover:text-white">{t.navigation.contact}</a></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4 mt-2 md:mt-10">{t.footer.services}</h3>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-1 text-gray-400 text-sm text-right">
                <li><a href="/hizmetlerimiz/sirketlerHukuku" className="hover:text-white">{t.navigation.servicesDropdown.corporateLaw}</a></li>
                <li><a href="/hizmetlerimiz/sozlesmelerHukuku" className="hover:text-white">{t.navigation.servicesDropdown.contractLaw}</a></li>
                <li><a href="/hizmetlerimiz/ticaretHukuku" className="hover:text-white">{t.navigation.servicesDropdown.commercialLaw}</a></li>
                <li><a href="/hizmetlerimiz/cezaHukuku" className="hover:text-white">{t.navigation.servicesDropdown.criminalLaw}</a></li>
              </ul>
              <ul className="space-y-1 text-gray-400 text-sm text-left">
                <li><a href="/hizmetlerimiz/borclarHukuku" className="hover:text-white">{t.navigation.servicesDropdown.obligationsLaw}</a></li>
                <li><a href="/hizmetlerimiz/isHukuku" className="hover:text-white">{t.navigation.servicesDropdown.laborLaw}</a></li>
                <li><a href="/hizmetlerimiz/idareVeVergiHukuku" className="hover:text-white">{t.navigation.servicesDropdown.administrativeTaxLaw}</a></li>
                <li><a href="/hizmetlerimiz/icraVeIflasHukuku" className="hover:text-white">{t.navigation.servicesDropdown.executionBankruptcyLaw}</a></li>
              </ul>
            </div>
          </div>

          {/* İletişim */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-light mb-2 md:mb-4 mt-2 md:mt-10">{t.footer.contact}</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                {t.footer.address}
              </li>
              <li>
                <a href="tel:+902165458555" className="hover:underline">
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a href="mailto:info@gediklilaw.com" className="hover:underline">
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi ve Telif */}
        <div className="border-t border-gray-800 mt-6 md:mt-10 pt-4 md:pt-6 text-center text-gray-400 text-xs md:text-sm">
          <p>{t.footer.copyright} {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
