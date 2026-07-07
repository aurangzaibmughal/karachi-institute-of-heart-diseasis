'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '10px',
    padding: '14px 16px',
    color: '#ffffff',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: '500' as const,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: '6px',
  };

  return (
    <main style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 60%, #0d1f3c 100%)',
      minHeight: 'auto',
      paddingTop: '100px',
      paddingBottom: '40px',
      paddingLeft: '24px',
      paddingRight: '24px',
      color: '#ffffff',
    }}>

      {/* Max Width Container */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}>
            Book an Appointment
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '12px',
          }}>
            Fill out the form below and our team will get back to you shortly
          </p>
        </motion.div>

        {/* 2-Column Grid: Form LEFT | Map+Info RIGHT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* ===== LEFT COLUMN — Appointment Form ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '40px',
            }}
          >
            {submitted && (
              <div style={{
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.4)',
                borderRadius: '10px',
                padding: '16px',
                marginBottom: '24px',
                color: '#6ee7b7',
              }}>
                <p style={{ fontWeight: '600' }}>Thank you for contacting us!</p>
                <p style={{ fontSize: '0.875rem', marginTop: '4px' }}>We will get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="name" style={labelStyle}>
                  Full Name <span style={{ color: '#e63946' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" style={labelStyle}>
                  Email Address <span style={{ color: '#e63946' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  style={inputStyle}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" style={labelStyle}>
                  Phone Number <span style={{ color: '#e63946' }}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+92 300 1234567"
                  style={inputStyle}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" style={labelStyle}>
                  Service Required <span style={{ color: '#e63946' }}>*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="" style={{ background: '#1a2a4a' }}>Select a service</option>
                  <option value="cardiac-surgery" style={{ background: '#1a2a4a' }}>Cardiac Surgery</option>
                  <option value="interventional" style={{ background: '#1a2a4a' }}>Interventional Cardiology</option>
                  <option value="electrophysiology" style={{ background: '#1a2a4a' }}>Electrophysiology</option>
                  <option value="rehabilitation" style={{ background: '#1a2a4a' }}>Cardiac Rehabilitation</option>
                  <option value="consultation" style={{ background: '#1a2a4a' }}>General Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Please provide any additional information..."
                  style={{ ...inputStyle, resize: 'none' }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  height: '52px',
                  background: 'linear-gradient(90deg, #e63946 0%, #c1121f 100%)',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  letterSpacing: '0.3px',
                  marginTop: '8px',
                }}
              >
                Book Appointment
              </button>
            </form>
          </motion.div>

          {/* ===== RIGHT COLUMN — WhatsApp + Map + Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/922134567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                height: '52px',
                background: '#25D366',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '1rem',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
              }}
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

            {/* Google Maps */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <iframe
                src="https://maps.google.com/maps?q=24.8813,67.0289&z=15&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KIHD Location"
              ></iframe>
            </div>

            {/* Contact Info Card */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '14px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#4a9eff" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Rafiqui Shaheed Road, Karachi Cantonment,<br />Karachi, Pakistan
                </p>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#4a9eff" style={{ flexShrink: 0 }} />
                <a href="tel:+922134567890" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', textDecoration: 'none' }}>
                  021-34567890
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#4a9eff" style={{ flexShrink: 0 }} />
                <a href="mailto:info@kihd.org.pk" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', textDecoration: 'none' }}>
                  info@kihd.org.pk
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}


