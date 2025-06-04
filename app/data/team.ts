export interface TeamMember {
  id: number;
  name: string;
  title: {
    tr: string;
    en: string;
  };
  imageSrc: string;
  linkedinUrl: string;
  description?: {
    tr: string;
    en: string;
  }; // Opsiyonel alan - kişi hakkında kısa bilgi
  phoneNumber?: string; // Opsiyonel alan - iletişim bilgisi
  email?: string; // Opsiyonel alan - iletişim bilgisi
  specialties?: {
    tr: string[];
    en: string[];
  }; // Opsiyonel alan - uzmanlık alanları
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "AV.ÖMER FARUK GEDİKLİ",
    title: {
      tr: "Kurucu Avukat",
      en: "Founding Lawyer"
    },
    imageSrc: "/images/team/kurucu-avukat.png",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: {
      tr: `1989 yılında Zonguldak'ta doğan Gedikli, aslen Trabzonludur. Lise eğitimimi TED Zonguldak Koleji'nde tamamlayan Gedikli, 2008 yılında Doğuş Üniversitesi Hukuk Fakültesi'nde eğitim görmeye başlamış, 2013 yılında Doğuş Üniversitesi Hukuk Fakültesi'nden mezun olmuş ardından yasal stajını tamamladıktan sonra dil eğitimi için Londra'da bulunmuştur. 2015 yılında Batu Hukuk bünyesine katılan Gedikli, İdare Hukuku, Vergi Hukuku, Ticaret Hukuku, Ceza Hukuku ve İcra İflas Hukuku alanlarında uzmanlaşarak buradaki çalışmasını 2024 yılı Ekim ayına kadar sürdürmüştür. Gedikli 2024 Kasım ayında profesyonel çalışma alanlarını belirleyerek Gedikli Hukuk Bürosunu kurarak avukatlık mesleğini sürdürmektedir.`,
      en: `Born in Zonguldak in 1989, Gedikli is originally from Trabzon. Having completed his high school education at TED Zonguldak College, Gedikli started his education at Doğuş University Faculty of Law in 2008, graduated from Doğuş University Faculty of Law in 2013, and after completing his legal internship, he went to London for language education. Joining Batu Law in 2015, Gedikli specialized in Administrative Law, Tax Law, Commercial Law, Criminal Law and Execution Bankruptcy Law and continued his work there until October 2024. Gedikli continues his legal profession by establishing Gedikli Law Office in November 2024, determining his professional working areas.`
    },
    phoneNumber: "+90544 779 76 17",
    email: "omerfaruk@gediklilaw.com",
    specialties: {
      tr: [
        "İdare Hukuku",
        "Vergi Hukuku",
        "Ticaret Hukuku",
        "Ceza Hukuku",
        "İcra ve İflas Hukuku",
      ],
      en: [
        "Administrative Law",
        "Tax Law",
        "Commercial Law",
        "Criminal Law",
        "Execution and Bankruptcy Law",
      ]
    },
  },
  {
    id: 2,
    name: "AV.HİLAL KARAGÖK",
    title: {
      tr: "Uzman Avukat",
      en: "Expert Lawyer"
    },
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: {
      tr: `1996 yılında Almanya'da doğan Hilal Karagök, ilk ve orta öğrenimi burada tamamladı. Lise eğitimini ise Konya Mehmet Münevver Kurban Anadolu Lisesi'nde tamamladı. Ankara Üniversitesi Hukuk Fakültesi'nde 2019 Eylül ayında mezun olan Karagök yasal stajını 2020 Aralık ayında tamamlamıştır. 2021 Mart ayında avukatlık ruhsatını alarak Batu Hukuk bünyesine katılan Karagök, Şirketler Hukuku, Borçlar Hukuku, Sözleşmeler Hukuku, Ticaret Hukuku, İcra ve İflas Hukuku alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını 2024 Ekim ayına kadar sürdürmüş, Kasım 2024 tarihinde uzmanlık alanlarında faaliyetlerini sürdürmek üzere Gedikli Hukuk Bürosu bünyesine dahil olmuştur.`,
      en: `Born in Germany in 1996, Hilal Karagök completed her primary and secondary education there. She completed her high school education at Konya Mehmet Münevver Kurban Anatolian High School. Karagök, who graduated from Ankara University Faculty of Law in September 2019, completed her legal internship in December 2020. Joining Batu Law in March 2021 after obtaining her law license, Karagök continued her work in providing legal consultancy in Corporate Law, Obligations Law, Contract Law, Commercial Law, Execution and Bankruptcy Law until October 2024, and joined Gedikli Law Office in November 2024 to continue her activities in her areas of expertise.`
    },
    phoneNumber: "+90 531 223 53 71",
    email: "hilal@gediklilaw.com",
    specialties: {
      tr: [
        "Şirketler Hukuku",
        "Borçlar Hukuku",
        "Sözleşmeler Hukuku",
        "Ticaret Hukuku",
        "İcra ve İflas Hukuku",
      ],
      en: [
        "Corporate Law",
        "Obligations Law",
        "Contract Law",
        "Commercial Law",
        "Execution and Bankruptcy Law",
      ]
    },
  },
  {
    id: 3,
    name: "AV.ELİF SOSA",
    title: {
      tr: "Uzman Avukat",
      en: "Expert Lawyer"
    },
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: {
      tr: `1997 yılında İstanbul'da doğan Elif Sosa, ilk ve orta öğrenimi burada tamamladı. Lise eğitimini ise Behçet Canbaz Anadolu Lisesi'nde tamamladı. Fatih Sultan Mehmet Vakıf Üniversitesi Hukuk Fakültesi'nden 2020 Eylül ayında derece ile mezun oldu ve yasal stajını 2021 Eylül ayında tamamladı. 2024 yılında Marmara Üniversitesi Özel Hukuk alanında Yüksek Lisans eğitimine başladı. 2021 yılında avukatlık ruhsatını alan Sosa, 2021 yılı Ekim ayında katıldığı Batu Hukuk Bünyesinde, Şirketler Hukuku, İş Hukuku, Tüketici Hukuku, Ticaret Hukuku ve İcra İflas Hukuku alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını sürdürmüştür. 2024 Kasım ayında uzmanlık alanlarında faaliyetlerini sürdürmek üzere Gedikli Hukuk Bürosu bünyesine dahil olmuştur.`,
      en: `Born in Istanbul in 1997, Elif Sosa completed her primary and secondary education there. She completed her high school education at Behçet Canbaz Anatolian High School. She graduated with honors from Fatih Sultan Mehmet Foundation University Faculty of Law in September 2020 and completed her legal internship in September 2021. In 2024, she started her Master's degree in Private Law at Marmara University. Sosa, who obtained her law license in 2021, continued her work in providing legal consultancy in Corporate Law, Labor Law, Consumer Law, Commercial Law and Execution Bankruptcy Law at Batu Law, which she joined in October 2021. She joined Gedikli Law Office in November 2024 to continue her activities in her areas of expertise.`
    },
    phoneNumber: "+90 534 916 54 94",
    email: "elif@gediklilaw.com",
    specialties: {
      tr: [
        "Şirketler Hukuku",
        "İş Hukuku",
        "Tüketici Hukuku",
        "Ticaret Hukuku",
        "İcra ve İflas Hukuku",
      ],
      en: [
        "Corporate Law",
        "Labor Law",
        "Consumer Law",
        "Commercial Law",
        "Execution and Bankruptcy Law",
      ]
    },
  },
  {
    id: 4,
    name: "AV.ALEYNA BAYER",
    title: {
      tr: "Avukat",
      en: "Lawyer"
    },
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: {
      tr: `1999 yılında İstanbul'da doğan Aleyna Bayer, lise eğitimini Üsküdar Ahmet Keleşoğlu Anadolu Lisesi'nde tamamladı. 2022 yılında Marmara Üniversitesi Hukuk Fakültesi'nden onur derecesi ile mezun olmuştur ve yasal stajını 2023 yılında tamamlamıştır. 2023 yılında avukatlık ruhsatını alan Bayer; 2024 Kasım ayında Gedikli Hukuk Bürosu bünyesinde İdare Hukuku, Vergi Hukuku ve Özel Hukuk alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını sürdürmektedir. Aynı zamanda Türk-Alman Üniversitesi'nde Özel Hukuk Tezli Yüksek Lisans Programı'na katılmaya hak kazanan Bayer; yüksek lisans eğitimine devam etmektedir.`,
      en: `Born in Istanbul in 1999, Aleyna Bayer completed her high school education at Üsküdar Ahmet Keleşoğlu Anatolian High School. She graduated with honors from Marmara University Faculty of Law in 2022 and completed her legal internship in 2023. Bayer, who obtained her law license in 2023, continues her work in providing legal consultancy in Administrative Law, Tax Law and Private Law at Gedikli Law Office as of November 2024. Bayer, who has also earned the right to participate in the Private Law Master's Program with Thesis at Turkish-German University, continues her master's education.`
    },
    phoneNumber: "+90 531 747 26 61",
    email: "aleynabayer@gediklilaw.com",
    specialties: {
      tr: [
        "İdare Hukuku",
        "Vergi Hukuku",
        "Özel Hukuk",
      ],
      en: [
        "Administrative Law",
        "Tax Law",
        "Private Law",
      ]
    },
  },
  {
    id: 5,
    name: "AV.MUSTAFA ZAHİD KAYA",
    title: {
      tr: "Avukat",
      en: "Lawyer"
    },
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: {
      tr: `1998 yılında İstanbul'da doğan Mustafa Zahid Kaya, ilk, orta ve lise eğitimini yine İstanbulda tamamladı. İstanbul Kültür Üniversitesinden 2021 yılında mezun oldu ve yasal stajını 2022 yılının Eylül ayında tamamladı. Akabinde avukatlık ruhsatını alarak meslek hayatına başlayan Kaya, 2023 Mart ayında katıldığı Batu Hukuk bünyesinde, İş ve Sosyal Güvenlik Hukuku, Sözleşmeler Hukuku, İcra ve İflas Hukuku alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını 2024 Ekim ayına kadar sürdürmüştür. 2024 Aralık ayı itibari ile tecrübe edindiği alanlardaki faaliyetlerini sürdürmek üzere Gedikli Hukuk bünyesine katılmıştır.`,
      en: `Born in Istanbul in 1998, Mustafa Zahid Kaya completed his primary, secondary and high school education in Istanbul. He graduated from Istanbul Kültür University in 2021 and completed his legal internship in September 2022. Subsequently, Kaya, who started his professional life by obtaining his law license, continued his work in providing legal consultancy in Labor and Social Security Law, Contract Law, Execution and Bankruptcy Law at Batu Law, which he joined in March 2023, until October 2024. As of December 2024, he joined Gedikli Law to continue his activities in the areas where he gained experience.`
    },
    phoneNumber: "+90 534 930 98 53",
    email: "mustafakaya@gediklilaw.com",
    specialties: {
      tr: [
        "İş ve Sosyal Güvenlik Hukuku",
        "Sözleşmeler Hukuku",
        "İcra ve İflas Hukuku",
      ],
      en: [
        "Labor and Social Security Law",
        "Contract Law",
        "Execution and Bankruptcy Law",
      ]
    },
  },

  {
    id: 6,
    name: "MERVE KISIR",
    title: {
      tr: "Takip Elemanı",
      en: "Follow-up Specialist"
    },
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: {
      tr: `2000 yılında Rize'de doğan Merve Kısır, ilk , orta ve Lise öğrenimi burada tamamladı. İstanbul Fatih Sultan Mehmet Vakıf Üniversitesi Adalet Meslek Yüksek okulundan 2024 Eylül ayında mezun oldu ve yasal stajını 2024 Eylül ayında tamamladı. 2024 Kasım ayında katıldığı Gedikli Hukuk Bünyesinde icra departmanında takip elemanı olarak çalışmaktadır.`,
      en: `Born in Rize in 2000, Merve Kısır completed her primary, secondary and high school education there. She graduated from Istanbul Fatih Sultan Mehmet Foundation University Justice Vocational School in September 2024 and completed her legal internship in September 2024. She works as a follow-up specialist in the execution department at Gedikli Law, which she joined in November 2024.`
    },
    phoneNumber: "+90 535 583 25 14",
    email: "mervekisir@gediklilaw.com",
  },

];

// Helper function to get localized team data
export const getLocalizedTeamMember = (member: TeamMember, language: 'tr' | 'en') => {
  return {
    ...member,
    title: member.title[language],
    description: member.description?.[language],
    specialties: member.specialties?.[language]
  };
};

export const getLocalizedTeamMembers = (language: 'tr' | 'en') => {
  return teamMembers.map(member => getLocalizedTeamMember(member, language));
};
