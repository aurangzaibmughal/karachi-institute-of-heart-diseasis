# KIHD Contact Section — UI Redesign Prompt

## Objective

Redesign the **Contact / Book an Appointment** section of the KIHD website.  
Current issues:
- Form is cut off / overflowing on the left
- Google Maps shows a grey placeholder instead of a real embed
- WhatsApp button and map layout feels disconnected
- No visual separation between form and sidebar content
- Poor spacing and mobile responsiveness

---

## Layout Structure

Use a **2-column CSS Grid** layout:

```
┌──────────────────────────┬─────────────────────────┐
│                          │                         │
│   Appointment Form       │   WhatsApp Button       │
│   (left column)          │   + Google Maps Embed   │
│                          │   (right column)        │
│                          │                         │
└──────────────────────────┴─────────────────────────┘
```

On **mobile**, stack vertically — form on top, WhatsApp + map below.

---

## Section Header

- Centered heading: `"Book an Appointment"`
- Subtitle: `"Fill out the form below and our team will get back to you shortly"`
- Match existing site typography and KIHD brand colors

---

## Left Column — Appointment Form

**Card style:** white background, subtle box-shadow, rounded corners (`border-radius: 12px`), adequate padding.

**Form Fields (in order):**
1. Full Name `*`
2. Email Address `*`
3. Phone Number `*`
4. Service Required `*` — dropdown with options:
   - Cardiac Surgery
   - Interventional Cardiology
   - Electrophysiology
   - Cardiac Rehabilitation
   - General Consultation
5. Message (textarea, optional)

**Field styling:**
- Visible `<label>` above each input (not just placeholder)
- Inputs: full-width, border `1px solid #dee2e6`, focus ring in brand navy
- Placeholders in light grey

**Submit Button:**
- Text: `"Book Appointment"`
- Background: KIHD dark navy `#1a2a4a` (or match existing brand color)
- White text, full width, hover state with slight darkening
- No default browser `<form>` submission — use `onClick` handler

---

## Right Column — WhatsApp + Map

### WhatsApp Button
- Full width of the column
- Background: `#25D366` (WhatsApp green)
- White text + WhatsApp icon (SVG or react-icons)
- Text: `"Chat on WhatsApp"`
- `border-radius: 8px`, padding comfortable
- Opens `https://wa.me/922134567890` in new tab

### Google Maps Embed
- Replace grey placeholder with **real embedded iframe**
- Location: `Rafiqui Shaheed Road, Karachi Cantonment, Karachi, Pakistan`
- Use Google Maps embed URL:
  ```
  https://www.google.com/maps?q=Rafiqui+Shaheed+Road,+Karachi+Cantonment,+Karachi,+Pakistan&output=embed
  ```
- `width: 100%`, `height: 350px`
- `border-radius: 12px`, no border
- `loading="lazy"` attribute

---

## Section Background

- Section background: light grey `#f8f9fa` to visually separate from adjacent sections
- Internal card (form) background: `#ffffff`

---

## Brand Colors Reference

| Token | Value |
|---|---|
| Primary Navy | `#1a2a4a` |
| WhatsApp Green | `#25D366` |
| Emergency Red | `#e63946` |
| Background Grey | `#f8f9fa` |
| Border Grey | `#dee2e6` |
| Text Dark | `#212529` |
| Text Muted | `#6c757d` |

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `>= 768px` | 2-column grid (`1fr 1fr`) |
| `< 768px` | Single column, stacked |

- On mobile: proper horizontal padding (`16px` minimum)
- Inputs and button: touch-friendly height (`min-height: 44px`)

---

## What NOT to Change

- Navbar (header) — leave untouched
- Footer — leave untouched
- Color scheme / brand identity — maintain existing KIHD branding
- All other page sections — only modify the Contact section

---

## File to Edit

> Specify your contact component file, e.g.:  
> `src/components/Contact.jsx` or `src/pages/contact.tsx`

---

*Generated for KIHD Demo Site — Freelance Pitch Project*
