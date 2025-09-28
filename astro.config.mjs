import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Add this line
import mdx from '@astrojs/mdx';

// Determine site URL based on environment
const getSiteURL = () => {
  if (process.env.PRODUCTION_URL) {
    return process.env.PRODUCTION_URL;
  }
  // For local development
  return 'http://localhost:4321';
};

// Determine site URL based on environment
const getBaseURL = () => {
  if (process.env.PRODUCTION_BASE_URL) {
    return process.env.PRODUCTION_BASE_URL;
  }
  // For local development
  return '';
};


// https://astro.build/config
export default defineConfig({
  site: getSiteURL(),
  base: getBaseURL(),
  integrations: [
    tailwind(),
    react(),
    mdx(),
  ],
});