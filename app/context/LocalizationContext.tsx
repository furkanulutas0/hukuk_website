'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'tr' | 'en';

interface Translations {
  navigation: {
    about: string;
    services: string;
    team: string;
    career: string;
    newsAndArticles: string;
    contact: string;
    servicesDropdown: {
      corporateLaw: string;
      contractLaw: string;
      commercialLaw: string;
      criminalLaw: string;
      obligationsLaw: string;
      laborLaw: string;
      administrativeTaxLaw: string;
      executionBankruptcyLaw: string;
    };
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    moreInfoButton: string;
    servicesSection: {
      title: string;
      description: string;
      detailedInfo: string;
    };
    teamSection: {
      title: string;
      description: string;
      meetTeam: string;
    };
    careerSection: {
      title: string;
      description: string;
      detailedInfo: string;
    };
    newsSection: {
      title: string;
      articleTitle: string;
      articleDescription: string;
      readMore: string;
    };
    expertiseSection: {
      title: string;
      areas: {
        obligationsLaw: string;
        criminalLaw: string;
        executionBankruptcyLaw: string;
        administrativeTaxLaw: string;
        laborLaw: string;
        corporateLaw: string;
        contractLaw: string;
        commercialLaw: string;
      };
    };
  };
  services: {
    title: string;
    description: string;
    detailedInfo: string;
    contactCTA: {
      title: string;
      description: string;
      button: string;
    };
    areas: {
      corporateLaw: {
        title: string;
        description: string;
      };
      intellectualProperty: {
        title: string;
        description: string;
      };
      laborLaw: {
        title: string;
        description: string;
      };
      taxLaw: {
        title: string;
        description: string;
      };
      realEstate: {
        title: string;
        description: string;
      };
      energyLaw: {
        title: string;
        description: string;
      };
      competitionLaw: {
        title: string;
        description: string;
      };
      bankingFinance: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    companyName: string;
    companyDescription: string;
    quickAccess: string;
    services: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
    allRightsReserved: string;
  };
  team: {
    positions: {
      founderLawyer: string;
      expertLawyer: string;
      lawyer: string;
      followUpSpecialist: string;
    };
    specialties: {
      administrativeLaw: string;
      taxLaw: string;
      commercialLaw: string;
      criminalLaw: string;
      executionBankruptcyLaw: string;
      corporateLaw: string;
      obligationsLaw: string;
      contractLaw: string;
      laborLaw: string;
      consumerLaw: string;
      privateLaw: string;
      laborSocialSecurityLaw: string;
    };
    contactInfo: string;
    phone: string;
    email: string;
    specialtiesTitle: string;
  };
  about: {
    title: string;
    description: string;
  };
  career: {
    title: string;
    description: string;
  };
  news: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    reachOut: string;
    reachOutDescription: string;
    address: string;
    email: string;
    phone: string;
    followUs: string;
    location: string;
    sendMessage: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      selectSubject: string;
      subjects: {
        generalInfo: string;
        corporateLaw: string;
        contractLaw: string;
        commercialLaw: string;
        criminalLaw: string;
        obligationsLaw: string;
        laborLaw: string;
        administrativeTaxLaw: string;
        executionBankruptcyLaw: string;
        other: string;
      };
      privacyPolicy: string;
      privacyPolicyText: string;
      privacyPolicyAccept: string;
      send: string;
      sending: string;
      successMessage: string;
      errorMessage: string;
    };
    privacyModal: {
      title: string;
      content: {
        dataController: string;
        dataControllerText: string;
        processingPurposes: string;
        processingPurposesText: string;
        personalData: string;
        personalDataText: string;
        collectionMethod: string;
        collectionMethodText: string;
        dataTransfer: string;
        dataTransferText: string;
        rights: string;
        rightsText: string;
        contact: string;
        contactText: string;
      };
    };
  };
  common: {
    language: string;
    turkish: string;
    english: string;
    readMore: string;
    learnMore: string;
    viewAll: string;
    backToHome: string;
    loading: string;
    error: string;
    success: string;
    close: string;
  };
}

const translations: Record<Language, Translations> = {
  tr: {
    navigation: {
      about: "Hakkımızda",
      services: "Hizmetlerimiz",
      team: "Ekibimiz",
      career: "Kariyer",
      newsAndArticles: "Haberler ve Makaleler",
      contact: "İletişim",
      servicesDropdown: {
        corporateLaw: "Şirketler Hukuku",
        contractLaw: "Sözleşmeler Hukuku",
        commercialLaw: "Ticaret Hukuku",
        criminalLaw: "Ceza Hukuku",
        obligationsLaw: "Borçlar Hukuku",
        laborLaw: "İş Hukuku",
        administrativeTaxLaw: "İdare ve Vergi Hukuku",
        executionBankruptcyLaw: "İcra ve İflas Hukuku"
      }
    },
    home: {
      heroTitle: "Hukuki çözüm ortağınız",
      heroSubtitle: "Hukuk alanında geniş tecrübe ve hizmetler",
      moreInfoButton: "Daha Fazla Bilgi",
      servicesSection: {
        title: "Hizmetlerimiz",
        description: "Şirketler hukuku, fikri mülkiyet, iş hukuku ve daha fazlası için kapsamlı hukuki danışmanlık hizmetleri sunuyoruz.",
        detailedInfo: "Detaylı Bilgi →"
      },
      teamSection: {
        title: "Ekibimiz",
        description: "Deneyimli hukuk ekibimiz ile ulusal ve uluslararası hukuk alanında çözümler üretiyoruz.",
        meetTeam: "Ekibimizi Tanıyın →"
      },
      careerSection: {
        title: "Kariyer",
        description: "Kariyer fırsatlarımızı keşfedin ve bizimle birlikte ulusal ve uluslararası hukuk alanında ilerleyin.",
        detailedInfo: "Detaylı Bilgi →"
      },
      newsSection: {
        title: "Son Haberler ve Makaleler",
        articleTitle: "Güncel Hukuki Gelişmeler",
        articleDescription: "Hukuk dünyasındaki son gelişmeler ve güncel yasal düzenlemeler hakkında bilgiler.",
        readMore: "Devamını Oku →"
      },
      expertiseSection: {
        title: "Uzmanlık Alanlarımız",
        areas: {
          obligationsLaw: "Borçlar Hukuku",
          criminalLaw: "Ceza Hukuku",
          executionBankruptcyLaw: "İcra ve İflas Hukuku",
          administrativeTaxLaw: "İdare ve Vergi Hukuku",
          laborLaw: "İş Hukuku",
          corporateLaw: "Şirketler Hukuku",
          contractLaw: "Sözleşmeler Hukuku",
          commercialLaw: "Ticaret Hukuku"
        }
      }
    },
    services: {
      title: "Çalışma Alanlarımız",
      description: "Gedikli Hukuk, küresel gelişmeler doğrultusunda gelişen departmanlardan oluşan özel bölümlere ev sahipliği yapmaktadır.",
      detailedInfo: "Detaylı Bilgi →",
      contactCTA: {
        title: "Hukuki Danışmanlık İçin Bize Ulaşın",
        description: "Deneyimli ekibimiz ile size en uygun hukuki çözümleri sunmak için hazırız.",
        button: "İletişime Geçin"
      },
      areas: {
        corporateLaw: {
          title: "Şirketler Hukuku",
          description: "Şirket kuruluşları, birleşme ve devralmalar, ortaklık yapılandırmaları ve kurumsal yönetim konularında danışmanlık."
        },
        intellectualProperty: {
          title: "Fikri Mülkiyet Hukuku",
          description: "Patent, marka, tasarım hakları, telif hakları ve lisanslama konularında hukuki danışmanlık."
        },
        laborLaw: {
          title: "İş Hukuku",
          description: "İş sözleşmeleri, toplu iş hukuku, iş uyuşmazlıkları ve sosyal güvenlik konularında danışmanlık."
        },
        taxLaw: {
          title: "Vergi Hukuku",
          description: "Vergi planlaması, vergi uyuşmazlıkları ve uluslararası vergi hukuku konularında danışmanlık."
        },
        realEstate: {
          title: "Gayrimenkul Hukuku",
          description: "Gayrimenkul alım-satımı, kira hukuku, imar hukuku ve gayrimenkul projeleri konularında danışmanlık."
        },
        energyLaw: {
          title: "Enerji Hukuku",
          description: "Enerji projeleri, lisanslama, düzenleyici işlemler ve enerji sözleşmeleri konularında danışmanlık."
        },
        competitionLaw: {
          title: "Rekabet Hukuku",
          description: "Rekabet uyum programları, birleşme devralma işlemleri ve rekabet soruşturmaları konularında danışmanlık."
        },
        bankingFinance: {
          title: "Bankacılık ve Finans Hukuku",
          description: "Finansal işlemler, krediler, sermaye piyasası işlemleri ve finansal regülasyon konularında danışmanlık."
        }
      }
    },
    footer: {
      companyName: "Gedikli Hukuk",
      companyDescription: "Hukuk alanında öncü ve yenilikçi çözümler sunuyoruz.",
      quickAccess: "Hızlı Erişim",
      services: "Hizmetler",
      contact: "İletişim",
      address: "Koşuyolu Mahallesi Cenap Şehabettin Sokak No:124 Kadıköy/İSTANBUL",
      phone: "0 (216) 545 85 55",
      email: "info@gediklilaw.com",
      copyright: "© 2025 Gedikli Hukuk.",
      allRightsReserved: "Tüm hakları saklıdır."
    },
    team: {
      positions: {
        founderLawyer: "Kurucu Avukat",
        expertLawyer: "Uzman Avukat",
        lawyer: "Avukat",
        followUpSpecialist: "Takip Elemanı"
      },
      specialties: {
        administrativeLaw: "İdare Hukuku",
        taxLaw: "Vergi Hukuku",
        commercialLaw: "Ticaret Hukuku",
        criminalLaw: "Ceza Hukuku",
        executionBankruptcyLaw: "İcra ve İflas Hukuku",
        corporateLaw: "Şirketler Hukuku",
        obligationsLaw: "Borçlar Hukuku",
        contractLaw: "Sözleşmeler Hukuku",
        laborLaw: "İş Hukuku",
        consumerLaw: "Tüketici Hukuku",
        privateLaw: "Özel Hukuk",
        laborSocialSecurityLaw: "İş ve Sosyal Güvenlik Hukuku"
      },
      contactInfo: "İletişim Bilgileri",
      phone: "Telefon",
      email: "E-posta",
      specialtiesTitle: "Uzmanlık Alanları"
    },
    about: {
      title: "Hakkımızda",
      description: "Gedikli Hukuk Bürosu hakkında detaylı bilgiler."
    },
    career: {
      title: "Kariyer",
      description: "Kariyer fırsatları ve açık pozisyonlar."
    },
    news: {
      title: "Haberler ve Makaleler",
      description: "Güncel haberler ve hukuki makaleler."
    },
    contact: {
      title: "İletişim",
      description: "Hukuki danışmanlık için bize ulaşın, size en iyi çözümleri sunalım.",
      reachOut: "Bize Ulaşın",
      reachOutDescription: "Hukuki ihtiyaçlarınız için bizimle iletişime geçin. Size en uygun çözümü sunalım.",
      address: "Adres",
      email: "E-posta",
      phone: "Telefon",
      followUs: "Bizi Takip Edin",
      location: "Lokasyonumuz",
      sendMessage: "Mesaj Gönder",
      form: {
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        phone: "Telefon",
        subject: "Konu",
        message: "Mesajınız",
        selectSubject: "Seçiniz",
        subjects: {
          generalInfo: "Genel Bilgi",
          corporateLaw: "Şirketler Hukuku",
          contractLaw: "Sözleşmeler Hukuku",
          commercialLaw: "Ticaret Hukuku",
          criminalLaw: "Ceza Hukuku",
          obligationsLaw: "Borçlar Hukuku",
          laborLaw: "İş Hukuku",
          administrativeTaxLaw: "İdare ve Vergi Hukuku",
          executionBankruptcyLaw: "İcra ve İflas Hukuku",
          other: "Diğer"
        },
        privacyPolicy: "Kişisel verilerin işlenmesine ilişkin",
        privacyPolicyText: "aydınlatma metnini",
        privacyPolicyAccept: "okudum ve kabul ediyorum.",
        send: "Gönder",
        sending: "Gönderiliyor...",
        successMessage: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
        errorMessage: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
      },
      privacyModal: {
        title: "Aydınlatma Metni",
        content: {
          dataController: "1. Veri Sorumlusunun Kimliği:",
          dataControllerText: "Gedikli Hukuk Bürosu olarak, kişisel verilerinizin korunmasına büyük önem veriyoruz.",
          processingPurposes: "2. Kişisel Verilerin İşlenme Amaçları:",
          processingPurposesText: "İletişim formu aracılığıyla toplanan kişisel verileriniz; taleplerinizi değerlendirmek, sizinle iletişime geçmek ve hizmetlerimizi geliştirmek amacıyla işlenmektedir.",
          personalData: "3. İşlenen Kişisel Veriler:",
          personalDataText: "Ad, soyad, e-posta adresi, telefon numarası ve mesaj içeriğiniz gibi veriler işlenmektedir.",
          collectionMethod: "4. Toplanma Yöntemi ve Hukuki Sebep:",
          collectionMethodText: "Verileriniz elektronik ortamda, iletişim formu vasıtasıyla, meşru menfaat hukuki sebebine dayalı olarak toplanmaktadır.",
          dataTransfer: "5. Verilerin Aktarımı:",
          dataTransferText: "Yalnızca hizmet amaçlı ve yasal yükümlülükler gereği sınırlı olarak aktarılabilir.",
          rights: "6. KVKK Kapsamındaki Haklarınız:",
          rightsText: "KVKK 11. madde kapsamında kişisel verilerinize ilişkin her türlü bilgiye ulaşma, düzeltme, silme, işlenmesini engelleme ve itiraz etme hakkına sahipsiniz.",
          contact: "7. İletişim:",
          contactText: "info@gediklilaw.com adresine başvurarak haklarınızı kullanabilirsiniz."
        }
      }
    },
    common: {
      language: "Dil",
      turkish: "Türkçe",
      english: "English",
      readMore: "Devamını Oku",
      learnMore: "Daha Fazla Öğren",
      viewAll: "Tümünü Gör",
      backToHome: "Ana Sayfaya Dön",
      loading: "Yükleniyor...",
      error: "Hata",
      success: "Başarılı",
      close: "Kapat"
    }
  },
  en: {
    navigation: {
      about: "About",
      services: "Services",
      team: "Team",
      career: "Career",
      newsAndArticles: "News and Articles",
      contact: "Contact",
      servicesDropdown: {
        corporateLaw: "Corporate Law",
        contractLaw: "Contract Law",
        commercialLaw: "Commercial Law",
        criminalLaw: "Criminal Law",
        obligationsLaw: "Obligations Law",
        laborLaw: "Labor Law",
        administrativeTaxLaw: "Administrative and Tax Law",
        executionBankruptcyLaw: "Execution and Bankruptcy Law"
      }
    },
    home: {
      heroTitle: "Your legal solution partner",
      heroSubtitle: "Extensive experience and services in the field of law",
      moreInfoButton: "Learn More",
      servicesSection: {
        title: "Our Services",
        description: "We provide comprehensive legal consultancy services for corporate law, intellectual property, labor law and more.",
        detailedInfo: "Detailed Information →"
      },
      teamSection: {
        title: "Our Team",
        description: "With our experienced legal team, we produce solutions in national and international law.",
        meetTeam: "Meet Our Team →"
      },
      careerSection: {
        title: "Career",
        description: "Discover our career opportunities and advance with us in national and international law.",
        detailedInfo: "Detailed Information →"
      },
      newsSection: {
        title: "Latest News and Articles",
        articleTitle: "Current Legal Developments",
        articleDescription: "Information about the latest developments in the legal world and current legal regulations.",
        readMore: "Read More →"
      },
      expertiseSection: {
        title: "Our Areas of Expertise",
        areas: {
          obligationsLaw: "Obligations Law",
          criminalLaw: "Criminal Law",
          executionBankruptcyLaw: "Execution and Bankruptcy Law",
          administrativeTaxLaw: "Administrative and Tax Law",
          laborLaw: "Labor Law",
          corporateLaw: "Corporate Law",
          contractLaw: "Contract Law",
          commercialLaw: "Commercial Law"
        }
      }
    },
    services: {
      title: "Our Practice Areas",
      description: "Gedikli Law hosts specialized departments that have developed in line with global developments.",
      detailedInfo: "Detailed Information →",
      contactCTA: {
        title: "Contact Us for Legal Consultancy",
        description: "We are ready to provide you with the most suitable legal solutions with our experienced team.",
        button: "Get in Touch"
      },
      areas: {
        corporateLaw: {
          title: "Corporate Law",
          description: "Consultancy on company formations, mergers and acquisitions, partnership structures and corporate governance."
        },
        intellectualProperty: {
          title: "Intellectual Property Law",
          description: "Legal consultancy on patents, trademarks, design rights, copyrights and licensing."
        },
        laborLaw: {
          title: "Labor Law",
          description: "Consultancy on employment contracts, collective labor law, labor disputes and social security."
        },
        taxLaw: {
          title: "Tax Law",
          description: "Consultancy on tax planning, tax disputes and international tax law."
        },
        realEstate: {
          title: "Real Estate Law",
          description: "Consultancy on real estate buying and selling, rental law, zoning law and real estate projects."
        },
        energyLaw: {
          title: "Energy Law",
          description: "Consultancy on energy projects, licensing, regulatory processes and energy contracts."
        },
        competitionLaw: {
          title: "Competition Law",
          description: "Consultancy on competition compliance programs, merger and acquisition transactions and competition investigations."
        },
        bankingFinance: {
          title: "Banking and Finance Law",
          description: "Consultancy on financial transactions, loans, capital market transactions and financial regulation."
        }
      }
    },
    footer: {
      companyName: "Gedikli Law",
      companyDescription: "We provide pioneering and innovative solutions in the field of law.",
      quickAccess: "Quick Access",
      services: "Services",
      contact: "Contact",
      address: "Koşuyolu Mahallesi Cenap Şehabettin Sokak No:124 Kadıköy/İSTANBUL",
      phone: "0 (216) 545 85 55",
      email: "info@gediklilaw.com",
      copyright: "© 2025 Gedikli Law.",
      allRightsReserved: "All rights reserved."
    },
    team: {
      positions: {
        founderLawyer: "Founding Lawyer",
        expertLawyer: "Expert Lawyer",
        lawyer: "Lawyer",
        followUpSpecialist: "Follow-up Specialist"
      },
      specialties: {
        administrativeLaw: "Administrative Law",
        taxLaw: "Tax Law",
        commercialLaw: "Commercial Law",
        criminalLaw: "Criminal Law",
        executionBankruptcyLaw: "Execution and Bankruptcy Law",
        corporateLaw: "Corporate Law",
        obligationsLaw: "Obligations Law",
        contractLaw: "Contract Law",
        laborLaw: "Labor Law",
        consumerLaw: "Consumer Law",
        privateLaw: "Private Law",
        laborSocialSecurityLaw: "Labor and Social Security Law"
      },
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      specialtiesTitle: "Areas of Expertise"
    },
    about: {
      title: "About Us",
      description: "Detailed information about Gedikli Law Office."
    },
    career: {
      title: "Career",
      description: "Career opportunities and open positions."
    },
    news: {
      title: "News and Articles",
      description: "Current news and legal articles."
    },
    contact: {
      title: "Contact",
      description: "Contact us for legal consultancy, let us provide you with the best solutions.",
      reachOut: "Get in Touch",
      reachOutDescription: "Contact us for your legal needs. Let us provide you with the most suitable solution.",
      address: "Address",
      email: "Email",
      phone: "Phone",
      followUs: "Follow Us",
      location: "Our Location",
      sendMessage: "Send Message",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Your Message",
        selectSubject: "Please select",
        subjects: {
          generalInfo: "General Information",
          corporateLaw: "Corporate Law",
          contractLaw: "Contract Law",
          commercialLaw: "Commercial Law",
          criminalLaw: "Criminal Law",
          obligationsLaw: "Obligations Law",
          laborLaw: "Labor Law",
          administrativeTaxLaw: "Administrative and Tax Law",
          executionBankruptcyLaw: "Execution and Bankruptcy Law",
          other: "Other"
        },
        privacyPolicy: "I have read and accept the",
        privacyPolicyText: "privacy policy",
        privacyPolicyAccept: "regarding the processing of personal data.",
        send: "Send",
        sending: "Sending...",
        successMessage: "Your message has been sent successfully. We will get back to you as soon as possible.",
        errorMessage: "An error occurred while sending your message. Please try again later."
      },
      privacyModal: {
        title: "Privacy Policy",
        content: {
          dataController: "1. Data Controller Identity:",
          dataControllerText: "As Gedikli Law Office, we attach great importance to the protection of your personal data.",
          processingPurposes: "2. Personal Data Processing Purposes:",
          processingPurposesText: "Your personal data collected through the contact form is processed to evaluate your requests, contact you, and improve our services.",
          personalData: "3. Processed Personal Data:",
          personalDataText: "Data such as your name, surname, email address, phone number, and message content are processed.",
          collectionMethod: "4. Collection Method and Legal Basis:",
          collectionMethodText: "Your data is collected electronically through the contact form, based on the legal basis of legitimate interest.",
          dataTransfer: "5. Data Transfer:",
          dataTransferText: "It can only be transferred in a limited manner for service purposes and legal obligations.",
          rights: "6. Your Rights under GDPR:",
          rightsText: "You have the right to access, correct, delete, restrict processing and object to any information regarding your personal data under Article 11 of the GDPR.",
          contact: "7. Contact:",
          contactText: "You can exercise your rights by contacting info@gediklilaw.com."
        }
      }
    },
    common: {
      language: "Language",
      turkish: "Türkçe",
      english: "English",
      readMore: "Read More",
      learnMore: "Learn More",
      viewAll: "View All",
      backToHome: "Back to Home",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      close: "Close"
    }
  }
};

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

export { type Language, type Translations }; 