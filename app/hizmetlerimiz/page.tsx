'use client'
import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageHeaderCard from '../components/PageHeaderCard';
import { useLocalization } from '../context/LocalizationContext';

export default function Services() {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen bg-white">

     
      <PageHeaderCard 
                title={t.services.title}
                description={t.services.description}
            />

      {/* Practice Areas Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Şirketler Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.corporateLaw.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.corporateLaw.description}
              </p>
              <a href="/hizmetlerimiz/a" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* Fikri Mülkiyet Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.intellectualProperty.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.intellectualProperty.description}
              </p>
              <a href="/hizmetlerimiz/b" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* İş Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.laborLaw.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.laborLaw.description}
              </p>
              <a href="/hizmetlerimiz/c" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* Vergi Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.taxLaw.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.taxLaw.description}
              </p>
              <a href="/hizmetlerimiz/d" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* Gayrimenkul Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.realEstate.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.realEstate.description}
              </p>
              <a href="/hizmetlerimiz/e" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* Enerji Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.energyLaw.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.energyLaw.description}
              </p>
              <a href="/hizmetlerimiz/f" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* Rekabet Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.competitionLaw.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.competitionLaw.description}
              </p>
              <a href="/hizmetlerimiz/g" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
              </a>
            </div>

            {/* Bankacılık ve Finans Hukuku */}
            <div className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-light text-[#9B1B30] mb-3 md:mb-4">{t.services.areas.bankingFinance.title}</h3>
              <p className="text-gray-600 mb-6">
                {t.services.areas.bankingFinance.description}
              </p>
              <a href="/hizmetlerimiz/h" className="text-[#9B1B30] hover:underline inline-block">
                {t.services.detailedInfo}
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
              {t.services.contactCTA.title}
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-600 mb-8 md:mb-10 lg:mb-12">
              {t.services.contactCTA.description}
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-[#9B1B30] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-light hover:bg-[#7d1626] transition-colors"
            >
              {t.services.contactCTA.button}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 