// components/TeamMemberCardNoImage.tsx
"use client";

import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  name: string;
  title: string;
  linkedinUrl?: string;
  email?: string;
  specialties?: string[];
}

export default function TeamMemberCardNoImage({
  name,
  title,
  linkedinUrl,
  email,
  specialties,
}: Props) {
  const formattedName = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl min-h-52 shadow-md overflow-hidden border border-gray-100 hover:shadow-lg"
    >
      <div className="p-6">
        <Link
          href={`/ekibimiz/${formattedName}`}
          className="block mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-rose-800 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600">{title}</p>
        </Link>

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

        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
          {email && (
            <a
              href={`mailto:${email}`}
                className="text-gray-500 hover:text-rose-800 transition-colors p-2 -ml-2"
                onClick={(e) => e.stopPropagation()}
              >
                <FaEnvelope className="w-4 h-4" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
                className="text-gray-500 hover:text-rose-800 transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
            >
                <FaLinkedin className="w-4 h-4" />
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
