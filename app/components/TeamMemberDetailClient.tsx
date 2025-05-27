"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  imageSrc?: string;
  description?: string;
  specialties?: string[];
  email?: string;
  linkedinUrl?: string;
}

interface Props {
  member: TeamMember;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TeamMemberDetailClient({ member }: Props) {
  const hasImage = !!member.imageSrc;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-rose-800 mx-auto mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {member.name}
          </h1>
          <h2 className="text-xl text-rose-800 font-medium">{member.title}</h2>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`flex flex-col ${hasImage ? 'lg:flex-row' : ''} items-start`}>
            {/* Image Section */}
            {hasImage && (
              <motion.div
                className="w-full lg:w-2/5 relative"
                variants={fadeInUp}
              >
                <div className="relative h-[400px] lg:h-full w-full">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            )}

            {/* Content Section */}
            <motion.div
              className={`${hasImage ? 'lg:w-3/5' : 'w-full'} p-8 lg:p-12`}
              variants={fadeInUp}
            >
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {member.description || "Açıklama bulunmamaktadır."}
                </p>
              </div>

              {/* Specialties */}
              {member.specialties && member.specialties.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Uzmanlık Alanları
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec, index) => (
                      <span
                        key={index}
                        className="bg-rose-50 text-rose-800 px-4 py-1.5 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  İletişim
                </h3>
                <div className="flex gap-4 items-center">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-rose-800 transition-colors"
                    >
                      <FaEnvelope className="w-5 h-5" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-rose-800 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn Profili</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
