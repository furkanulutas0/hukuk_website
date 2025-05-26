// TeamMemberCard.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl?: string;
  description?: string;
  email?: string;
  specialties?: string[];
}

export default function TeamMemberCard({
  name,
  title,
  imageSrc,
  linkedinUrl,
  description,
  email,
  specialties,
}: TeamMemberProps) {
  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg overflow-hidden shadow-md text-center hover:shadow-lg"
    >
      {/* Sadece görsel ve başlığı Link içine alıyoruz */}
      <Link href={`/ekibimiz/${slug}`} className="block">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={400}
            className="object-cover w-full h-[400px]"
          />
        </motion.div>
        <div className="p-4">
          <h3 className="text-lg text-rose-800 font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
        </div>
      </Link>

      <div className="px-4 -mt-2">
        {description && (
          <p className="text-sm text-gray-600 mb-2">{description}</p>
        )}

        {specialties && specialties.length > 0 && (
          <div className="mb-2">
            <div className="flex flex-wrap gap-1 justify-center">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="text-xs bg-rose-50 text-rose-800 px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center pt-4 pb-4 justify-center gap-2 mt-2">
          {email && (
            <a
              href={`mailto:${email}`}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#9B1B30] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
