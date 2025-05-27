import { notFound } from "next/navigation";
import HizmetDetayContent from "../../components/HizmetDetayContent";

type Hizmet = {
  title: string;
  description: string;
};

const hizmetDetaylari: Record<string, Hizmet> = {
  sirketlerhukuku: {
    title: "Şirketler Hukuku",
    description:
      "Şirketler Hukuku, şirketlerin kuruluşundan yönetimine, faaliyetlerinden tasfiyesine kadar tüm hukuki süreçleri kapsayan ve ticari hayatın temel taşlarından biri olan hukuk dalıdır. Gedikli Hukuk Bürosu olarak, bu alanda müvekkillerimize kapsamlı ve pratik çözümler sunuyoruz.\n \n Şirket kuruluş işlemleri, ortaklık yapılarının düzenlenmesi, sermaye artırımı, hisse devri ve şirket sözleşmelerinin hazırlanması gibi temel süreçlerde destek veriyoruz. Ayrıca, şirket birleşmeleri, devralmalar ve tür değişiklikleri gibi karmaşık işlemlerde deneyimli ekibimizle yanınızdayız.\n \n Faaliyetlerinizi yasal mevzuata uygun yürütmeniz için güncel hukuki danışmanlık sağlıyor, yönetim ve genel kurul süreçlerinde rehberlik ediyoruz. Gedikli Hukuk Bürosu, şirketlerinizi güçlü ve sağlam temeller üzerine inşa etmeniz için her aşamada yanınızda.",
  },
  sozlesmelerhukuku: {
    title: "Sözleşmeler Hukuku",
    description:
      "Sözleşmeler Hukuku, bireyler ve şirketler arasındaki ilişkilerin temelini oluşturan, tarafların hak ve yükümlülüklerini düzenleyen önemli bir hukuk dalıdır. Gedikli Hukuk Bürosu olarak, sözleşmelerin hazırlanması, müzakere edilmesi ve uygulanması süreçlerinde müvekkillerimize titiz ve öngörülü hukuki destek sağlıyoruz.\n \n Ticari sözleşmeler, hizmet ve tedarik sözleşmeleri, kira sözleşmeleri, gizlilik anlaşmaları ve lisans sözleşmeleri gibi pek çok alanda ihtiyaçlarınıza özel, açık ve uygulanabilir metinler hazırlıyoruz. Taraflar arasında doğabilecek uyuşmazlıkları önlemek adına, riskleri önceden tespit ediyor ve sözleşmeleri buna göre şekillendiriyoruz. \n \n Amacımız, müvekkillerimizin menfaatlerini koruyan, hukuki açıdan sağlam ve uzun vadeli geçerliliğe sahip sözleşmeler üretmek ve bu süreçlerde güvenilir bir danışman olmaktır.",
  },
  ticarethukuku: {
    title: "Ticaret Hukuku",
    description:
      "Ticaret Hukuku, ticari işletmelerin kuruluşundan günlük faaliyetlerine, rekabetten iflasa kadar uzanan geniş bir alanı kapsar. Gedikli Hukuk Bürosu olarak, ticari hayatın dinamiklerine hakim, pratik ve çözüm odaklı hukuki destek sunmaktayız.\n \n Ticaret sicil işlemleri, şirketler arası ilişkiler, cari hesaplar, haksız rekabet, ticari dava süreçleri ve ticari sözleşmeler gibi konularda müvekkillerimizin yanında yer alıyoruz. Her ölçekten işletmenin ticari faaliyetlerini güvence altına alacak stratejiler geliştiriyor, olası hukuki riskleri en aza indiriyoruz.\n \n Hedefimiz, ticaret dünyasının ihtiyaçlarını hukuki zeminde sağlam temellere oturtarak, şirketlerin sürdürülebilir ve güvenli şekilde faaliyet göstermesine katkı sağlamaktır.",
  },
  cezahukuku: {
    title: "Ceza Hukuku",
    description:
      "Ceza Hukuku, bireylerin veya kurumların özgürlüğünü ve itibarını doğrudan etkileyen en hassas hukuk alanlarından biridir. Gedikli Hukuk Bürosu olarak, soruşturma ve kovuşturma süreçlerinin her aşamasında müvekkillerimizin haklarını titizlikle savunuyoruz.\n \n Müvekkillerimizin adil yargılanma hakkını temel alarak; ifade alma, gözaltı, tutuklama, dava hazırlığı ve duruşma süreçlerinde aktif ve etkili bir savunma hizmeti sunuyoruz. Şirket yöneticileri, çalışanlar veya bireyler hakkında yürütülen ekonomik suçlar, dolandırıcılık, zimmet, güveni kötüye kullanma, vergi suçları gibi konularda uzmanlaşmış ekibimizle destek veriyoruz.\n \n Hedefimiz, her koşulda müvekkillerimizin yasal haklarını korumak, doğru stratejilerle etkili çözümler üretmek ve adaletin sağlanmasına katkıda bulunmaktır.",
  },
  borclarhukuku: {
    title: "Borçlar Hukuku",
    description:
      "Borçlar Hukuku, bireyler ve kurumlar arasındaki her türlü alacak, borç, sorumluluk ve tazminat ilişkisini düzenleyen temel hukuk dallarından biridir. Gedikli Hukuk Bürosu olarak, taraflar arasında doğan borç ilişkilerinin hukuka uygun şekilde kurulması, yürütülmesi ve sonlandırılması süreçlerinde müvekkillerimize kapsamlı danışmanlık hizmeti sunuyoruz.\n \n Hizmetlerimiz kapsamında; borç ve alacak uyuşmazlıkları, haksız fiil ve sebepsiz zenginleşmeden doğan talepler, sözleşmeden kaynaklanan yükümlülükler, tazminat davaları ve sorumluluk hukuku gibi konularda müvekkillerimizin haklarını titizlikle koruyoruz. \n\n Yasal riskleri önceden tespit ediyor, olası uyuşmazlıklarda hızlı ve etkili çözümler geliştiriyoruz. Borçlar Hukuku alanındaki bilgi ve deneyimimizle, her dosyada güvenilir ve stratejik bir yol haritası sunmayı amaçlıyoruz.",
  },
  ishukuku: {
    title: "İş Hukuku",
    description:
      "İş Hukuku, işveren ve çalışan arasındaki hak ve yükümlülükleri düzenleyen, çalışma hayatının temelini oluşturan bir hukuk dalıdır. Gedikli Hukuk Bürosu olarak, hem işverenlere hem de çalışanlara yönelik kapsamlı hukuki danışmanlık ve temsil hizmeti sunmaktayız.\n \n Hizmet verdiğimiz başlıca konular arasında; işe alım süreçlerinin hukuka uygun yürütülmesi, iş sözleşmelerinin hazırlanması, fesih işlemleri, tazminat hesaplamaları, fazla mesai, mobbing, iş kazaları ve SGK uyuşmazlıkları yer almaktadır.\n \n İş davalarının titizlikle takibini yapıyor; uyuşmazlıkların önlenmesi için önleyici hukuki destek sağlıyoruz. Güncel mevzuata hakimiyetimiz ve deneyimli kadromuzla, müvekkillerimizin iş ilişkilerinde karşılaştıkları her duruma özel ve etkin çözümler sunuyoruz.",
  },
  idarevergihukuku: {
    title: "İdare ve Vergi Hukuku",
    description:
      "İdare ve Vergi Hukuku, kamu kurumlarıyla bireyler ve şirketler arasındaki ilişkileri düzenleyen, kamu gücünün kullanımına dair önemli kuralları içeren hukuk dallarıdır. Gedikli Hukuk Bürosu olarak, idari işlemlere karşı açılacak davalardan vergi cezalarına itirazlara kadar geniş bir yelpazede danışmanlık ve dava takibi hizmeti sunmaktayız. \n \n Vergi denetimleri, uzlaşma süreçleri, vergi ziyaı cezaları, usulsüzlük işlemleri ve mükellef haklarına dair konularda şirketlerin karşılaşabileceği her türlü uyuşmazlıkta yanında oluyoruz. Aynı zamanda ruhsat iptali, idari para cezası, kamulaştırma, memur disiplin cezaları gibi kamu kaynaklı işlemlerle ilgili süreçleri de titizlikle yönetiyoruz. \n \n Amacımız, müvekkillerimizin kamu idaresiyle olan ilişkilerinde hak kaybı yaşamalarını önlemek ve en etkin hukuki yollarla çıkarlarını korumaktır.",
  },
  icraiflashukuku: {
    title: "İcra ve İflas Hukuku",
    description:
      "İcra ve İflas Hukuku, alacakların tahsilini sağlamak ve borçlularla olan mali ilişkileri hukuki çerçevede düzenlemek amacıyla uygulanan kurallar bütünüdür. Gedikli Hukuk Bürosu olarak, hem alacaklıların haklarını korumak hem de borçlu tarafın yasal sınırlar içinde yükümlülüklerini yerine getirmesine yardımcı olmak için kapsamlı hizmetler sunmaktayız. \n \n Büromuz; ilamsız ve ilamlı icra takipleri, kambiyo senetlerine dayalı işlemler, ihtiyati haciz, haciz ve tahliye işlemleri gibi süreçlerde müvekkillerine hızlı ve etkin çözümler sağlar. Ayrıca, iflas davaları, konkordato başvuruları ve tasfiye süreçleri gibi daha karmaşık mali uyuşmazlıklarda da profesyonel destek sunmaktayız.\n \n Amacımız, müvekkillerimizin alacaklarını en kısa sürede ve en az maliyetle tahsil edebilmesi ve karşılaştıkları hukuki risklerin önceden tespit edilerek önlenmesidir.",
  },
};
interface PageProps {
    params: Promise<{ slug: string }>;
  }
  
  export default async function HizmetDetayPage({ params }: PageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug.toLowerCase();
  
    const hizmet = hizmetDetaylari[slug];
  
    if (!hizmet) {
      notFound();
    }
  
    return (
      <HizmetDetayContent
        title={hizmet.title}
        description={hizmet.description}
      />
    );
  }