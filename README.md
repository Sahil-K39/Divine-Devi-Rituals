# 🌿 Divine-Devi-Rituals

**A sacred e-commerce website for handmade crystal jewellery, rituals, and spiritual journeys.**

🌍 **Live Site:** https://divine-devi-rituals.vercel.app

---

## 📖 Overview

Divine-Devi-Rituals is a beautifully designed multi-page e-commerce website dedicated to sacred rituals, handmade macrame crystal jewellery, travel photography, and spiritual ceremonies. The site showcases the creative work and personal brand of Devi Divine, blending commerce with storytelling.

**Key Features:**
- ✨ Stunning animations and parallax scrolling effects
- 🛍️ Complete e-commerce product showcase
- 📸 High-quality imagery and gallery displays
- 🧘 Spiritual and ritualistic branding
- 💎 Crystal-inspired color palette and design
- 📱 Fully responsive design
- ♿ Accessible and semantic HTML

---

## 🎨 Design & Branding

### Color Palette

The design uses an earthy, natural color scheme inspired by earth and crystals:

```css
--paper: #f0ebe4          /* Off-white/cream base */
--paper-deep: #e7ded5     /* Subtle background variation */
--clay: #a27d70           /* Warm terracotta/bronze */
--cedar: #745950          /* Deep brown accent */
--ink: #4c3c36            /* Dark text color */
--sage: #26352a           /* Forest green accent */
--cream: #fffaf4          /* Light overlay color */
```

### Typography

- **Serif/Decorative:** [Allura](https://fonts.google.com/specimen/Allura) (cursive) - Headlines and branding
- **Body:** [Questrial](https://fonts.google.com/specimen/Questrial) (sans-serif) - Main text and UI

---

## 📁 Project Structure

```
Divine-Devi-Rituals/
├── index.html              # Homepage with hero video, shop, blog preview
├── jewellery.html          # Main jewellery collection & shopping guide
├── ritual.html             # Spiritual ceremonies & practices
├── blog.html               # Travel stories and articles
├── imagery.html            # Photography gallery & prints
├── about.html              # Creator biography
├── contact.html            # Contact form
├── collections.html        # Curated jewellery collections
├── all-products.html       # Full product catalog
├── customdesigns.html      # Custom order information
├── crystals.html           # Crystal descriptions & guide
├── supplies.html           # Artist supplies shop
├── gift-card.html          # Gift card offerings
├── rewards.html            # Loyalty rewards program
├── styles.css              # All styling (1000+ lines)
├── script.js               # Animations & interactions
├── vercel.json             # Deployment config
├── Catelog/                # Image assets directory
└── README.md               # This file
```

---

## ✨ Key Features

### 🎬 Animations

- **Scroll-triggered reveals:** Elements fade and slide into view as you scroll
- **Parallax scrolling:** Background images move at different speeds
- **Hover effects:** Cards and images scale on interaction
- **Smooth transitions:** All animations respect `prefers-reduced-motion`
- **Staggered animations:** Multiple elements animate with cascading delays

### 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts using CSS Grid
- Responsive images with `aspect-ratio`
- Viewport-aware sizing with `clamp()`
- Touch-friendly interactive elements

### ♿ Accessibility

- Semantic HTML5 structure
- Proper ARIA labels for screen readers
- Alt text for all images
- Focus states for keyboard navigation
- Color contrast compliance
- Respects user motion preferences

### ⚡ Performance

- Lazy-loaded images
- CSS-based animations (performant)
- RequestAnimationFrame for scroll events
- Optimized Google Fonts loading
- Deployed on Vercel for fast delivery

---

## 🎯 Page Breakdown

### 🏠 **Homepage (index.html)**
The landing page features:
- Full-screen video hero with overlay text
- Welcome introduction section
- About portrait section with CTA
- Shop jewellery gallery (4-item showcase)
- Blog section with 3 featured articles
- Nature quote parallax break
- Photography/imagery promotion
- Instagram feed grid (6 images)
- Newsletter subscription form

### 💎 **Jewellery Page (jewellery.html)**
The main collection hub:
- Video hero (consistent with homepage)
- Introduction to handmade pieces
- Portrait break with leaf panels
- Sale ticker banner
- Social media links section
- Three-card "How to Shop" guide
- Crystal section with floating image
- Full-width image break with parallax
- Artist and Store owner split sections

### 🧘 **Ritual Page (ritual.html)**
Spiritual ceremonies offering:
- Hero section with mystical copy
- Philosophy/mantra introduction
- Offerings with parallax image
- Three pathway cards with archetypes
- Full-width quote section
- Four embodiment practices grid
- Call-to-action section

### 📚 **Other Pages**
- **Blog:** Travel stories with card layout
- **Imagery:** Masonry gallery of photography
- **About:** Creator biography
- **Contact:** Contact form
- **Collections:** Product collection browse
- **All Products:** Full product catalog
- **Custom Designs:** Custom order details
- **Crystals:** Crystal descriptions & properties
- **Supplies:** Artist supplies marketplace
- **Gift Cards:** Gift card options
- **Rewards:** Loyalty program information

---

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, animations, variables
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Allura & Questrial typefaces
- **Vercel** - Deployment platform
- **Git** - Version control

---

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
  --paper: #f0ebe4;      /* Change background color */
  --clay: #a27d70;       /* Change text color */
  --cedar: #745950;      /* Change accent color */
  /* ... etc */
}
```

### Updating Fonts

Change the Google Fonts import in HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet" />
```

Then update the CSS:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Modifying Animations

Control animation speed in `styles.css`:

```css
.js-ready .reveal {
  transition: opacity 900ms ease;  /* Change 900ms to your duration */
}
```

Or add `data-delay` to HTML elements for staggered timing:

```html
<div data-anim="fade-up" data-delay="120">Content</div>
```

### Adding New Images

1. Upload images to `/Catelog/` directory
2. Reference in HTML: `<img src="Catelog/image-name.jpg" alt="Description" />`
3. Use descriptive alt text for accessibility

---

## 📱 Responsive Breakpoints

The design is mobile-first and adapts smoothly:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Sahil-K39/Divine-Devi-Rituals.git
cd Divine-Devi-Rituals
```

### Open Locally

No build process needed! Simply open `index.html` in your browser:

```bash
open index.html
# or
start index.html
```

Or use a local server:

```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

### Deploy to Vercel

The project is configured for Vercel deployment:

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo directly to Vercel dashboard.

---

## 📝 Content Management

### Updating Shop Information

Edit product descriptions in:
- `jewellery.html` - Shop cards and intro text
- `collections.html` - Collection pages
- `all-products.html` - Full catalog

### Managing Blog Posts

Add new blog cards in `blog.html`:

```html
<a class="hp-blog-card" href="blog.html">
  <div class="hp-blog-thumb">
    <img src="Catelog/image.jpg" alt="Post title" loading="lazy" />
  </div>
  <h3>YOUR POST TITLE</h3>
</a>
```

### Newsletter Form

The newsletter form in the footer uses a simple submit handler:

```html
<form class="hp-nl-form" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Thank you!';">
  <input type="email" placeholder="Enter your email" required />
  <button type="submit">Subscribe</button>
</form>
```

Connect to your email service (Mailchimp, Klaviyo, etc.) by updating the form action.

---

## 🎬 Animation Details

### Scroll-Triggered Animations

Elements with `data-anim` attribute animate on scroll:

```html
<section data-anim="fade-up">Content fades up</section>
<div data-anim="fade-right">Content fades from right</div>
<div data-anim="fade-left">Content fades from left</div>
```

### Parallax Effects

Background images move slower than foreground:

```html
<div data-parallax="0.07">Moves at 7% of scroll speed</div>
```

Adjust the value (0.01 - 0.2) for different parallax intensity.

---

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Features used:**
- CSS Grid & Flexbox
- CSS Custom Properties (Variables)
- IntersectionObserver API
- Fetch API (if forms are connected)

---

## 📄 License

© 2026 Devi Divine. All rights reserved.

This project is proprietary and created for Devi Divine. Unauthorized copying or distribution is prohibited.

---

## 📮 Contact

**Website:** https://divine-devi-rituals.vercel.app  
**Instagram:** [@devi__divine](https://www.instagram.com/devi__divine)  
**Email:** [contact form on website]

---

## 🙏 Credits

Designed and developed with care and attention to detail.

**Imagery Credits:** Photography sourced from personal collection and credited creators. Featured images include work from community photographers.

---

## 📚 Additional Resources

- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Vercel Docs](https://vercel.com/docs)
- [Accessible Colors](https://www.a11y-101.com/design/color-contrast)

---

**Last Updated:** May 2026  
**Version:** 1.0.0
