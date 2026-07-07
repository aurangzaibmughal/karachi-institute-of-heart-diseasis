'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #2d5a8e 100%)',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Two Column Layout */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>

          {/* Left Column - 55% */}
          <div style={{ flex: '0 0 55%' }}>
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
                🏆 Pakistan's #1 Cardiac Institute
              </div>

              {/* Main Heading */}
              <h1 style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '20px'
              }}>
                Expert Heart Care<br />
                <span style={{ color: '#f4a261' }}>You Can Trust</span>
              </h1>

              {/* Subtext */}
              <p style={{
                fontSize: '18px',
                color: '#93c5fd',
                maxWidth: '600px',
                lineHeight: 1.7,
                marginBottom: '36px'
              }}>
                Pakistan's premier cardiac hospital providing world-class
                cardiovascular treatment with compassion since 1985.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link href="/contact" style={{
                  backgroundColor: '#f4a261',
                  color: '#0a1628',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Book Appointment →
                </Link>
                <a href="tel:02134567890" style={{
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  📞 Emergency: 021-34567890
                </a>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                {[
                  { num: '100,000+', label: 'Successful Procedures' },
                  { num: '50+', label: 'Expert Cardiologists' },
                  { num: '38 Years', label: 'Of Excellence' },
                  { num: '95%', label: 'Success Rate' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>{stat.num}</div>
                    <div style={{ fontSize: '13px', color: '#93c5fd' }}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - 45% - Animated Heart */}
          <div
            className="hero-right-column"
            style={{
              flex: '0 0 45%',
              position: 'relative',
              minHeight: '350px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Outer pulsing rings */}
              {[1, 2, 3].map((i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: `${200 + i * 80}px`,
                  height: `${200 + i * 80}px`,
                  borderRadius: '50%',
                  border: `2px solid rgba(230, 57, 70, ${0.4 - i * 0.1})`,
                  animation: `pulse ${1.5 + i * 0.4}s ease-in-out infinite`,
                }} />
              ))}

              {/* Main heart SVG */}
              <svg
                viewBox="0 0 100 90"
                style={{
                  width: '200px',
                  height: '180px',
                  filter: 'drop-shadow(0 0 30px rgba(230, 57, 70, 0.6))',
                  animation: 'heartbeat 1.2s ease-in-out infinite',
                  zIndex: 10,
                  position: 'relative'
                }}
              >
                <path
                  d="M50 85 C50 85 5 55 5 28 C5 14 16 5 28 5 C36 5 44 10 50 18 C56 10 64 5 72 5 C84 5 95 14 95 28 C95 55 50 85 50 85Z"
                  fill="#e63946"
                  stroke="#ff6b7a"
                  strokeWidth="2"
                />
                {/* EKG line across heart */}
                <polyline
                  points="15,45 25,45 30,30 35,55 42,20 48,60 53,40 58,40 65,45 85,45"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ animation: 'ekg 2s ease-in-out infinite' }}
                />
              </svg>

              {/* Floating stat cards around heart */}
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '-20px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: 'white',
                textAlign: 'center',
                animation: 'float 3s ease-in-out infinite',
              }}>
                <div style={{ fontSize: '22px', fontWeight: 800 }}>95%</div>
                <div style={{ fontSize: '11px', color: '#93c5fd' }}>Success Rate</div>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '-10px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: 'white',
                textAlign: 'center',
                animation: 'float 3.5s ease-in-out infinite 0.5s',
              }}>
                <div style={{ fontSize: '22px', fontWeight: 800 }}>50+</div>
                <div style={{ fontSize: '11px', color: '#93c5fd' }}>Cardiologists</div>
              </div>
            </div>
          </div>

        </div>
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
  );
}
