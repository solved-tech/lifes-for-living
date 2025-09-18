# Life's For Living - Personal Transformation Community

A beautiful, responsive website built with Next.js, TypeScript, and Tailwind CSS. Showcases Georgie's personal journey and community-focused experiences including healing retreats, adventure trips, and transformational workshops.

## 🌟 Features

- **Personal Story**: Authentic narrative of transformation and growth
- **Multiple Experiences**: Healing retreats, adventure trips, community events, online workshops
- **Instagram Integration**: Prominently featured social media presence
- **Responsive Design**: Mobile-first approach with beautiful feminine design
- **SEO Optimized**: Complete meta tags, OpenGraph, structured data, and sitemap
- **Animations**: Smooth Framer Motion animations with reduced motion support
- **Accessibility**: WCAG AA compliant with proper focus management
- **Performance**: Optimized for Lighthouse scores ≥90

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Dancing Script, Playfair Display, Nunito)
- **Deployment**: Netlify (from `dist/` directory)

## 📁 Project Structure

```
lifes-for-living/
├── frontend/              # Next.js application
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   ├── package.json      # Dependencies
│   └── next.config.ts    # Next.js configuration
├── static-deploy/        # Static HTML fallback
├── dist/                 # Built files for deployment
├── build.sh             # Build script
├── netlify.toml         # Netlify configuration
└── README.md            # This file
```

## 🎨 Design System

### Colors
- **Primary**: Purple-blue (#4A5CF3)
- **Accent Pink**: Soft pink (#FCA3CC)
- **Soft Purple**: Lavender (#E8D5FF)
- **Deep Navy**: Dark text (#2C2C54)
- **Off White**: Background (#F9F9F6)

### Typography
- **Headings**: Dancing Script (personal, handwritten feel)
- **Subheadings**: Playfair Display (elegant serif)
- **Body**: Nunito (clean, readable sans-serif)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.18.0 or higher
- npm, yarn, or pnpm

### Installation
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Netlify

This project is configured for Netlify deployment from the `dist/` directory:

### Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the configuration
3. Build command: `./build.sh`
4. Publish directory: `dist`

### Manual Deployment
```bash
./build.sh
# Upload the 'dist' folder to Netlify
```

### Build Process
The build script (`build.sh`) will:
1. Install dependencies in the `frontend/` directory
2. Build the Next.js application
3. Copy the output to the `dist/` directory
4. If the build fails, it falls back to the static HTML version

### Configuration Files
- `netlify.toml`: Build and deployment settings
- `public/_redirects`: Client-side routing support
- `next.config.ts`: Static export configuration

## 📱 Sections

- **Hero**: Personal transformation message with call-to-action
- **Marquee**: Inspirational words (Say YES, Be Brave, Choose Joy, etc.)
- **About**: Georgie's story and values (Healing, Community, Adventure)
- **Experiences**: 4 types of offerings (Retreats, Trips, Events, Workshops)
- **Featured Trips**: Transformational travel experiences
- **Instagram**: Prominently featured social media integration
- **Testimonials**: Stories of personal transformation
- **Newsletter**: Community building and updates

## 🎯 Content Management

### Update Content
- **Personal Story**: Edit `src/data/content.ts` - aboutContent
- **Experiences**: Edit `src/data/content.ts` - experiences
- **Trips**: Edit `src/data/trips.ts`
- **Testimonials**: Edit `src/data/content.ts` - testimonials
- **Inspirational Words**: Edit `src/data/content.ts` - inspirationalWords

### SEO Settings
- **Meta Tags**: Update `src/app/layout.tsx`
- **Structured Data**: Edit `src/components/SEO/StructuredData.tsx`

## 🌈 Key Features

### Personal Transformation Focus
- Authentic storytelling about overcoming challenges
- Community-building emphasis
- Multiple ways to engage (not just travel)
- Healing and growth-focused messaging

### Instagram Integration
- Dedicated section with photo grid
- Prominent follow button with Instagram gradient
- Social proof and community building
- Behind-the-scenes content promotion

### Feminine Design
- Soft color palette with purple and pink accents
- Elegant typography with script and serif fonts
- Rounded corners and glass-morphism effects
- Floating animations and gentle transitions

## 📊 Performance

- Static export for fast loading
- Optimized images and fonts
- Minimal JavaScript bundle
- SEO-friendly structure
- Mobile-first responsive design

## 📞 Support

For questions about the website, contact the development team.
For Life's For Living inquiries, visit the Instagram page or use the contact form on the website.
