// TeamMemberCard.tsx
"use client";

import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  name: string;
  title: string;
  imageSrc?: string;
  linkedinUrl?: string;
  email?: string;
  specialties?: string[];
}

export default function TeamMemberCard({
  name,
  title,
  imageSrc,
  linkedinUrl,
  email,
  specialties,
}: Props) {
  const formattedName = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden h-[420px] flex flex-col"
    >
      <div className="relative h-[280px] overflow-hidden">
        <Link href={`/ekibimiz/${formattedName}`} className="block">
          {imageSrc && (
            <>
              <img
        src={imageSrc}
        alt={name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-200 text-sm">{title}</p>
          </div>
            </Link>
      </div>

      <div className="p-6 bg-white flex-1 flex flex-col justify-between">
        {specialties && specialties.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {specialties.slice(0, 2).map((specialty, index) => (
                <span
                  key={index}
                  className="bg-rose-50 text-rose-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {specialty}
                </span>
              ))}
              {specialties.length > 2 && (
                <span className="text-gray-500 text-xs">+{specialties.length - 2} daha</span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-gray-600 hover:text-rose-800 transition-colors p-2 -ml-2"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-rose-800 transition-colors p-2"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
          </div>
          <Link
            href={`/ekibimiz/${formattedName}`}
            className="ml-auto text-sm font-medium text-rose-800 hover:text-rose-900 transition-colors"
          >
            Detaylı Bilgi
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
