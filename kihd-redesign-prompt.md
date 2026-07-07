# KIHD Website — Complete UI/UX Redesign Prompt

## CRITICAL ISSUES TO FIX (from current screenshot)
1. Hero section has NO background — just white blank space
2. Emergency button is overlapping on hero text
3. Color scheme is wrong — random red/black instead of deep blue
4. Navbar is too thin and has no background color
5. Stats section has no background, looks floating
6. Service card icons are broken/missing
7. No visual depth, no gradients, no professional medical feel
8. Not responsive on mobile

---

## YOUR TASK

Completely redesign and rebuild the entire KIHD website UI/UX from scratch.
Keep the same Next.js 14 + TypeScript + Tailwind CSS + Framer Motion stack.
Do NOT change any page routing or folder structure.
Only rewrite the visual design and components.

---

## STRICT COLOR SYSTEM (follow exactly)

```
Primary Dark:     #0a1628   (very dark navy — backgrounds)
Primary:          #1e3a5f   (deep blue — main color)
Primary Light:    #2d5a8e   (medium blue — hover states)
Accent:           #e63946   (red — emergency/CTA only)
Gold:             #f4a261   (warm gold — highlights)
White:            #ffffff
Off White:        #f8fafc
Light Gray:       #e2e8f0
Text Dark:        #1a202c
Text Gray:        #64748b
```

---

## COMPONENT 1: Navbar (components/Navbar.tsx)

```
Design:
- Full width, height: 70px
- Background: #1e3a5f (solid deep blue)
- Logo: white heart icon + "KIHD" in bold white + small tagline "Karachi Institute of Heart Diseases" in light blue
- Nav links: white text, hover: gold underline effect
- Emergency button (top right): red background, white text, pulsing animation
- On scroll: add shadow + slightly darker background
- Mobile: hamburger menu (white icon), full screen dropdown with blue background
- Position: sticky top-0, z-index: 50
```

---

## COMPONENT 2: Hero Section (components/HeroSection.tsx)

```
Design:
- Full viewport height (min-h-screen)
- Background: gradient from #0a1628 (top) to #1e3a5f (bottom)
- Add subtle grid pattern overlay (opacity 0.05) for texture
- Left side (60%): 
  - Small badge: "Pakistan's #1 Cardiac Institute" with gold border
  - Main heading (white, bold, 64px): "Expert Heart Care\nYou Can Trust"
  - Subtext (light blue, 18px): description
  - Two CTA buttons:
    * Primary: gold background, dark text "Book Appointment →"
    * Secondary: white border, white text "Emergency: 021-34567890"
  - Trust badges row: "ISO Certified", "25+ Years", "24/7 Emergency"
- Right side (40%):
  - Floating card with stats inside (glass morphism effect)
  - Stats: 100,000+ Procedures, 50+ Cardiologists, 38 Years, 95% Success Rate
  - Each stat has icon + number + label
- Bottom: smooth wave SVG shape transitioning to white
```

---

## COMPONENT 3: Stats Section

```
Design:
- Background: #1e3a5f
- 4 stat cards in a row
- Each card: white number (bold, 48px) + white label (14px)
- Separator lines between cards (white, 20% opacity)
- Counter animation on scroll (use Framer Motion)
```

---

## COMPONENT 4: Services Section

```
Design:
- Background: #f8fafc (off white)
- Section title: "Our Services" (dark navy, bold, centered)
- 6 cards in 3x2 grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each card:
  * White background
  * Top: colored icon circle (blue background, white icon from lucide-react)
  * Title: dark navy, bold
  * Description: gray text
  * Bottom: "Learn More →" link in blue
  * Hover: lift up (translateY -8px) + blue border + shadow
  * Border radius: 16px
  * Padding: 32px

Services list with icons:
1. Cardiac Surgery — Heart icon
2. Interventional Cardiology — Activity icon  
3. Electrophysiology — Zap icon
4. 24/7 Emergency Care — AlertCircle icon
5. Cardiac Rehabilitation — Users icon
6. Preventive Cardiology — Shield icon
```

---

## COMPONENT 5: Why Choose Us Section

```
Design:
- Background: gradient #0a1628 to #1e3a5f
- Left: large heading "Why Choose\nKIHD?" in white + description
- Right: 4 feature items with checkmark icons
- Features: Expert Team, Advanced Technology, Affordable Care, 24/7 Support
- Each feature: gold checkmark circle + white bold title + light gray description
```

---

## COMPONENT 6: Doctors Section Preview (app/doctors/page.tsx)

```
Design:
- Background: white
- 4 doctor cards in a row (2 on mobile)
- Each card:
  * Top: colored gradient background circle with initials (no broken image)
  * Name: bold dark navy
  * Title: blue text
  * Specialization badge: light blue pill shape
  * "View Profile" button
```

---

## COMPONENT 7: Contact Section (app/contact/page.tsx)

```
Design:
- Split layout: left form (60%), right info (40%)
- Form background: white, rounded corners, shadow
- Input fields: border bottom only style, clean
- Submit button: full width, #1e3a5f background, white text
- Right side: #1e3a5f background, white text
  * Phone, email, address with icons
  * WhatsApp button (green)
  * Google Maps placeholder (gray rounded box)
```

---

## COMPONENT 8: Footer (components/Footer.tsx)

```
Design:
- Background: #0a1628 (very dark navy)
- 4 columns: Logo+description, Quick Links, Services, Contact
- All text: white/light gray
- Bottom bar: slightly lighter background + copyright
- Social icons: circular white border buttons
```

---

## FLOATING WHATSAPP BUTTON (components/WhatsAppButton.tsx)

```
- Fixed: bottom-6, right-6
- Green circle (#25D366), white WhatsApp icon
- Pulsing green ring animation
- Tooltip on hover: "Chat on WhatsApp"
- z-index: 100
```

---

## TAILWIND CONFIG (tailwind.config.ts)

```typescript
colors: {
  primary: {
    50:  '#e8f0fa',
    100: '#c5d8f4',
    200: '#8ab4e8',
    500: '#2d5a8e',
    600: '#1e3a5f',
    700: '#0a1628',
    900: '#060d1a',
  },
  accent: '#e63946',
  gold: '#f4a261',
}
```

---

## GLOBAL CSS (app/globals.css)

```css
* { scroll-behavior: smooth; }

.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff, #f4a261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## RESPONSIVE BREAKPOINTS (strictly follow)

```
Mobile:  < 768px  — single column, stacked layout
Tablet:  768-1024px — 2 columns
Desktop: > 1024px — full layout as described
```

---

## ANIMATIONS (Framer Motion)

```
- Hero: fade in + slide up on load (staggered 0.2s delay)
- Stats: count up animation when in viewport
- Cards: fade in from bottom when scrolled into view
- Navbar: shrink slightly on scroll
- Buttons: scale 1.05 on hover
```

---

## FINAL CHECKLIST BEFORE FINISHING

- [ ] Navbar has blue background (NOT white/transparent)
- [ ] Hero has dark gradient background (NOT white)
- [ ] Emergency button is ONLY in navbar top-right (not overlapping text)
- [ ] All icons load from lucide-react (no broken images)
- [ ] Stats section has colored background
- [ ] All cards have proper shadows and borders
- [ ] Mobile hamburger menu works
- [ ] WhatsApp floating button visible on all pages
- [ ] No white/blank sections anywhere
- [ ] Color scheme is consistently deep blue + white + gold accents

---

## START COMMAND

Begin by rewriting these files in this order:
1. tailwind.config.ts
2. app/globals.css
3. components/Navbar.tsx
4. components/HeroSection.tsx
5. components/WhatsAppButton.tsx
6. app/page.tsx
7. components/Footer.tsx
8. app/doctors/page.tsx
9. app/contact/page.tsx
