"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
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

export default function HizmetDetayContent({ title, description }: Props) {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-6 lg:py-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 md:p-10 lg:p-14 rounded-xl shadow-lg border border-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Decorative Element */}
          <div className="w-16 h-0.5 bg-rose-800 rounded mb-6" />
          
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-rose-800 tracking-tight"
            variants={fadeInUp}
          >
            {title}
          </motion.h1>

          {/* Decorative Line */}
          <div className="w-12 h-0.5 bg-gray-200 my-4" />
          
          <motion.div
            className="prose max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="mt-10 p-5 bg-gray-50 rounded-lg w-full max-w-xl"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Daha Fazla Bilgi İçin
            </h3>
            <p className="text-sm text-gray-600 mb-5">
              Bu alanda daha detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>
            <button className="bg-rose-800 text-white px-6 py-2.5 rounded-lg hover:bg-rose-900 transition-colors duration-300 text-sm font-medium">
              <Link href="/iletisim">İletişime Geç</Link>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
