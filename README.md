# 🌙 Divine Devi Rituals

A beautifully crafted e-commerce website celebrating sacred rituals, handmade crystal jewellery, travel stories, and spiritual embodiment.

**Live Site:** [divine-devi-rituals.vercel.app](https://divine-devi-rituals.vercel.app)

---

## 📖 Overview

Divine Devi Rituals is a multi-page website designed with elegance and intention. It showcases:

- **Handmade Crystal Jewellery** - Curated collections of macramé and crystal adornments
- **Sacred Rituals & Ceremonies** - Spiritual guidance and embodiment practices
- **Travel & Photography** - Journey stories and destination imagery
- **Blog Content** - Adventures and ritual experiences shared with the community
- **Custom Designs** - Bespoke jewellery creation services
- **Supplies & Wholesale** - Tools and resources for fellow artists and store owners

---

## 🎨 Design & Brand

**Color Palette:**
- Paper: `#f0ebe4`
- Clay: `#a27d70`
- Cedar: `#745950`
- Ink: `#4c3c36`
- Sage: `#26352a`

**Typography:**
- Display: Allura (script)
- Body: Questrial (geometric sans-serif)

**Aesthetic:**
Earthy, mystical, and contemporary with smooth animations, parallax scrolling, and responsive design for all devices.

---

## 📁 Project Structure

```
Divine-Devi-Rituals/
├── index.html              # Homepage with hero, shop, blog, newsletter
├── jewellery.html          # Main jewellery shop page
├── about.html              # About Devi Divine
├── contact.html            # Contact form & information
├── blog.html               # Travel & ritual stories
├── imagery.html            # Photography gallery & prints
├── ritual.html             # Sacred ceremonies & practices
├── collections.html        # Curated jewellery collections
├── all-products.html       # Complete product catalog
├── customdesigns.html      # Custom jewellery order page
├── crystals.html           # Crystal guide & descriptions
├── supplies.html           # Maker supplies & wholesale
├── gift-card.html          # Gift card offerings
├── rewards.html            # Loyalty rewards program
├── styles.css              # Main stylesheet
├── script.js               # Interactive features & animations
├── Catelog/                # Images, videos, and assets
├── vercel.json             # Vercel deployment config
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## ✨ Key Features

### 🎬 **Scroll Animations**
- Intersection Observer API for performance-optimized reveals
- Multiple animation styles: fade-up, fade-left, fade-right
- Staggered animation delays for visual interest
- Respects `prefers-reduced-motion` for accessibility

### 🔄 **Parallax Scrolling**
- Smooth depth effect on images and backgrounds
- Accessible and performant implementation
- Disabled for users with motion reduction preferences

### 📱 **Responsive Design**
- Mobile-first approach
- Fluid typography with `clamp()`
- Flexible grid layouts
- Optimized for all screen sizes

### ♿ **Accessibility**
- Semantic HTML structure
- ARIA labels for navigation and interactive elements
- Accessible form inputs
- Motion preferences respected
- Color contrast compliant

### ⚡ **Performance**
- Lazy loading for images
- Optimized CSS and minimal JavaScript
- Deferred script loading
- Efficient event handling with passive listeners

---

## 🛍️ Pages Overview

### **Homepage (index.html)**
- Full-screen video hero
- Welcome introduction
- Shop jewellery showcase
- Blog highlights
- Parallax quote section
- Instagram feed grid
- Newsletter signup

### **Jewellery (jewellery.html)**
- Product video hero
- Shop pathways (collections, all products, custom designs)
- Crystal guide section
- Artist & store owner offerings
- Wholesale information

### **Ritual (ritual.html)**
- Sacred ceremony hero
- Philosophy & methodology
- Three ritual pathways (Rise in Love, Lead from Heart, Shine Your Light)
- Embodiment practices (breathwork, cacao, yoga, crystals)
- Call-to-action for bookings

### **Other Pages**
- **About** - Personal story and mission
- **Blog** - Travel & ritual stories
- **Imagery** - Photography prints & destinations
- **Collections** - Curated product categories
- **All Products** - Complete shop catalog
- **Custom Designs** - Bespoke order process
- **Crystals** - Crystal guide & properties
- **Supplies** - Maker resources
- **Contact** - Get in touch
- **Gift Cards** - Special offers
- **Rewards** - Loyalty program

---

## 🎯 Interactions & JavaScript

### **Header State Management**
- Dynamic header shadow on scroll
- Sticky positioning with smooth transitions

### **Scroll-Triggered Reveals**
- Elements animate into view as users scroll
- Configurable timing and animation types
- IntersectionObserver for optimal performance

### **Parallax Effect**
- Background images shift based on scroll position
- Creates depth and visual interest
- Smooth requestAnimationFrame updates

### **Smooth Anchor Scrolling**
- Click internal links to smoothly scroll to sections
- Natural navigation experience
- Accessibility-friendly implementation

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required (static HTML/CSS/JS)

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Sahil-K39/Divine-Devi-Rituals.git
   ```

2. Open in your browser:
   ```bash
   cd Divine-Devi-Rituals
   # Use a local server (Python, Node, etc.)
   python -m http.server 8000
   # or
   npx http-server
   ```

3. Visit: `http://localhost:8000`

### Deployment
The project is deployed on **Vercel**:
- Live: [divine-devi-rituals.vercel.app](https://divine-devi-rituals.vercel.app)
- Connect your GitHub repo to Vercel for automatic deployments

---

## 📝 Content Management

### **Images**
- All images stored in `/Catelog` directory
- Optimized for web with lazy loading
- Includes photography, product shots, and video posters

### **Forms**
- Newsletter signup: Email capture with confirmation
- Contact form: Available on contact page
- Custom order form: On custom designs page

### **Social Links**
- Instagram, TikTok, Facebook, Pinterest, YouTube, Etsy
- Featured throughout the site for community engagement

---

## 🎨 Customization

### **Colors**
Edit CSS variables in `styles.css`:
```css
:root {
  --paper: #f0ebe4;
  --clay: #a27d70;
  --cedar: #745950;
  --ink: #4c3c36;
  --sage: #26352a;
  --cream: #fffaf4;
}
```

### **Typography**
Font imports from Google Fonts can be modified in HTML `<head>` sections.

### **Content**
Update text, images, and links directly in HTML files.

### **Animations**
Adjust timing in `styles.css`:
- Transition durations
- Animation keyframes
- Delay values

---

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

© 2026 Devi Divine. All rights reserved.

---

## 🤝 Contributing

This is a personal portfolio/business website. For inquiries or collaborations, visit the [Contact](contact.html) page.

---

## 📬 Contact

**Email:** [Through contact form](contact.html)  
**Instagram:** [@devi__divine](https://www.instagram.com/devi__divine)  
**Website:** [divine-devi-rituals.vercel.app](https://divine-devi-rituals.vercel.app)

---

## 🙏 Acknowledgments

Created with intention and care for the sacred art of ritual, crystal work, and conscious living.

---

**Last Updated:** May 2026
