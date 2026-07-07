'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { Heart, Activity, Zap, AlertCircle, Users, Shield, CheckCircle, ArrowRight, Award, GraduationCap, Calendar, Star } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiac Surgery',
      description: 'Advanced surgical procedures including bypass surgery, valve replacement, and minimally invasive techniques.',
    },
    {
      icon: Activity,
      title: 'Interventional Cardiology',
      description: 'Angioplasty, stenting, and catheter-based treatments for coronary artery disease.',
    },
    {
      icon: Zap,
      title: 'Electrophysiology',
      description: 'Expert treatment for heart rhythm disorders, pacemaker implantation, and ablation procedures.',
    },
    {
      icon: AlertCircle,
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency cardiac care with state-of-the-art facilities and rapid response team.',
    },
    {
      icon: Users,
      title: 'Cardiac Rehabilitation',
      description: 'Comprehensive recovery programs to help patients regain strength and improve heart health.',
    },
    {
      icon: Shield,
      title: 'Preventive Cardiology',
      description: 'Early detection and prevention strategies to maintain optimal cardiovascular health.',
    },
  ];

  const stats = [
    { number: '100,000+', label: 'Successful Procedures' },
    { number: '50+', label: 'Expert Cardiologists' },
    { number: '38', label: 'Years of Excellence' },
    { number: '95%', label: 'Success Rate' },
  ];

  const whyChooseFeatures = [
    {
      title: 'Expert Team',
      description: 'Highly qualified cardiologists, surgeons, and healthcare professionals with international training.',
    },
    {
      title: 'Advanced Technology',
      description: 'Latest cardiac diagnostic and treatment equipment for precise and effective care.',
    },
    {
      title: 'Affordable Care',
      description: 'World-class cardiac care at affordable rates with flexible payment options.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock emergency services and patient support for your peace of mind.',
    },
  ];

  const featuredDoctors = [
    {
      name: 'Prof. Dr. Ahmed Ali Khan',
      specialty: 'Cardiac Surgery',
      experience: '25+ Years',
      qualifications: 'MBBS, FRCS, FCPS',
      rating: 4.9,
      availability: 'Available',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Dr. Fatima Zahra',
      specialty: 'Interventional Cardiology',
      experience: '18 Years',
      qualifications: 'MBBS, FCPS, FSCAI',
      rating: 4.8,
      availability: 'Available',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      name: 'Prof. Dr. Muhammad Rizwan',
      specialty: 'Electrophysiology',
      experience: '22 Years',
      qualifications: 'MBBS, MD, FRCP, FACC',
      rating: 4.9,
      availability: 'Available',
      gradient: 'from-indigo-500 to-indigo-700',
    },
    {
      name: 'Dr. Ayesha Siddiqui',
      specialty: 'Pediatric Cardiology',
      experience: '15 Years',
      qualifications: 'MBBS, FCPS',
      rating: 4.7,
      availability: 'Available',
      gradient: 'from-teal-500 to-teal-700',
    },
  ];

  // Function to get initials
  function getInitials(name: string): string {
    const parts = name.split(' ').filter(word =>
      !['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.'].includes(word)
    );
    if (parts.length >= 2) {
      return parts[0][0] + parts[parts.length - 1][0];
    }
    return parts[0]?.substring(0, 2) || 'DR';
  }

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section style={{ backgroundColor: '#1e3a5f', padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                {/* Separator Line */}
                {index < stats.length - 1 && (
                  <div style={{
                    display: 'none',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1px',
                    height: '80px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }} className="separator-line"></div>
                )}
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
                  {stat.number}
                </div>
                <div style={{ color: '#ffffff', fontSize: '14px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            .separator-line {
              display: block !important;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              Our Services
            </h2>
            <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
              placeholder_text by Pakistan's most trusted heart specialists
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: '1px solid transparent',
                    transition: 'all 0.3s'
                  }}
                  className="service-card"
                >
                  {/* Icon Circle */}
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
                    <IconComponent style={{ width: '32px', height: '32px', color: '#ffffff' }} />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a202c', marginBottom: '12px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#64748b', marginBottom: '16px' }}>{service.description}</p>

                  {/* Learn More Link */}
                  <Link
                    href="/services"
                    style={{
                      color: '#1e3a5f',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .service-card:hover {
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-8px) !important;
            border-color: #1e3a5f !important;
          }
        `}</style>
      </section>

      {/* Featured Doctors Section */}
      <section style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              border: '2px solid #f4a261',
              color: '#f4a261',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '13px',
              marginBottom: '16px',
              fontWeight: 600
            }}>
              🩺 Expert Medical Team
            </div>

            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              Meet Our Expert Cardiologists
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
              Our team of internationally trained specialists brings decades of experience in cardiac care
            </p>
          </motion.div>

          {/* Doctor Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {featuredDoctors.map((doctor, index) => {
              const initials = getInitials(doctor.name);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s'
                  }}
                  className="doctor-card"
                >
                  {/* Doctor Image/Avatar with Gradient Circle */}
                  <div style={{
                    position: 'relative',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%)'
                  }}>
                    <div className={`doctor-avatar bg-gradient-to-br ${doctor.gradient}`} style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#2563eb' : '#7c3aed'} 0%, ${index % 2 === 0 ? '#1e40af' : '#6d28d9'} 100%)`
                    }}>
                      <span style={{ color: '#ffffff', fontSize: '40px', fontWeight: 'bold' }}>
                        {initials}
                      </span>
                    </div>

                    {/* Availability Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ffffff' }}></div>
                      {doctor.availability}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a202c', marginBottom: '8px' }}>
                      {doctor.name}
                    </h3>

                    {/* Specialty Badge */}
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '16px'
                    }}>
                      {doctor.specialty}
                    </div>

                    {/* Info Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                        <GraduationCap style={{ width: '18px', height: '18px', color: '#1e3a5f', flexShrink: 0 }} />
                        <span>{doctor.qualifications}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                        <Calendar style={{ width: '18px', height: '18px', color: '#1e3a5f', flexShrink: 0 }} />
                        <span>{doctor.experience} Experience</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '14px' }}>
                        <Star style={{ width: '18px', height: '18px', color: '#f4a261', flexShrink: 0, fill: '#f4a261' }} />
                        <span style={{ fontWeight: 600, color: '#1a202c' }}>{doctor.rating}</span>
                        <span>Rating</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      style={{
                        width: '100%',
                        backgroundColor: '#1e3a5f',
                        color: '#ffffff',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '14px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#0a1628';
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#1e3a5f';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Doctors Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <Link
              href="/doctors"
              style={{
                backgroundColor: '#f4a261',
                color: '#0a1628',
                padding: '16px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#eab676';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f4a261';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span>View All Doctors</span>
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </Link>
          </motion.div>
        </div>
        <style jsx>{`
          .doctor-card:hover {
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-8px) !important;
            border-color: #1e3a5f !important;
          }
        `}</style>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="why-choose-grid">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '24px',
                lineHeight: 1.2
              }}>
                Why Choose<br />KIHD?
              </h2>
              <p style={{ color: '#93c5fd', fontSize: '18px', lineHeight: 1.7 }}>
                We are committed to providing exceptional cardiac care that combines expertise,
                technology, and compassion to ensure the best outcomes for our patients.
              </p>
            </motion.div>

            {/* Right Side - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {whyChooseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                >
                  {/* Gold Checkmark Circle */}
                  <div style={{
                    backgroundColor: '#f4a261',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle style={{ width: '24px', height: '24px', color: '#ffffff' }} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
                      {feature.title}
                    </h3>
                    <p style={{ color: '#93c5fd' }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <style jsx>{`
          @media (min-width: 1024px) {
            .why-choose-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a2a4a 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1a202c', marginBottom: '24px' }}>
              Ready to Take Care of Your Heart?
            </h2>
            <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '32px' }}>
              Book an appointment with our expert cardiologists today
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link
                href="/contact"
                style={{
                  backgroundColor: '#f4a261',
                  color: '#1a202c',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#eab676';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f4a261';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>Book Appointment</span>
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </Link>
              <a
                href="tel:+92213456789"
                style={{
                  backgroundColor: '#1e3a5f',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0a1628';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e3a5f';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Emergency: 021-34567890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}






