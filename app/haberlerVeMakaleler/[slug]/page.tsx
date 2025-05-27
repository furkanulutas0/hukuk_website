import { notFound } from "next/navigation";

// Aynı içerikleri burada da tanımlayabilirsin ya da dış dosyadan import edebilirsin.
const contents = [
    {
        title: "Mart | Fikri Mülkiyet Bülteni",
        excerpt: "...",
        content: `
      <p>Günümüzde sosyal medya platformlarının etkisiyle, dizi, film ve sinema sektöründe üretilen içerikler yalnızca içerik olarak kendileri değil, aynı zamanda içlerinde yer alan tiplemelerin fiziksel ve davranışsal özelliklerinin sosyal medya akımlarına konu olmasıyla da tanınır ve popüler hale gelmektedir. Peki tipleme nedir? Türk hukuku kapsamında tiplemeler korunabilir mi?

Bu soruların cevabını vermeden önce 5846 sayılı Fikir ve Sanat Eserleri Kanunu (“FSEK”) kapsamında eserin tanımına bakmamız gerekir. Eser, “Sahibinin hususiyetini taşıyan ve ilim ve edebiyat, musiki, güzel sanatlar veya sinema eserleri olarak sayılan her nevi fikir ve sanat mahsulleri” olarak tanımlanmıştır. FSEK güzel sanat eserlerinin kapsamını ise madde 4’te düzenlemiş ve “…8) Her türlü tiplemelerdir” demekle tiplemeleri de güzel sanat eseri olarak eser kapsamına dahil etmiştir. Öğretide tipleme Arslan Kaya tarafından “Tipleme, var olan bir kişinin veya hayali bir karakterin karikatürize edilmiş, estetik değeri haiz, halk arasında tanınmışlık düzeyi yaygınlık kazanmış halidir. Tiplemelere; Avanak Avni, Deli Ziya, Temel Reis, Kötü Kedi Şerafettin, Tweety, Mickey Mouse örnekleri verilebilir.” şeklinde tanımlanmıştır. (Fikir ve Sanat Eserleri Hukuku Dersleri -1, Prof. Dr. Arslan Kaya, Filiz Kitabevi 2024)</p>
     
    `,
        slug: "fikri-mulkiyet",
        date: "Mart 2025"
    },
    {
        title: "Reklam Kurulu Aralık 2024 Kararları",
        excerpt: "...",
        content: `
      <p>Ticaret Bakanlığı bünyesinde faaliyet gösteren Reklam Kurulu (“Kurul”) tarafından 12 Aralık 2024 tarihinde gerçekleştirilen ve ana gündem konusu tüketicileri aldatan, yanıltan, tecrübe ve bilgi eksikliklerini istismar eden reklamlar ile haksız ticari uygulamalar  olan 352 sayılı toplantıda, 6502 sayılı Tüketicinin Korunması Hakkında Kanun (“Kanun”) kapsamında tüketicileri yanıltan veya tüketicinin tecrübe ve bilgi noksanlıklarını istismar eden reklamlar ile haksız ticari uygulamalar yönünden toplam 213 dosya incelenip 196’sı mevzuata aykırı bulunarak haklarında idari para ve/veya anılan reklamları durdurma cezası verilmesine karar verilmiştir.

12 Aralık 2024 tarihli ve 352 sayılı toplantı ile özellikle indirimli satış kampanyaları ve yasadışı bahis reklamları mercek altına alınmış olup Kurul tarafından değerlendirmeye alınan dosyalara çeşitli idari yaptırımlar uygulanmıştır.

Kurul tarafından verilen çeşitli kararlara aşağıda yer verilmiş olup kararların tamamına buradan erişebilirsiniz.</p>
    `,
        slug: "reklam-kararlari",
        date: "Ocak 2024"
    },
    {
        title: "Elektronik Ticarette Aracı Hizmet Sağlayıcılar ve Hizmet Sağlayıcılar Hakkında Güncel Mevzuat Değişikliği",
        excerpt: "...",
        content: `
      <p>8 Mart 2025 tarihli 32385 sayılı Resmi Gazete’de, Elektronik Ticaret Aracı Hizmet Sağlayıcı ve Elektronik Ticaret Hizmet Sağlayıcılar Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (“Yönetmelik Değişikliği”) yayımlanmıştır. Bahse konu Yönetmelik Değişikliği kapsamında; Elektronik Ticaret Hizmet Sağlayıcıların (“ETHS”) ve Elektronik Ticaret Aracı Hizmet Sağlayıcılarının (“ETAHS”) bilgi verme yükümlülüğü, verilen bu bilgilerin ETAHS sağlayıcı tarafından doğrulanması, elektronik ticaret kapsamında haksız ticari uygulamalar, aracılık sözleşmesi, çevrim içi arama motorları ile tanıtım ve erişim imkanları, bağımsız denetim, reklam bütçeleri, denetim ve lisans başvuruları gibi konularda detaylı değişiklikler yapılmıştır. İlgili Yönetmelik Değişikliği 8 Mart 2025 tarihinde yürürlüğe girmiş olup bu yazımızda genel çerçevede yapılan güncellemelerden bahsedilecektir.</p>
    `,
        slug: "e-ticaret",
        date: "Mart 2024"
    },
];

export default function ArticleDetail({ params }: { params: { slug: string } }) {
    const article = contents.find((item) => item.slug === params.slug);

    if (!article) return notFound();

    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">{article.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{article.date}</p>
            <div
                className="prose prose-lg text-gray-800"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </div>
    );
}
