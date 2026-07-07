'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Activity, Zap, Stethoscope, Baby, AlertCircle, Shield, Dumbbell, CheckCircle, Award, Microscope, Users, DollarSign, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiac Surgery',
      description: 'Comprehensive surgical solutions for heart conditions',
      treatments: [
        'Coronary Artery Bypass Grafting (CABG)',
        'Heart Valve Repair & Replacement',
        'Minimally Invasive Cardiac Surgery',
        'Aortic Surgery',
        'Congenital Heart Defect Repair',
        'Heart Transplantation',
      ],
    },
    {
      icon: Activity,
      title: 'Interventional Cardiology',
      description: 'Advanced catheter-based treatments for heart diseases',
      treatments: [
        'Coronary Angiography',
        'Angioplasty & Stenting',
        'Primary PCI for Heart Attacks',
        'Complex Coronary Interventions',
        'Peripheral Vascular Interventions',
        'Structural Heart Interventions',
      ],
    },
    {
      icon: Zap,
      title: 'Electrophysiology',
      description: 'Expert care for heart rhythm disorders',
      treatments: [
        'Cardiac Ablation Procedures',
        'Pacemaker Implantation',
        'ICD (Defibrillator) Implantation',
        'CRT (Cardiac Resynchronization Therapy)',
        'Holter Monitoring',
        'EP Studies',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Cardiac Diagnostics',
      description: 'State-of-the-art diagnostic services',
      treatments: [
        'Echocardiography (2D, 3D, TEE)',
        'Stress Testing (TMT)',
        'Cardiac CT & MRI',
        'Nuclear Cardiology',
        'Coronary Angiography',
        'Cardiac Catheterization',
      ],
    },
    {
      icon: Baby,
      title: 'Pediatric Cardiology',
      description: 'Specialized care for children with heart conditions',
      treatments: [
        'Congenital Heart Disease Treatment',
        'Pediatric Cardiac Surgery',
        'Fetal Echocardiography',
        'Pediatric Cardiac Interventions',
        'Pediatric Electrophysiology',
        'Follow-up Care for Congenital Conditions',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Critical Cardiac Care',
      description: '24/7 emergency and intensive care services',
      treatments: [
        '24/7 Emergency Department',
        'Cardiac Intensive Care Unit (CICU)',
        'Acute Heart Attack Management',
        'Heart Failure Treatment',
        'Cardiogenic Shock Management',
        'Post-Operative Care',
      ],
    },
    {
      icon: Shield,
      title: 'Preventive Cardiology',
      description: 'Programs to prevent heart disease and promote heart health',
      treatments: [
        'Cardiovascular Risk Assessment',
        'Lipid Management',
        'Hypertension Management',
        'Diabetes & Heart Disease',
        'Lifestyle Modification Programs',
        'Smoking Cessation Programs',
      ],
    },
    {
      icon: Dumbbell,
      title: 'Cardiac Rehabilitation',
      description: 'Comprehensive recovery and rehabilitation programs',
      treatments: [
        'Phase I (In-Hospital) Rehabilitation',
        'Phase II (Outpatient) Rehabilitation',
        'Exercise Training Programs',
        'Nutritional Counseling',
        'Psychological Support',
        'Long-term Maintenance Programs',
      ],
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'International Standards',
      description: 'Care that meets global quality benchmarks',
    },
    {
      icon: Microscope,
      title: 'Advanced Technology',
      description: 'Latest equipment and treatment methods',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ highly qualified cardiologists',
    },
    {
      icon: DollarSign,
      title: 'Affordable Care',
      description: 'Quality treatment at reasonable costs',
    },
  ];

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
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
              Our Services
            </h1>
            <p style={{ fontSize: '20px', color: '#93c5fd' }}>
              Comprehensive cardiac care services under one roof
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ padding: '48px 0', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '896px', margin: '0 auto' }}
          >
            <p style={{ color: '#64748b', fontSize: '18px', lineHeight: 1.7 }}>
              KIHD offers a complete spectrum of cardiac care services, from prevention and diagnosis
              to treatment and rehabilitation. Our state-of-the-art facilities and expert team ensure
              that every patient receives world-class care tailored to their specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '32px' }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '32px',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s'
                  }}
                  className="service-card"
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <div style={{
                      backgroundColor: '#1e3a5f',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px',
                      flexShrink: 0
                    }}>
                      <IconComponent style={{ width: '32px', height: '32px', color: '#ffffff' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '8px' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: '#64748b' }}>{service.description}</p>
                    </div>
                  </div>

                  <div style={{ marginTop: '24px' }}>
                    <h4 style={{ fontWeight: 600, color: '#1e3a5f', marginBottom: '12px', fontSize: '16px' }}>
                      Treatments & Procedures:
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                      {service.treatments.map((treatment, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#64748b' }}>
                          <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px', flexShrink: 0, marginTop: '2px' }} />
                          <span>{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
          @media (max-width: 768px) {
            .service-card {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '16px' }}>
              Why Choose Our Services?
            </h2>
            <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
              What sets KIHD apart in cardiac care
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                  className="feature-card"
                >
                  <div style={{
                    backgroundColor: '#1e3a5f',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <IconComponent style={{ width: '32px', height: '32px', color: '#f4a261' }} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e3a5f', marginBottom: '8px' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#64748b' }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style jsx>{`
          .feature-card:hover {
            box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15) !important;
            transform: translateY(-8px) !important;
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
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
              Need Cardiac Care?
            </h2>
            <p style={{ fontSize: '18px', color: '#93c5fd', marginBottom: '32px' }}>
              Contact us today to schedule a consultation or learn more about our services
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
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
                <span>Book Appointment</span>
                <ArrowRight style={{ width: '20px', height: '20px' }} />
              </Link>
              <a
                href="tel:+92213456789"
                style={{
                  backgroundColor: '#e63946',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc2f3e';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#e63946';
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
