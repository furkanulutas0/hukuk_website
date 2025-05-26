'use client'
import TeamMemberCard from '../components/TeamMemberCard';
import TeamMemberCardNoImage from '../components/TeamMemberCardNoImage';
import { motion } from 'framer-motion';
import PageHeaderCard from '../components/PageHeaderCard';
import { teamMembers } from '../data/team';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Team() {
  // Resimli üyeler
  const membersWithImage = teamMembers.filter(member => member.imageSrc);

  // Resimsiz üyeler
  const membersWithoutImage = teamMembers.filter(member => !member.imageSrc);

  return (
    <div className="min-h-screen bg-white">
      <PageHeaderCard 
        title="Ekibimiz"
        description="Uzman kadromuz ile hukuki çözümler üretiyoruz. Gedikli Hukuk'un başarılı ekibiyle tanışın."
      />

      {/* Resimli üyeler - Üstte, ortalanmış ve satır halinde */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20 flex justify-center gap-8 flex-wrap"
      >
        {membersWithImage.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="max-w-xs"
          >
            <TeamMemberCard
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              linkedinUrl={member.linkedinUrl}
              email={member.email}
              specialties={member.specialties}
            />
          </motion.div>
        ))}
      </motion.section>

      {/* Resimsiz üyeler - Altta grid şeklinde */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 md:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {membersWithoutImage.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
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
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
