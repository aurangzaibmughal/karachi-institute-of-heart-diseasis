'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, GraduationCap, Calendar, Star, Heart, CheckCircle } from 'lucide-react';

export default function DoctorsPage() {
  const doctors = [
    {
      name: 'Prof. Dr. Ahmed Ali Khan',
      specialty: 'Cardiac Surgery',
      qualifications: 'MBBS, FRCS, FCPS (Cardiac Surgery)',
      experience: '25+ years',
      rating: 4.9,
      availability: 'Available',
      description: 'Leading cardiac surgeon specializing in complex open heart surgeries and minimally invasive procedures.',
      gradient: 'from-blue-500 to-blue-700',
      totalSurgeries: '5000+',
    },
    {
      name: 'Dr. Fatima Zahra',
      specialty: 'Interventional Cardiology',
      qualifications: 'MBBS, FCPS (Cardiology), FSCAI',
      experience: '18 years',
      rating: 4.8,
      availability: 'Available',
      description: 'Expert in cardiac catheterization and advanced coronary interventions with international training.',
      gradient: 'from-purple-500 to-purple-700',
      totalSurgeries: '3000+',
    },
    {
      name: 'Prof. Dr. Muhammad Rizwan',
      specialty: 'Electrophysiology',
      qualifications: 'MBBS, MD, FRCP, FACC',
      experience: '22 years',
      rating: 4.9,
      availability: 'Available',
      description: 'Pioneer in treating cardiac rhythm disorders with advanced ablation and device implantation.',
      gradient: 'from-indigo-500 to-indigo-700',
      totalSurgeries: '4000+',
    },
    {
      name: 'Dr. Ayesha Siddiqui',
      specialty: 'Pediatric Cardiology',
      qualifications: 'MBBS, FCPS (Pediatric Cardiology)',
      experience: '15 years',
      rating: 4.7,
      availability: 'Available',
      description: 'Compassionate specialist in congenital heart diseases and pediatric cardiac interventions.',
      gradient: 'from-teal-500 to-teal-700',
      totalSurgeries: '2500+',
    },
    {
      name: 'Dr. Kamran Hussain',
      specialty: 'Cardiac Anesthesiology',
      qualifications: 'MBBS, FCPS (Anesthesia), FANZCA',
      experience: '20 years',
      rating: 4.8,
      availability: 'Available',
      description: 'Highly skilled anesthesiologist ensuring safe cardiac surgical procedures.',
      gradient: 'from-cyan-500 to-cyan-700',
      totalSurgeries: '6000+',
    },
    {
      name: 'Dr. Sadia Malik',
      specialty: 'Non-Invasive Cardiology',
      qualifications: 'MBBS, FCPS (Cardiology), MRCP',
      experience: '16 years',
      rating: 4.7,
      availability: 'Available',
      description: 'Expert in advanced cardiac imaging including echocardiography and stress testing.',
      gradient: 'from-pink-500 to-pink-700',
      totalSurgeries: '8000+',
    },
    {
      name: 'Prof. Dr. Tariq Mahmood',
      specialty: 'Cardiac Surgery',
      qualifications: 'MBBS, FRCS, FACS',
      experience: '28 years',
      rating: 4.9,
      availability: 'Available',
      description: 'Renowned surgeon specializing in heart valve repair and replacement procedures.',
      gradient: 'from-blue-600 to-blue-800',
      totalSurgeries: '7000+',
    },
    {
      name: 'Dr. Nadia Rasheed',
      specialty: 'Preventive Cardiology',
      qualifications: 'MBBS, FCPS (Cardiology), FACP',
      experience: '14 years',
      rating: 4.6,
      availability: 'Available',
      description: 'Dedicated to cardiac rehabilitation and lifestyle modification programs.',
      gradient: 'from-green-500 to-green-700',
      totalSurgeries: '1500+',
    },
    {
      name: 'Dr. Imran Farooq',
      specialty: 'Interventional Cardiology',
      qualifications: 'MBBS, FCPS, FSCAI',
      experience: '19 years',
      rating: 4.8,
      availability: 'Available',
      description: 'Specialist in complex angioplasty and stenting procedures with excellent outcomes.',
      gradient: 'from-violet-500 to-violet-700',
      totalSurgeries: '3500+',
    },
    {
      name: 'Dr. Hina Ahmed',
      specialty: 'Heart Failure & Transplant',
      qualifications: 'MBBS, MD (Cardiology), FACC',
      experience: '17 years',
      rating: 4.9,
      availability: 'Available',
      description: 'Leading expert in advanced heart failure management and transplant cardiology.',
      gradient: 'from-red-500 to-red-700',
      totalSurgeries: '2000+',
    },
    {
      name: 'Prof. Dr. Salman Haider',
      specialty: 'Cardiac Surgery',
      qualifications: 'MBBS, FRCS, FCPS',
      experience: '30 years',
      rating: 5.0,
      availability: 'Available',
      description: 'Veteran cardiac surgeon with unparalleled experience in CABG procedures.',
      gradient: 'from-indigo-600 to-indigo-800',
      totalSurgeries: '10000+',
    },
    {
      name: 'Dr. Zainab Qureshi',
      specialty: 'Cardiac Imaging',
      qualifications: 'MBBS, FCPS (Cardiology), FASE',
      experience: '12 years',
      rating: 4.7,
      availability: 'Available',
      description: 'Specialist in advanced cardiac MRI, CT, and nuclear cardiology imaging.',
      gradient: 'from-orange-500 to-orange-700',
      totalSurgeries: '5000+',
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
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* Hero Section - Matching Landing Page */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #2d5a8e 100%)',
          minHeight: '60vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px 0'
        }}
      >
        {/* Subtle Grid Pattern Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              border: '2px solid #f4a261',
              color: '#f4a261',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '14px',
              marginBottom: '24px',
              fontWeight: 600
            }}>
              🩺 50+ Expert Cardiologists
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '20px'
            }}>
              Meet Our Expert
              <br />
              <span style={{ color: '#f4a261' }}>Cardiologists</span>
            </h1>

            {/* Subtext */}
            <p style={{
              fontSize: '18px',
              color: '#93c5fd',
              maxWidth: '700px',
              lineHeight: 1.7,
              marginBottom: '36px',
              margin: '0 auto'
            }}>
              Our team of cardiologists represents the finest medical talent in Pakistan, with extensive
              training from leading institutions worldwide. Each specialist brings years of experience
              and a commitment to providing personalized, compassionate care to every patient.
            </p>

            {/* Stats Row */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '48px' }}>
              {[
                { num: '50+', label: 'Cardiologists' },
                { num: '100K+', label: 'Patients Treated' },
                { num: '38 Years', label: 'Experience' },
                { num: '4.8★', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>{stat.num}</div>
                  <div style={{ fontSize: '13px', color: '#93c5fd' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave SVG */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%' }}>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', display: 'block' }}
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Doctors Grid */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {doctors.map((doctor, index) => {
              const initials = getInitials(doctor.name);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                  className="doctor-card-premium"
                >
                  {/* Featured Badge for High Ratings */}
                  {doctor.rating >= 4.8 && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: '#f4a261',
                      color: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 700,
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0 4px 12px rgba(244, 162, 97, 0.4)'
                    }}>
                      <Award style={{ width: '12px', height: '12px' }} />
                      TOP RATED
                    </div>
                  )}

                  {/* Doctor Image/Avatar with Enhanced Gradient */}
                  <div style={{
                    position: 'relative',
                    height: '240px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%)',
                    overflow: 'hidden'
                  }}>
                    {/* Decorative Circles */}
                    <div style={{
                      position: 'absolute',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(244, 162, 97, 0.2) 0%, transparent 70%)',
                      top: '-50px',
                      right: '-50px'
                    }}></div>

                    <div className={`doctor-avatar-premium bg-gradient-to-br ${doctor.gradient}`} style={{
                      width: '140px',
                      height: '140px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#3b82f6' : '#8b5cf6'} 0%, ${index % 2 === 0 ? '#1e40af' : '#6d28d9'} 100%)`,
                      border: '4px solid rgba(255, 255, 255, 0.2)',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <span style={{ color: '#ffffff', fontSize: '48px', fontWeight: 'bold' }}>
                        {initials}
                      </span>
                    </div>

                    {/* Availability Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                    }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffffff', animation: 'pulse 2s infinite' }}></div>
                      {doctor.availability}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1a202c', marginBottom: '12px', lineHeight: 1.3 }}>
                      {doctor.name}
                    </h3>

                    {/* Specialty Badge */}
                    <div style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                      color: '#1e40af',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: 600,
                      marginBottom: '20px'
                    }}>
                      {doctor.specialty}
                    </div>

                    {/* Description */}
                    <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                      {doctor.description}
                    </p>

                    {/* Info Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          backgroundColor: '#f0f9ff',
                          borderRadius: '8px',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Calendar style={{ width: '16px', height: '16px', color: '#1e40af' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Experience</div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a202c' }}>{doctor.experience}</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          backgroundColor: '#fef3c7',
                          borderRadius: '8px',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>Rating</div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#1a202c' }}>{doctor.rating} / 5.0</div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div style={{
                      backgroundColor: '#f8fafc',
                      padding: '12px',
                      borderRadius: '10px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Heart style={{ width: '16px', height: '16px', color: '#e63946' }} />
                      <span style={{ fontSize: '13px', color: '#64748b' }}>
                        <strong style={{ color: '#1a202c' }}>{doctor.totalSurgeries}</strong> successful procedures
                      </span>
                    </div>

                    {/* Qualifications */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '20px' }}>
                      <GraduationCap style={{ width: '18px', height: '18px', color: '#1e3a5f', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>{doctor.qualifications}</span>
                    </div>

                    {/* Book Button */}
                    <button
                      style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, #1e3a5f 0%, #0a1628 100%)',
                        color: '#ffffff',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 95, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 95, 0.3)';
                      }}
                    >
                      <span>Book Appointment</span>
                      <CheckCircle style={{ width: '18px', height: '18px' }} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .doctor-card-premium:hover {
            transform: translateY(-12px) !important;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important;
            border-color: #1e3a5f !important;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)', padding: '64px 0' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              Schedule an Appointment
            </h2>
            <p style={{ fontSize: '18px', color: '#93c5fd', marginBottom: '32px' }}>
              Book a consultation with our expert cardiologists today
            </p>
            <Link
              href="/contact"
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
              <span>Book Now</span>
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
