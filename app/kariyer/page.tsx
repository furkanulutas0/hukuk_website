'use client'
import Image from 'next/image';
import PageHeaderCard from '../components/PageHeaderCard';
import { useState } from 'react';

export default function Kariyer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Dosya boyutu kontrolü (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'Dosya boyutu 5MB\'dan küçük olmalıdır.'
        });
        return;
      }
      // Dosya tipi kontrolü
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({
          type: 'error',
          message: 'Lütfen PDF veya Word formatında bir dosya yükleyin.'
        });
        return;
      }
      setCvFile(file);
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cvFile) {
      setSubmitStatus({
        type: 'error',
        message: 'Lütfen CV dosyanızı yükleyin.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      // Form verilerini ekle
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      // CV dosyasını ekle
      formDataToSend.append('cv', cvFile);

      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Başvurunuz başarıyla alındı. En kısa sürede size dönüş yapacağız.'
        });
        // Form'u temizle
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: ''
        });
        setCvFile(null);
        // Dosya input'unu temizle
        const fileInput = document.getElementById('cv') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        // Başvuru Formu başlığına kaydır
        const formSection = document.getElementById('application-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        throw new Error(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Başvurunuz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Title */}
      <PageHeaderCard 
        title="Kariyer"
        description="Gedikli Hukuk ailesi olarak, yetenekli ve tutkulu hukukçuları aramıza katılmaya davet ediyoruz."
      />

      {/* Main Career Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Career Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Neden Gedikli Hukuk?</h2>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Gedikli Hukuk Bürosu olarak, hukuki çözümler sunma konusundaki tutkumuz ve kararlılığımızla, 
                  sektörde öncü konumumuzu sürdürüyoruz. Müvekkillerimizin ihtiyaçlarına özel çözümler 
                  sunarken, ekibimizin gelişimine ve mesleki tatminine de büyük önem veriyoruz.
                </p>
                
                <h3 className="text-xl font-medium text-[#9B1B30] mt-8">Sunduğumuz Avantajlar</h3>
                <ul className="space-y-3 mt-4">
                
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sürekli mesleki gelişim ve eğitim imkanları</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dinamik, destekleyici ve işbirliğine dayalı çalışma ortamı</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kariyerinizde ilerleme ve uzmanlaşma fırsatları</span>
                  </li>
                 
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-medium text-[#9B1B30]">Kimlerle Çalışmak İstiyoruz?</h3>
                <ul className="space-y-3 mt-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Hukuki çözümler üretmeye tutkulu ve kararlı</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Analitik düşünme becerisine sahip ve detaylara önem veren</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Ekip çalışmasına yatkın ve iletişim becerileri güçlü</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Kendini sürekli geliştirmeye açık ve öğrenmeye istekli</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#9B1B30] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>İngilizce başta olmak üzere yabancı dil bilgisine sahip</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Current Openings */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Açık Pozisyonlar</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-[#9B1B30]">Kıdemli Avukat - Şirketler Hukuku</h3>
                  <p className="text-gray-600 mt-2">En az 5 yıl şirketler hukuku alanında deneyimli, ulusal ve uluslararası şirketler ile çalışma tecrübesine sahip avukat arıyoruz.</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="mr-4 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      İstanbul
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tam Zamanlı
                    </span>
                  </div>
                  <button className="mt-4 text-[#9B1B30] border border-[#9B1B30] hover:bg-[#9B1B30] hover:text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                    Detayları Görüntüle
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-[#9B1B30]">Avukat - Uyuşmazlık Çözümü</h3>
                  <p className="text-gray-600 mt-2">Uyuşmazlık çözümü alanında 2-4 yıl deneyimli, dava yönetimi ve tahkim süreçlerinde tecrübeli avukat arıyoruz.</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="mr-4 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      İstanbul
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tam Zamanlı
                    </span>
                  </div>
                  <button className="mt-4 text-[#9B1B30] border border-[#9B1B30] hover:bg-[#9B1B30] hover:text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                    Detayları Görüntüle
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium text-[#9B1B30]">Stajyer Avukat</h3>
                  <p className="text-gray-600 mt-2">Hukuk fakültesi son sınıf öğrencileri veya yeni mezunlar arasından, öğrenmeye açık ve dinamik stajyer avukatlar arıyoruz.</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="mr-4 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      İstanbul
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tam Zamanlı
                    </span>
                  </div>
                  <button className="mt-4 text-[#9B1B30] border border-[#9B1B30] hover:bg-[#9B1B30] hover:text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                    Detayları Görüntüle
                  </button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-[#9B1B30] mb-4">Açık Pozisyon Bulunamadı mı?</h3>
                <p className="text-gray-600">
                  Açık pozisyonlarımız arasında size uygun bir fırsat bulamadıysanız, özgeçmişinizi bize gönderin. Uygun bir pozisyon açıldığında sizinle iletişime geçelim.
                </p>
                <button className="mt-4 bg-[#9B1B30] text-white hover:bg-[#7d1626] px-4 py-2 rounded-md transition-colors text-sm font-medium">
                  Özgeçmişimi Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 text-center">Başvuru Formu</h2>
            <p className="text-gray-600 text-center mb-8">
              Ekibimize katılmak için aşağıdaki formu doldurarak başvurunuzu yapabilirsiniz. 
              Başvurunuz incelendikten sonra uygun görülürse sizinle iletişime geçeceğiz.
            </p>

            {submitStatus && (
              <div className={`mb-6 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                </div>
                
                <div>
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
                </div>
                
                <div>
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
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Başvurulan Pozisyon</label>
                  <select 
                    id="position" 
                    name="position" 
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                  >
                    <option value="">Seçiniz</option>
                    <option value="senior-attorney">Kıdemli Avukat - Şirketler Hukuku</option>
                    <option value="litigation-attorney">Avukat - Uyuşmazlık Çözümü</option>
                    <option value="intern">Stajyer Avukat</option>
                    <option value="open-application">Genel Başvuru</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Deneyim Süresi</label>
                  <select 
                    id="experience" 
                    name="experience" 
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                  >
                    <option value="">Seçiniz</option>
                    <option value="0-1">0-1 Yıl</option>
                    <option value="1-3">1-3 Yıl</option>
                    <option value="3-5">3-5 Yıl</option>
                    <option value="5+">5+ Yıl</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Kendinizi Tanıtın</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#9B1B30] focus:border-[#9B1B30] focus:outline-none text-black"
                    placeholder="Kendiniz ve kariyeriniz hakkında kısa bir bilgi veriniz."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    id="privacy-policy" 
                    name="privacy-policy" 
                    type="checkbox" 
                    required
                    className="h-4 w-4 text-[#9B1B30] border-gray-300 rounded focus:ring-[#9B1B30]" 
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    <span>Kişisel verilerin işlenmesine ilişkin </span>
                    <a href="#" className="text-[#9B1B30] hover:underline">aydınlatma metnini</a>
                    <span> okudum ve kabul ediyorum.</span>
                  </label>
                </div>
                
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">CV Yükle</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="cv" className="relative cursor-pointer bg-white rounded-md font-medium text-[#9B1B30] hover:text-[#7d1626] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#9B1B30]">
                          <span>Dosya yükle</span>
                          <input 
                            id="cv" 
                            name="cv" 
                            type="file" 
                            className="sr-only"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            required
                          />
                        </label>
                        <p className="pl-1">veya sürükleyip bırakın</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX, en fazla 5MB
                      </p>
                      {cvFile && (
                        <p className="text-sm text-green-600">
                          Seçilen dosya: {cvFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-[#9B1B30] text-white py-3 px-4 rounded-md hover:bg-[#7d1626] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1B30] focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
  }
  