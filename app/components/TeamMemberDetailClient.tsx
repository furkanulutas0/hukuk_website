"use client";

import { motion } from "framer-motion";

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TeamMemberDetailClient({ member }: Props) {
  const hasImage = !!member.imageSrc;

  return (
    <motion.div
      className="min-h-screen bg-white py-12 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.div
        className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div
          className={`flex gap-8 ${
            hasImage ? "flex-col md:flex-row" : "flex-col items-center text-center"
          }`}
        >
          {hasImage && (
            <motion.div
              className="md:w-1/2 flex flex-col items-center"
              variants={fadeInUp}
            >
              <img
                src={member.imageSrc}
                alt={member.name}
                className="h-96 object-cover rounded-lg mb-4"
              />
              <h1 className="text-3xl font-bold text-rose-800 mb-3 text-center">
                {member.name}
              </h1>
              <h2 className="text-xl text-gray-600">{member.title}</h2>
            </motion.div>
          )}

          {!hasImage && (
            <motion.div className="mb-6" variants={fadeInUp}>
              <h1 className="text-3xl font-bold text-rose-800 mb-2">{member.name}</h1>
              <h2 className="text-xl text-gray-600">{member.title}</h2>
            </motion.div>
          )}

          <motion.div
            className={hasImage ? "md:w-1/2 flex flex-col justify-between" : ""}
            variants={fadeInUp}
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
              {member.description || "Açıklama bulunmamaktadır."}
            </p>

            {member.specialties && (
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
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

            <div className="flex gap-4 items-center justify-center">
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
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
