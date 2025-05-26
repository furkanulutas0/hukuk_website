import { teamMembers } from "@/app/data/team";
import { notFound } from "next/navigation";

interface Params {
  name: string;
}

export default async function TeamMemberDetail({ params }: { params: Params }) {
  const { name } = await params;

  const decodedName = decodeURIComponent(name).toLowerCase();

  const member = teamMembers.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, "-") === decodedName
  );

  if (!member) {
    notFound(); 
  }

  return (
<div className="min-h-screen bg-white py-12 px-4 md:px-8">
  <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow">

    
    {/* İçerik iki kolon halinde */}
    <div className="flex flex-col md:flex-row gap-8">
      
      {/* Sol taraf: fotoğraf + title */}
      <div className="md:w-1/2 flex flex-col items-center">
        <img
          src={member.imageSrc}
          alt={member.name}
          className="h-96 object-cover rounded-lg mb-4"
        />
            <h1 className="text-3xl font-bold text-rose-800 mb-3 text-center">{member.name}</h1>
        <h2 className="text-xl text-gray-600">{member.title}</h2>
      </div>
      
      {/* Sağ taraf: açıklama + etiketler + iletişim */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
          {member.description || "Açıklama bulunmamaktadır."}
        </p>

        {member.specialties && (
          <div className="flex flex-wrap gap-2 mb-6">
            {member.specialties.map((spec, index) => (
              <span
                key={index}
                className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 items-center">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-sm text-gray-700 hover:text-rose-800 underline"
            >
              📧 {member.email}
            </a>
          )}
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:text-rose-800 underline"
            >
              🔗 LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
