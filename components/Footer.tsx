'use client';

import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a1628', color: '#ffffff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {/* Logo + Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '8px', borderRadius: '8px' }}>
                <Heart style={{ width: '24px', height: '24px', color: '#1e3a5f' }} fill="currentColor" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>KIHD</h3>
            </div>
            <p style={{ color: '#93c5fd', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              Karachi Institute of Heart Diseases is a leading cardiac care center in Pakistan,
              providing world-class treatment and compassionate care since 1985.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="Facebook"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#1e3a5f';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Facebook style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="Twitter"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#1e3a5f';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Twitter style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="Instagram"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#1e3a5f';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Instagram style={{ width: '20px', height: '20px' }} />
              </a>
              <a
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                aria-label="LinkedIn"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#1e3a5f';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Linkedin style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <Link
                  href="/"
                  style={{ color: '#93c5fd', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{ color: '#93c5fd', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  style={{ color: '#93c5fd', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  style={{ color: '#93c5fd', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{ color: '#93c5fd', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: '#93c5fd', fontSize: '14px' }}>
              <li>Cardiac Surgery</li>
              <li>Interventional Cardiology</li>
              <li>Electrophysiology</li>
              <li>Cardiac Rehabilitation</li>
              <li>Preventive Cardiology</li>
              <li>24/7 Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin style={{ width: '20px', height: '20px', color: '#f4a261', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#93c5fd', fontSize: '14px' }}>
                  Rafiqui Shaheed Road, Karachi Cantonment, Karachi, Pakistan
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone style={{ width: '20px', height: '20px', color: '#f4a261', flexShrink: 0 }} />
                <a
                  href="tel:+92213456789"
                  style={{ color: '#93c5fd', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  021-34567890
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail style={{ width: '20px', height: '20px', color: '#f4a261', flexShrink: 0 }} />
                <a
                  href="mailto:info@kihd.org.pk"
                  style={{ color: '#93c5fd', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#f4a261'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#93c5fd'}
                >
                  info@kihd.org.pk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1e3a5f',
          marginTop: '48px',
          paddingTop: '32px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#93c5fd', fontSize: '14px', margin: 0 }}>
            &copy; {new Date().getFullYear()} Karachi Institute of Heart Diseases. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
