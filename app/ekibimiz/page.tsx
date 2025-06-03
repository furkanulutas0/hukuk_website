'use client'
import { useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import TeamMemberCardNoImage from '../components/TeamMemberCardNoImage';
import { motion } from 'framer-motion';
import PageHeaderCard from '../components/PageHeaderCard';
import { teamMembers } from '../data/team';
import LoginForm from '../components/LoginForm';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15
    }
  }
};

export default function Team() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde authentication durumunu kontrol et
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // Find the member with image
  const memberWithImage = teamMembers.find(member => member.imageSrc);
  // Get all members without images
  const membersWithoutImage = teamMembers.filter(member => !member.imageSrc);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gray-900 text-white py-24 px-4"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-[url('/images/hukuk2.png')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
            variants={fadeInUp}
          >
            Ekibimiz
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Uzman kadromuz ile hukuki çözümler üretiyoruz. Gedikli Hukuk'un başarılı ekibiyle tanışın.
          </motion.p>
        </div>
      </motion.div>

      {/* Team Members Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Member with Image - Centered at Top */}
          {memberWithImage && (
            <div className="flex justify-center mb-12">
              <motion.div
                variants={fadeInUp}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TeamMemberCard
                  name={memberWithImage.name}
                  title={memberWithImage.title}
                  imageSrc={memberWithImage.imageSrc}
                  linkedinUrl={memberWithImage.linkedinUrl}
                  email={memberWithImage.email}
                  specialties={memberWithImage.specialties}
                />
              </motion.div>
            </div>
          )}

          {/* Members without Images - Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {membersWithoutImage.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="col-span-1"
              >
                <TeamMemberCardNoImage
                  name={member.name}
                  title={member.title}
                  linkedinUrl={member.linkedinUrl}
                  email={member.email}
                  specialties={member.specialties}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
