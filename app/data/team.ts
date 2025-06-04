export interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl: string;
  description?: string; // Opsiyonel alan - kişi hakkında kısa bilgi
  phoneNumber?: string; // Opsiyonel alan - iletişim bilgisi
  email?: string; // Opsiyonel alan - iletişim bilgisi
  specialties?: string[]; // Opsiyonel alan - uzmanlık alanları
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "AV. ÖMER FARUK GEDİKLİ",
    title: "Kurucu Avukat",
    imageSrc: "/images/team/kurucu-avukat.png",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: `1989 yılında Zonguldak’ta doğan Gedikli, aslen Trabzonludur. Lise eğitimimi TED Zonguldak Koleji’nde tamamlayan Gedikli, 2008 yılında Doğuş Üniversitesi Hukuk Fakültesi'nde eğitim görmeye başlamış, 2013 yılında Doğuş Üniversitesi Hukuk Fakültesi’nden mezun olmuş ardından yasal stajını tamamladıktan sonra dil eğitimi için Londra’da bulunmuştur. 2015 yılında Batu Hukuk bünyesine katılan Gedikli, İdare Hukuku, Vergi Hukuku, Ticaret Hukuku, Ceza Hukuku ve İcra İflas Hukuku alanlarında uzmanlaşarak buradaki çalışmasını 2024 yılı Ekim ayına kadar sürdürmüştür. Gedikli 2024 Kasım ayında profesyonel çalışma alanlarını belirleyerek Gedikli Hukuk Bürosunu kurarak avukatlık mesleğini sürdürmektedir.`,
    phoneNumber: "+90544 779 76 17",
    email: "omerfaruk@gediklilaw.com",
    specialties: [
      "İdare Hukuku",
      "Vergi Hukuku",
      "Ticaret Hukuku",
      "Ceza Hukuku",
      "İcra ve İflas Hukuku",
    ],
  },
  {
    id: 2,
    name: "AV. HİLAL KARAGÖK",
    title: "Uzman Avukat",
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: `1996 yılında Almanya'da doğan Hilal Karagök, ilk ve orta öğrenimi burada tamamladı. Lise eğitimini ise Konya Mehmet Münevver Kurban Anadolu Lisesi'nde tamamladı. Ankara Üniversitesi Hukuk Fakültesi'nde 2019 Eylül ayında mezun olan Karagök yasal stajını 2020 Aralık ayında tamamlamıştır. 2021 Mart ayında avukatlık ruhsatını alarak Batu Hukuk bünyesine katılan Karagök, Şirketler Hukuku, Borçlar Hukuku, Sözleşmeler Hukuku, Ticaret Hukuku, İcra ve İflas Hukuku alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını 2024 Ekim ayına kadar sürdürmüş, Kasım 2024 tarihinde uzmanlık alanlarında faaliyetlerini sürdürmek üzere Gedikli Hukuk Bürosu bünyesine dahil olmuştur.`,
    phoneNumber: "+90 531 223 53 71",
    email: "hilal@gediklilaw.com",
    specialties: [
      "Şirketler Hukuku",
      "Borçlar Hukuku",
      "Sözleşmeler Hukuku",
      "Ticaret Hukuku",
      "İcra ve İflas Hukuku",
    ],
  },
  {
    id: 3,
    name: "AV. ELİF SOSA",
    title: "Uzman Avukat",
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: `1997 yılında İstanbul'da doğan Elif Sosa, ilk ve orta öğrenimi burada tamamladı. Lise eğitimini ise Behçet Canbaz Anadolu Lisesi'nde tamamladı. Fatih Sultan Mehmet Vakıf Üniversitesi Hukuk Fakültesi'nden 2020 Eylül ayında derece ile mezun oldu ve yasal stajını 2021 Eylül ayında tamamladı. 2024 yılında Marmara Üniversitesi Özel Hukuk alanında Yüksek Lisans eğitimine başladı. 2021 yılında avukatlık ruhsatını alan Sosa, 2021 yılı Ekim ayında katıldığı Batu Hukuk Bünyesinde, Şirketler Hukuku, İş Hukuku, Tüketici Hukuku, Ticaret Hukuku ve İcra İflas Hukuku alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını sürdürmüştür. 2024 Kasım ayında uzmanlık alanlarında faaliyetlerini sürdürmek üzere Gedikli Hukuk Bürosu bünyesine dahil olmuştur.`,
    phoneNumber: "+90 534 916 54 94",
    email: "elif@gediklilaw.com",
    specialties: [
      "Şirketler Hukuku",
      "İş Hukuku",
      "Tüketici Hukuku",
      "Ticaret Hukuku",
      "İcra ve İflas Hukuku",
    ],
  },
  {
    id: 4,
    name: "AV. ALEYNA BAYER",
    title: "Avukat",
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: `1999 yılında İstanbul’da doğan Aleyna Bayer, lise eğitimini Üsküdar Ahmet Keleşoğlu Anadolu Lisesi’nde tamamladı. 2022 yılında Marmara Üniversitesi Hukuk Fakültesi'nden onur derecesi ile mezun olmuştur ve yasal stajını 2023 yılında tamamlamıştır. 2023 yılında avukatlık ruhsatını alan Bayer; 2024 Kasım ayında Gedikli Hukuk Bürosu bünyesinde İdare Hukuku, Vergi Hukuku ve Özel Hukuk alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını sürdürmektedir. Aynı zamanda Türk-Alman Üniversitesi'nde Özel Hukuk Tezli Yüksek Lisans Programı'na katılmaya hak kazanan Bayer; yüksek lisans eğitimine devam etmektedir.`,
    phoneNumber: "+90 531 747 26 61",
    email: "aleynabayer@gediklilaw.com",
    specialties: [
      "İdare Hukuku",
      "Vergi Hukuku",
      "Özel Hukuk",
    ],
  },
  {
    id: 5,
    name: "AV. MUSTAFA ZAHİD KAYA",
    title: "Avukat",
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: `1998 yılında İstanbul’da doğan Mustafa Zahid Kaya, ilk, orta ve lise eğitimini yine İstanbulda tamamladı. İstanbul Kültür Üniversitesinden 2021 yılında mezun oldu ve yasal stajını 2022 yılının Eylül ayında tamamladı. Akabinde avukatlık ruhsatını alarak meslek hayatına başlayan Kaya, 2023 Mart ayında katıldığı Batu Hukuk bünyesinde, İş ve Sosyal Güvenlik Hukuku, Sözleşmeler Hukuku, İcra ve İflas Hukuku alanlarında hukuki danışmanlık verilmesi yönünde çalışmalarını 2024 Ekim ayına kadar sürdürmüştür. 2024 Aralık ayı itibari ile tecrübe edindiği alanlardaki faaliyetlerini sürdürmek üzere Gedikli Hukuk bünyesine katılmıştır.`,
    phoneNumber: "+90 534 930 98 53",
    email: "mustafakaya@gediklilaw.com",
    specialties: [
      "İcra ve İflas Hukuku",
      "Sözleşmeler Hukuku",
      "İş ve Sosyal Güvenlik Hukuku",
    ],
  },

  {
    id: 6,
    name: "MERVE KISIR",
    title: "Takip Elemanı",
    imageSrc: "",
    linkedinUrl: "https://linkedin.com/in/ahmetgedikli",
    description: `2000 yılında Rize’de doğan Merve Kısır, ilk , orta ve Lise öğrenimi burada tamamladı. İstanbul Fatih Sultan Mehmet Vakıf Üniversitesi Adalet Meslek Yüksek okulundan 2024 Eylül ayında mezun oldu ve yasal stajını 2024 Eylül ayında tamamladı. 2024 Kasım ayında katıldığı Gedikli Hukuk Bünyesinde icra departmanında takip elemanı olarak çalışmaktadır.`,
    phoneNumber: "+90 535 583 25 14",
    email: "mervekisir@gediklilaw.com",
  },

];
