'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? '#0a1628' : '#1e3a5f',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'all 0.3s',
        boxShadow: scrolled ? '0 10px 25px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '8px', borderRadius: '8px' }}>
              <Heart style={{ width: '24px', height: '24px', color: '#e63946' }} fill="#e63946" />
            </div>
            <div>
              <h1 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '20px', margin: 0 }}>KIHD</h1>
              <p style={{ color: '#93c5fd', fontSize: '12px', margin: 0 }}>Karachi Institute of Heart Diseases</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  color: '#ffffff',
                  fontWeight: 500,
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '8px'
                }}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Emergency Button with Pulse Animation */}
          <a
            href="tel:+92213456789"
            style={{
              display: 'none',
              backgroundColor: '#e63946',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
            className="emergency-btn"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2f3e'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e63946'}
          >
            Emergency: 021-34567890
          </a>

          {/* Mobile Menu Button & Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-controls">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'block',
                color: '#ffffff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px'
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#1e3a5f',
              position: 'fixed',
              left: 0,
              right: 0,
              top: '70px',
              bottom: 0,
              overflowY: 'auto'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100%',
              gap: '24px',
              padding: '32px 16px'
            }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    color: '#ffffff',
                    fontSize: '24px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onClick={() => setIsOpen(false)}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+92213456789"
                style={{
                  backgroundColor: '#e63946',
                  color: '#ffffff',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginTop: '24px',
                  animation: 'pulse 2s infinite'
                }}
              >
                Emergency: 021-34567890
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .emergency-btn {
            display: block !important;
          }
          .mobile-controls {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-controls {
            display: flex !important;
          }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #f4a261;
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </nav>
  );
}



