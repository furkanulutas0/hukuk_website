'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocalization } from '../context/LocalizationContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useLocalization();
  
  if (!t) {
    console.warn('Localization context not available in Navbar');
    // Consider returning a fallback navbar or null
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="w-full px-6 py-4 border-b bg-white z-50 sticky top-0">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-10 flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="h-12 w-auto mr-3" priority />
            <Image src="/images/Gedikli_hukuk_yazi2.png" alt="Gedikli Hukuk Yazı" width={150} height={40} className="h-8 w-auto hidden sm:block" priority />
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-16">
          <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900">{t.navigation.about}</Link>
          <div className="relative group">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 cursor-default"
            >
              {t.navigation.services}
            </button>
            <div className="absolute left-1/2 top-full mt-2 w-96 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 transform -translate-x-1/2 p-4 z-50">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                <li><Link href="/hizmetlerimiz/sirketlerHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.corporateLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/sozlesmelerHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.contractLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/ticaretHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.commercialLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/cezaHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.criminalLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/borclarHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.obligationsLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/isHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.laborLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/idareVergiHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.administrativeTaxLaw} </Link></li>
                <li><Link href="/hizmetlerimiz/icraIflasHukuku" className="block text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded" onClick={() => setMobileMenuOpen(false)}> {t.navigation.servicesDropdown.executionBankruptcyLaw} </Link></li>
              </ul>
            </div>
          </div>

          <Link href="/ekibimiz" className="text-gray-600 hover:text-gray-900">{t.navigation.team}</Link>
          <Link href="/kariyer" className="text-gray-600 hover:text-gray-900">{t.navigation.career}</Link>
          <Link href="/haberlerVeMakaleler" className="text-gray-600 hover:text-gray-900">{t.navigation.newsAndArticles}</Link>
          <Link href="/iletisim" className="text-gray-600 hover:text-gray-900">{t.navigation.contact}</Link>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="text-gray-600 hover:text-gray-900 lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      <div className={` mt-4 lg:hidden absolute left-0 right-0 bg-white border-t  border-gray-200 transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}>
        <div className="px-6 py-4 flex flex-col space-y-4 max-w-[1400px] mx-auto">
          <Link href="/hakkimizda" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>{t.navigation.about}</Link>
          <Link href="/hizmetlerimiz" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>{t.navigation.services}</Link>
          <Link href="/ekibimiz" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>{t.navigation.team}</Link>
          <Link href="/kariyer" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>{t.navigation.career}</Link>
          <Link href="/haberlerVeMakaleler" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>{t.navigation.newsAndArticles}</Link>
          <Link href="/iletisim" className="text-gray-600 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>{t.navigation.contact}</Link>
        </div>
      </div>
    </nav>
  );
}
