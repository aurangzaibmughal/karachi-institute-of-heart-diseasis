# URGENT FIX: Hero Section has no background color

## THE PROBLEM
The hero section is completely blank/white. Tailwind gradient classes are not working.
Fix this by using INLINE STYLES instead of Tailwind classes for all backgrounds.

## FIX THESE FILES NOW:

### 1. Fix HeroSection.tsx

Replace the hero section's outer div with this exact inline style:

```tsx
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
```

### 2. Fix Navbar background

Replace navbar div with:
```tsx
<nav style={{ backgroundColor: '#1e3a5f', position: 'sticky', top: 0, zIndex: 50, width: '100%' }}>
```

### 3. Fix Stats Section background

```tsx
<section style={{ backgroundColor: '#1e3a5f', padding: '60px 0' }}>
```

### 4. Fix Footer background

```tsx
<footer style={{ backgroundColor: '#0a1628', padding: '60px 0' }}>
```

### 5. Fix Why Choose Us section

```tsx
<section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%)', padding: '80px 0' }}>
```

### 6. Update tailwind.config.ts — add safelist

Add this to tailwind.config.ts to prevent purging:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-blue-900',
    'bg-blue-800', 
    'bg-blue-700',
    'from-blue-900',
    'to-blue-700',
    'min-h-screen',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0a1628',
          700: '#1e3a5f',
          500: '#2d5a8e',
        },
        accent: '#e63946',
        gold: '#f4a261',
      }
    },
  },
  plugins: [],
}
export default config
```

### 7. Fix globals.css — add direct CSS classes

Add to app/globals.css:

```css
.hero-section {
  background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #2d5a8e 100%) !important;
  min-height: 100vh;
  width: 100%;
}

.navbar-bg {
  background-color: #1e3a5f !important;
}

.stats-bg {
  background-color: #1e3a5f !important;
}

.dark-section {
  background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%) !important;
}

.footer-bg {
  background-color: #0a1628 !important;
}
```

## HERO CONTENT (put this inside the hero section div)

```tsx
<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
  
  {/* Badge */}
  <div style={{
    display: 'inline-block',
    border: '1px solid #f4a261',
    color: '#f4a261',
    padding: '6px 16px',
    borderRadius: '999px',
    fontSize: '13px',
    marginBottom: '24px',
    fontWeight: 500
  }}>
    🏆 Pakistan's #1 Cardiac Institute
  </div>

  {/* Main Heading */}
  <h1 style={{
    fontSize: 'clamp(36px, 6vw, 64px)',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.15,
    marginBottom: '20px'
  }}>
    Expert Heart Care<br />
    <span style={{ color: '#f4a261' }}>You Can Trust</span>
  </h1>

  {/* Subtext */}
  <p style={{
    fontSize: '18px',
    color: '#93c5fd',
    maxWidth: '500px',
    lineHeight: 1.7,
    marginBottom: '36px'
  }}>
    Pakistan's premier cardiac hospital providing world-class 
    cardiovascular treatment with compassion since 1985.
  </p>

  {/* CTA Buttons */}
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
    <a href="/contact" style={{
      backgroundColor: '#f4a261',
      color: '#0a1628',
      padding: '14px 32px',
      borderRadius: '8px',
      fontWeight: 700,
      fontSize: '16px',
      textDecoration: 'none',
      display: 'inline-block'
    }}>
      Book Appointment →
    </a>
    <a href="tel:02134567890" style={{
      border: '2px solid #ffffff',
      color: '#ffffff',
      padding: '14px 32px',
      borderRadius: '8px',
      fontWeight: 600,
      fontSize: '16px',
      textDecoration: 'none',
      display: 'inline-block'
    }}>
      📞 Emergency: 021-34567890
    </a>
  </div>

  {/* Stats Row */}
  <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
    {[
      { num: '100,000+', label: 'Successful Procedures' },
      { num: '50+', label: 'Expert Cardiologists' },
      { num: '38', label: 'Years of Excellence' },
      { num: '95%', label: 'Success Rate' },
    ].map((stat) => (
      <div key={stat.label}>
        <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff' }}>{stat.num}</div>
        <div style={{ fontSize: '13px', color: '#93c5fd' }}>{stat.label}</div>
      </div>
    ))}
  </div>

</div>
```

## IMPORTANT INSTRUCTION
Use inline styles (style={{}}) for ALL background colors, not Tailwind classes.
Tailwind purging is removing the color classes in development.
After making changes, run: npm run dev
Then check localhost:3000 — hero should now show dark blue gradient background.
