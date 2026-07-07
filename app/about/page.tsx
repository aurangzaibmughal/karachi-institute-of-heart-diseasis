'use client';

import { motion } from 'framer-motion';
import { Award, Target, Eye, Heart, Users, Lightbulb, Shield, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '1985', title: 'Foundation', desc: 'KIHD established with 50-bed capacity' },
    { year: '1992', title: 'First Open Heart Surgery', desc: 'Performed first successful bypass surgery' },
    { year: '2005', title: 'Expansion & Modernization', desc: 'Expanded to 200 beds with state-of-the-art facilities' },
    { year: '2023', title: '100,000+ Procedures', desc: 'Crossed milestone of successful cardiac procedures' },
  ];

  const values = [
    { icon: Heart, title: 'Compassion', description: 'We treat every patient with empathy, kindness, and respect, understanding the emotional and physical challenges they face.' },
    { icon: Award, title: 'Excellence', description: 'We pursue the highest standards in medical care, continuously improving our skills and knowledge to serve our patients better.' },
    { icon: Shield, title: 'Integrity', description: 'We maintain the highest ethical standards in all our interactions, ensuring transparency and honesty in patient care.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new technologies and methodologies to provide cutting-edge cardiac care and improve patient outcomes.' },
    { icon: Users, title: 'Teamwork', description: 'We work collaboratively across disciplines, recognizing that the best outcomes come from coordinated, team-based care.' },
    { icon: TrendingUp, title: 'Accessibility', description: 'We believe quality cardiac care should be accessible to all, regardless of economic status or background.' },
  ];

  const stats = [
    { number: '38+', label: 'Years Experience', icon: Award },
    { number: '100K+', label: 'Procedures Done', icon: Heart },
    { number: '50+', label: 'Expert Doctors', icon: Users },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
  ];

  return (
    <main style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 100%)' }}>'
      {/* Header Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              About KIHD
            </h1>
            <p style={{ fontSize: '20px', color: '#93c5fd' }}>
              Leading the way in cardiac care for over three decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: '#1e3a5f', padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <IconComponent style={{ width: '48px', height: '48px', color: '#f4a261', margin: '0 auto 16px' }} />
                  <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
                    {stat.number}
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '14px' }}>{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 100%)' }}>'
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '24px' }}>
                Our History
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748b', lineHeight: 1.7 }}>
                <p>
                  Founded in 1985, the Karachi Institute of Heart Diseases (KIHD) was established with
                  a vision to provide world-class cardiac care to the people of Pakistan. What started
                  as a small facility with limited resources has grown into one of South Asia's premier
                  cardiac centers.
                </p>
                <p>
                  Over the past 38 years, KIHD has been at the forefront of cardiac medicine in Pakistan,
                  pioneering numerous procedures and establishing new standards of care. Our journey has
                  been marked by continuous innovation, unwavering commitment to patient care, and a
                  dedication to making quality healthcare accessible to all.
                </p>
                <p>
                  Today, KIHD stands as a beacon of hope for cardiac patients across Pakistan and beyond,
                  having successfully performed over 100,000 cardiac procedures with a success rate that
                  rivals international standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)',
                padding: '32px',
                borderRadius: '16px',
                color: '#ffffff'
              }}
            >
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Milestones</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {milestones.map((milestone, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      backgroundColor: '#f4a261',
                      color: '#0a1628',
                      fontWeight: 'bold',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      flexShrink: 0
                    }}>
                      {milestone.year}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, marginBottom: '4px' }}>{milestone.title}</p>
                      <p style={{ fontSize: '14px', color: '#93c5fd' }}>{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style jsx>{`
          @media (min-width: 1024px) {
            .about-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Mission & Vision */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s'
              }}
              className="mission-card"
            >
              <div style={{
                backgroundColor: '#1e3a5f',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Target style={{ width: '32px', height: '32px', color: '#ffffff' }} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '16px' }}>
                Our Mission
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                To provide world-class cardiac care that is accessible, affordable, and compassionate.
                We strive to combine cutting-edge medical technology with the highest standards of
                clinical excellence, while treating every patient with dignity and respect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                backgroundColor: '#ffffff',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s'
              }}
              className="mission-card"
            >
              <div style={{
                backgroundColor: '#1e3a5f',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Eye style={{ width: '32px', height: '32px', color: '#ffffff' }} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '16px' }}>
                Our Vision
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.7 }}>
                To be recognized as the leading cardiac care institution in South Asia, setting
                benchmarks in clinical excellence, research, and innovation. We envision a future
                where every cardiac patient in Pakistan has access to world-class treatment.
              </p>
            </motion.div>
          </div>
        </div>
        <style jsx>{`
          .mission-card:hover {
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-8px) !important;
          }
        `}</style>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 100%)' }}>'
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '16px' }}>
              Our Core Values
            </h2>
            <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)',
                    color: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    transition: 'all 0.3s'
                  }}
                  className="value-card"
                >
                  <div style={{
                    backgroundColor: '#f4a261',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <IconComponent style={{ width: '28px', height: '28px', color: '#ffffff' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#93c5fd', lineHeight: 1.6 }}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .value-card:hover {
            transform: translateY(-8px) !important;
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.3) !important;
          }
        `}</style>
      </section>
    </main>
  );
}


