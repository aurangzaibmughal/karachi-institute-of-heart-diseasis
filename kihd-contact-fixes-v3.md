# KIHD Contact Page — Spacing & Map Fix Prompt

## Current Issues to Fix
1. "Book an Appointment" heading aur subtitle ke beech gap nahi
2. Google Maps broken (image error icon dikh raha hai)
3. Contact info card aur map bohot close hain (gap nahi)
4. Section ka top padding nahi — navbar se chipka hua hai

---

## Instructions for Claude Code

Read `app/contact/page.tsx` and make ONLY these 4 targeted fixes.  
Do NOT rewrite the file. Do NOT change any logic or other sections.

---

## Fix 1 — Section Top Padding

Find the `<section>` tag that wraps the contact content.  
Add `paddingTop: '100px'` and `paddingBottom: '80px'` to its inline style.

**Before (approximately):**
```tsx
<section className="py-20" style={{ background: '...', width: '100%' }}>
```

**After:**
```tsx
<section className="py-20" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 60%, #0d1f3c 100%)', width: '100%', paddingTop: '100px', paddingBottom: '80px' }}>
```

---

## Fix 2 — Heading & Subtitle Spacing

Find the heading wrapper `motion.div` with `className="text-center mb-12"`.

**Change to:**
```tsx
className="text-center" style={{ marginBottom: '64px', paddingTop: '20px' }}
```

Find the subtitle `<p>` tag and update its style:

**Before:**
```tsx
style={{ color: '#6c757d' }}
```

**After:**
```tsx
style={{ color: 'rgba(255,255,255,0.65)', marginTop: '16px', fontSize: '1.1rem' }}
```

---

## Fix 3 — Google Maps iframe URL (Broken Map Fix)

Find the `<iframe>` tag inside the maps div.  
Replace the entire `src` URL with this working embed URL:

```
https://maps.google.com/maps?q=24.8813,67.0289&z=15&output=embed
```

Full iframe should look like:
```tsx
<iframe
  src="https://maps.google.com/maps?q=24.8813,67.0289&z=15&output=embed"
  width="100%"
  height="320"
  style={{ border: 0, borderRadius: '12px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="KIHD Location"
></iframe>
```

---

## Fix 4 — Contact Info Card Gap from Map

Find the contact info card `<div>` that contains MapPin, Phone, Mail icons.  
Add `marginTop: '20px'` to its inline style.

**Before (approximately):**
```tsx
<div className="p-6" style={{ background: 'rgba(26, 42, 74, 0.9)', ... }}>
```

**After:**
```tsx
<div className="p-6" style={{ background: 'rgba(26, 42, 74, 0.9)', marginTop: '20px', ... }}>
```

---

## Fix 5 — Right Column Internal Spacing

Find the right column `motion.div` with `className="space-y-6"`.  
Update to add more breathing room:

```tsx
className="space-y-6" style={{ paddingTop: '8px' }}
```

---

## Validation Checklist

- [ ] No JSX tags broken or unclosed
- [ ] Map iframe `src` updated to new URL
- [ ] `npm run build` passes with no errors
- [ ] No other pages or components modified

---

## What NOT to Change

- Form fields, handlers, state variables
- WhatsApp button functionality  
- Footer or Navbar
- Any other page files
- globals.css

---

*KIHD Demo Site — Freelance Pitch | Fix Prompt v3*
