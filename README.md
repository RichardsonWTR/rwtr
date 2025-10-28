
# rwtr Blog

This is the developer blog of [richardsonwtr](https://github.com/richardsonwtr).

Base template: [Astro Blog](https://github.com/williamcachamwri/astro-blog)

## Getting Started

### Requirements

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone repository
git clone https://github.com/richardsonwtr/rwtr

# Navigate to project directory
cd rwtr

# Install dependencies
npm install

# Create .env file from template
cp .env.example .env

# Edit .env with your information
```

### Development

```bash
# Start development server
npm run dev

# Open browser at http://localhost:4321
```

### Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Blog content (Markdown/MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Pages and routes
│   ├── styles/         # CSS and Tailwind
│   └── utils/          # Utilities and helpers
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Changing Theme

Edit `tailwind.config.js` to change colors, fonts, and other design variables:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      },
      fontFamily: {
        sans: ['Inter', ...],
        serif: [...]
      }
    }
  }
}
```

### Adding New Posts

Create a new Markdown or MDX file in the `src/content/blog` directory:

```md
---
title: "Optimizing Web Performance for Better UX"
description: "Tips and techniques for improving your website's performance and providing a better user experience."
pubDate: "2023-01-18"
heroImage: "/placeholder.svg?height=630&width=1200"
readingTime: "8 min read"
tags: ["performance", "web development", "user experience"]
---

Your post content here...
```